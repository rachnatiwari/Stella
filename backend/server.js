import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL; 
mongoose.connect(mongodbUrl , {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());

app.use("/api/users" , userRoute);

app.get("/api/products/:id", function(req,res){
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId)
    if(product)
        res.send(product);
    else    
        res.status(404).send({msg: "Product not found"}); 
});

app.get("/api/products", function(req,res){
    res.send(data.products); 
});

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
}); 