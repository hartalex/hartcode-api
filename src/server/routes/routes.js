import info from './info'

module.exports = function (app) {
  app.get('/info', info)
}
