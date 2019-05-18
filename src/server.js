var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var cors = require('cors')
var config = require('./config')

function setupIndexRoute(app) {
  app.get('/', function(req, res) {
    res.send('Welcome to Delivery API')
  })
}

function setupApiRoutes(app) {
  const apiPath = config.apiPath
  const apiVersion = config.apiVersion
  const APP_DIR = `${__dirname}/modules`
  const features = fs
    .readdirSync(APP_DIR)
    .filter(file => fs.statSync(`${APP_DIR}/${file}`).isDirectory())

  features.forEach(feature => {
    const router = express.Router()
    const routes = require(`${APP_DIR}/${feature}/routes.js`)

    routes.setup(router)
    app.use(`/${apiPath}/${apiVersion}/${feature}`, router)
  })
}

function setup() {
  const app = express()
  const PORT = config.port

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())
  setupIndexRoute(app)
  setupApiRoutes(app)

  app.listen(PORT, () => console.log('App listening on: ' + PORT))
}

module.exports = {
  setup,
}
