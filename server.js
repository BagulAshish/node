const express = require('express')
const app = express()

app.get('/', (request, response)=>{
    response.send("Welcome to the website Helllo ASB")
})

app.listen(4000, '0.0.0.0', ()=>{
    console.log('Server started on port 4000')
})