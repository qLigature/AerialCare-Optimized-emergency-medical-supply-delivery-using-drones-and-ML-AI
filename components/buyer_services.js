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

module.exports = {
  retrieveNearByHospitalsAndDroneStations,
};
