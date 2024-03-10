import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  return res.json({ msg: 'hello' })
})

app.listen(3000, () => {
  console.log('WSV run on port 3000')
})
