import compression from 'compression'
import express, { Application, Request, Response } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app: Application = express()

app.use(morgan('dev'))
app.use(express.json({ limit: '10kb' }))
app.use(helmet())
app.use(compression())

app.get('/', (req: Request, res: Response) => {
  return res.json({ msg: 'hello' })
})

app.listen(3000, () => {
  console.log('WSV run on port 3000')
})
