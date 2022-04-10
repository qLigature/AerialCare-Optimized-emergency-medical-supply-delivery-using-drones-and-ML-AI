const mongoose = require('mongoose');
const DAL = require('./DAL');

afterAll(() => {
  mongoose.connection.close();
});

// test('adding drones', async () => {
//   const drone = await DAL.addDroneStation(
//     [12.87615315607864, 77.62248890888304],
//     7
//   );
//   console.log(drone);
//   expect(drone).not.toBeFalsy();
// });

// test('searching drones stations', async () => {
//   const droneStation = await DAL.retrieveNearByDroneStations([
//     12.96619207936984, 77.6773289149413,
//   ]);
//   console.log(droneStation.length);
//   expect(droneStation).not.toBeFalsy();
// });

// test('adding hospitals', async () => {
//   const hospital = await DAL.addHospital([
//     12.858918796846462, 77.55775156875205,
//   ]);
//   console.log(hospital);
//   expect(hospital).not.toBeFalsy();
// });

// test('searching drones stations', async () => {
//   const hospital = await DAL.retrieveNearByHospitals([
//     12.925053920139511, 77.70150517333768,
//   ]);
//   console.log(hospital.length);
//   expect(hospital).not.toBeFalsy();
// });

// test('add drone', async () => {
//   const drone = await DAL.addDrone(
//     [12.925053920139511, 77.70150517333768],
//     'free'
//   );
//   console.log(drone);
//   expect(drone).not.toBeFalsy();
// });

// test('add Products', async () => {
//   const product = await DAL.addProducts();
//   console.log(product);
//   expect(product).not.toBeFalsy();
// });
