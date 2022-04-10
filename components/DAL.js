require('../db/mongoose');
const Users = require('../models/User');
const DroneStations = require('../models/DroneStation');
const Hospitals = require('../models/Hospital');
const Drone = require('../models/Drone');
const Products = require('../models/Products');
const Orders = require('../models/Orders');

const saveUser = async (userDetails) => new Users(userDetails).save();

const checkUserExistence = async (email, password) =>
  Users.findOne({ email, password });

const addDroneStation = async (location, number_of_drones) =>
  new DroneStations({
    'location.coordinates': location,
    number_of_drones_available: number_of_drones,
  }).save();

const addHospital = async (location) =>
  new Hospitals({ 'location.coordinates': location }).save();

const retrieveNearByDroneStations = async (location) =>
  DroneStations.find({
    location: {
      $geoWithin: {
        $centerSphere: [location, 6 / 3963.2],
      },
    },
    number_of_drones_available: { $gt: 0 },
  });

const retrieveNearByHospitals = async (location) =>
  Hospitals.find({
    location: {
      $geoWithin: {
        $centerSphere: [location, 6 / 3963.2],
      },
    },
  });

const addDrone = async (current_location, status) =>
  new Drone({
    'current_location.coordinates': current_location,
    status,
  }).save();

const retrieveProducts = async (product_id) => Products.findById(product_id);

const retrieveProductsByHospitalID = async (hospital_id) =>
  Products.findOne({ hospital_id });

const createOrder = async (order) => new Orders(order).save();

const retrieveHospital = async (location) =>
  Hospitals.findOne({
    location: {
      $near: {
        $geometry: { type: 'Point', coordinates: location },
      },
    },
  });

const updateUserOrders = async (userId, orderId) =>
  Users.updateOne({ _id: userId }, { $push: { orders: orderId } });

module.exports = {
  checkUserExistence,
  saveUser,
  addDroneStation,
  retrieveNearByDroneStations,
  addHospital,
  retrieveNearByHospitals,
  addDrone,
  retrieveProducts,
  createOrder,
  retrieveHospital,
  retrieveProductsByHospitalID,
  updateUserOrders,
};
