const express = require('express')
const path = require ('path')
const app = express()
const port = 3000

app.get('/test-me200', (req, res) => {
  res.send('Hello World!')
})
app.get('/About_us', (req, res) => {
   // res.send('Welcome to Hell!')
   //res.sendFile(path.join(__dirname,'index.html'))
   //res.status(500)
   res.json({
       name:"akash"
   })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})