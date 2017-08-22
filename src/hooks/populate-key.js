// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const logger = require('winston');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    if (hook.data.product) {
      return hook.app.service('tickets')
        .find({
          query: {
            $limit: 1,
            product: hook.data.product,
            $sort: {
              createdAt: -1
            }
          }
        })
        .then(result => {
          if (result.data[0] && result.data[0].key) {
            logger.info('Last Key:', result.data[0].key);
            var splitKey = result.data[0].key.split('-');
            var keyNumber = parseInt(splitKey[1]);
            keyNumber++;
            hook.data.key = splitKey[0] + '-' + keyNumber;
            return hook;
          }
          else {
            // No previous tickets
            return hook.app.service('products')
              .get(hook.data.product)
              .then(product => {
                hook.data.key = product.key + '-' + '1';
                return hook;
              });
          }
        });
    }
  };
};
