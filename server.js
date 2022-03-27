const express = require('express')
const app = express()
const path = require('path')

// * modules 
const home = require('./routes/home')
// port 
const port = 8000

app.use(express.static(path.join('./public')))
app.use(home)


// create server 
app.listen(port,()=>{
    console.log(`server is running on port ${port}...`)
})