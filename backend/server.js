import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", function(req,res){
    res.send(data.products); 
});

app.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
}); 