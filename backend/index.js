const express= require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path')

const app =express()
app.use(cors())
const PORT = process.env.PORT || 4000;
dotEnv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected successfully!"))
.catch((error)=>console.log(error))
app.use(bodyParser.json());

app.use('/vendor',vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT,()=>{
    console.log(`server started running at ${PORT}`);
})
app.use('/home', (req, res)=>{
    res.send("<h1> Welcome to Food App");
})