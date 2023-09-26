import express from 'express'
import path from 'path'

const app = express()
const PORT = 3000

app.use(express.static(__dirname))

app.get('/', (_req: any, res: { sendFile: (arg0: any) => void }) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT, () => {})
