const express = require ('express');
const db = require ('./config/db');
const cors = require ('cors');

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json())

//Route to get all the posts
app.get ("/api/get", (req,res)=>{
    db.query("SELECT * FROM products" , (err,result)=>{
        if(err){
            console.log(err)
        }
    res.send(result)
    });
});

// Route to get one product
app.get("/api/getFromId/:productId", (req,res)=>{
    const id = req.params.productId;

    db.query("SELECT * FROM products WHERE productId = ?", id,
    (err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});

// Route for decreasing inventory
app.post("/api/decinv/:productId", (req,res)=>{

    const id= req.params.productId;
    db.query("UPDATE products SET inventory = inventory - 1 WHERE productId = ?", id , (err,result)=>{
      if(err){
          console.log(err)
      }  
      console.log(result)
    });
});

//test Route
app.get("/api/hello", (req,res)=> res.send('Hello there. This is a test message!'))


app.listen (port, ()=>{
    console.log (`Server is running on ${port}`)
})