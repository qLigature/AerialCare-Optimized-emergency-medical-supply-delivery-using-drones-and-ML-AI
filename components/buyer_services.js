const DAL = require('./DAL');

const retrieveNearByHospitalsAndDroneStations = async (
  userLocation,
  product
) => {
  const hospitals = await DAL.retrieveNearByHospitals(userLocation);
  const nearByHospitalsAndDroneStations = [];
  for (const hospital of hospitals) {
    const productsAvailable = await DAL.retrieveProducts(hospital.products_id);
    if (productsAvailable[product].availability === 0) continue;

    const temp = {};
    temp.hospital_location = hospital.location.coordinates;
    const droneStations = await DAL.retrieveNearByDroneStations(
      hospital.location.coordinates
    );

    const temp2 = [];
    for (const droneStation of droneStations) {
      temp2.push(droneStation.location.coordinates);
    }

    temp.droneStations = temp2;
    nearByHospitalsAndDroneStations.push(temp);
  }

  if (nearByHospitalsAndDroneStations.length === 0)
    return 'No Hospitals Available';
  return nearByHospitalsAndDroneStations;
};

const calculateNearestHospitalAndDroneStation = async (product, location) => {
  const nearByHospitalsAndDroneStations =
    await retrieveNearByHospitalsAndDroneStations(location, product);
  // python code impl
  return {
    hospital_location: [12.862942282462, 77.5538673154103],
    drone_location: [13.0107655735535, 77.5122388931732],
  };
};

const calculatePrice = async (hospitalLocation, product) => {
  const hospital = await DAL.retrieveHospital(hospitalLocation);
  const products = await DAL.retrieveProductsByHospitalID(hospital._id);
  return products[product].price;
};

const createOrder = async (user_id, product, location, notes) => {
  const nearestHospitalAndDroneStation =
    await calculateNearestHospitalAndDroneStation(product, location);

  const total_price = await calculatePrice(
    nearestHospitalAndDroneStation.hospital_location,
    product
  );

  const order = await DAL.createOrder({
    user_id,
    destination_location: { coordinates: location },
    hospital_location: {
      coordinates: nearestHospitalAndDroneStation.hospital_location,
    },
    drone_location: {
      coordinates: nearestHospitalAndDroneStation.drone_location,
    },
    total_price,
    ordered_item: product,
    notes,
  });
  await DAL.updateUserOrders(user_id, order._id);
  return order;
};

module.exports = {
  retrieveNearByHospitalsAndDroneStations,
  createOrder,
};
