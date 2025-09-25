const express = require('express');
const bodyParser = require('body-parser')

const {PORT} = require('./config/server-config');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');
const app = express();

// I allow three incoming input formats for body parser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

// if any request comes and route starts with /api we map it to apiRouter
app.use('/api',apiRouter)

app.get('/ping',(req,res)=>{
   return res.json({
    message : 'Problem service is alive'
   })
})

// Last middleware if any error comes
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
    try{
        throw new BaseError("some error",404,{errorMessage:"something went wrong"})
    }
    catch(error){
        console.log("Something went wrong")
    }
})

