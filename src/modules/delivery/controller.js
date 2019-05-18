var L = require('./libs')

const DeliveryController = {
  getCost(req, res) {
    const { route } = req.body
    const cost = L.calCost(route)
    res.json({ cost })
  },

  getPossible(req, res) {
    const { start, end, maxRoutes } = req.body
    const possible = L.calPossible(start, end, maxRoutes)
    res.json({ possible })
  },

  getCheapest(_, res) {
    res.json({ Delivery: 'Delivery' })
  },

  getAll(_, res) {
    res.json({ Delivery: 'Delivery' })
  },

  get(req, res) {
    const id = req.params.id
    res.json({
      Delivery: `Delivery ${id}`,
    })
  },
}

module.exports = DeliveryController
