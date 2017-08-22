// tickets-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const tickets = new Schema({
    key: {type: String, required: true},
    product: {type: Schema.Types.ObjectId, required: true},
    summary: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String},
    type: {type: String},
    description: {type: String},
    resolution: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });

  return mongooseClient.model('tickets', tickets);
};
