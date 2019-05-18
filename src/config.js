require('dotenv').config()

module.exports = {
  port: process.env.PORT || 9000,
  apiPath: process.env.API_PATH || 'api',
  apiVersion: process.env.API_VERSION || 'v1',
}
