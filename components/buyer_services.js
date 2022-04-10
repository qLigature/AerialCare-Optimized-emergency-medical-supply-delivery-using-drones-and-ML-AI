const DAL = require('./DAL');

const retrieveNearByHospitalsAndDroneStations = async (userLocation) => {
  const hospitals = await DAL.retrieveNearByHospitals(userLocation);
  const nearByHospitalsAndDroneStations = [];
  for (const hospital of hospitals) {
    const temp = {};
    temp.hospital_location = hospital.location.coordinates;
    const droneStations = await DAL.retrieveNearByDroneStations(
      hospital.location.coordinates
    );
    const temp2 = [];
    for (const droneStation of droneStations) {
      //   temp.drone_stations.push(droneStation.location.coordinates);
      temp2.push(droneStation.location.coordinates);
    }
    temp.droneStations = temp2;
    nearByHospitalsAndDroneStations.push(temp);
  }
  return nearByHospitalsAndDroneStations;
};

module.exports = {
  retrieveNearByHospitalsAndDroneStations,
};
