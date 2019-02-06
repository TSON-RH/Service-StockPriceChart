const mongoose = require('mongoose');

const mongoUri = 'mongodb://htlin:readonly1@ds157493.mlab.com:57493/pricedataday';
const db = mongoose.connect(mongoUri, { useMongoClient: true });

module.exports = db;
