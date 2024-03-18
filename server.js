const express= require('express')
const {default:mongoose}=require('mongoose')
const dotenv =require('dotenv')
const route = require('./route/route')
const cors =require('cors')

const app=express()
dotenv.config()

mongoose.connect(process.env.MONGOOS_URI).then(()=>{
  console.log('db is connected')
}).catch((error)=>{
  console.log(error)
})

app.use(cors());
app.use('/api',route)

const port=process.env.PORT || 8000
const host=process.env.HOST || "localhost"

app.listen(port, () => {
    console.log(`Server is running on port http://${host}:${port}`);
  });