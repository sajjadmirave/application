const express = require('express')
const fs = require('fs')
const router = express.Router()

// home page
const homePageTemplate = fs.readFileSync("./views/home.html",'utf-8')

// if route is / 
router.get('/',(req,res)=>{
    res.end(homePageTemplate)
})

module.exports = router

