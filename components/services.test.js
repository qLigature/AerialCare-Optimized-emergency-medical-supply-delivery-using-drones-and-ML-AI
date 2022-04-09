const mongoose = require('mongoose');
const buyer = require('./buyer_services');

afterAll(() => {
  mongoose.connection.close();
});

// test('testing overall integration', async () => {
//   const nearByHospitalsAndDroneStations =
//     await buyer.retrieveNearByHospitalsAndDroneStations([
//       12.90889700739329, 77.67276152037523,
//     ]);
//   expect(nearByHospitalsAndDroneStations).not.toBeFalsy();
// });
