const express=require('express')
require('dotenv').config()

const app =express()

const port=process.env.port 

app.get('/',(req, res)=>{
  res.send('Home')
})

app.get('/about',(req, res)=>{
  res.send(`<h2>About</h2>`)
})

app.listen(port,() => {
  console.log(`app is listening on port ${port}`)
})
