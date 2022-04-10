const mongoose = require('mongoose');
const buyer = require('./buyer_services');

afterAll(() => {
  mongoose.connection.close();
});

// test('testing overall integration', async () => {
//   const nearByHospitalsAndDroneStations =
//     await buyer.retrieveNearByHospitalsAndDroneStations(
//       [12.90889700739329, 77.67276152037523],
//       'kidney'
//     );
//   console.log(nearByHospitalsAndDroneStations);
//   expect(nearByHospitalsAndDroneStations).not.toBeFalsy();
// });

test('testing create order', async () => {
  const order = await buyer.createOrder(
    '6251766d299811c3d93cbbc4',
    'heart',
    [12.988287284503214, 77.54459789816788]
  );
  expect(order).not.toBeFalsy();
});
