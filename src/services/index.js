const tickets = require('./tickets/tickets.service.js');
const products = require('./products/products.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(tickets);
  app.configure(products);
  app.configure(users);
};
