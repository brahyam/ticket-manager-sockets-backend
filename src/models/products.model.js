// products-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const products = new Schema({
    key: {type: String, required: true},
    name: {type: String, required: true},
    SLA: {type: Number},
    description: {type: String},
    monthlyAvailableTime: {type: Number},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });

  return mongooseClient.model('products', products);
};
