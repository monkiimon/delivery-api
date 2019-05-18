var C = require('./controller')

function setup(router) {
  router
    .get('/', C.getAll)
    .post('/cost', C.getCost)
    .post('/possible', C.getPossible)
}

module.exports = {
  setup,
}
