const express = require('express')
require('dotenv').config()
const app = express()

const port = 3000

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port, ()=>{
    console.loh(`Example app listening on http://localhost:${port} `)
})