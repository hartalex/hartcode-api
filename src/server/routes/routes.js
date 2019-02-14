import info from './info'
import careers from './careers'

module.exports = function (app) {
  app.get('/info', info)
  app.get('/careers', careers)
}
