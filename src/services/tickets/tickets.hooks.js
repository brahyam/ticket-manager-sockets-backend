const populateKey = require('../../hooks/populate-key');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [populateKey()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
