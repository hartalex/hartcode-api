import express from 'express'
import routes from './routes/routes'
const port = process.env.PORT || 8811
const app = express()

routes(app)

app.listen(port)
