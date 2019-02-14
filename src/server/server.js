import express from 'express'
import routes from './routes/routes'
const port = process.env.PORT || 8811
const app = express()
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
routes(app)

app.listen(port)
