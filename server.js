
const express = require('express')
const app = express()
const expressLayouts= require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, {useNewUrlParser:true},(err)=>{
if(err){
    console.log("Connection to DB failed: "+err)
}else{console.log('DB connection established')}
})


const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/',indexRouter)


app.listen(PORT,()=>{console.log(`Server started on :${PORT}`)})