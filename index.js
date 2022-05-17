const express = require("express");
const app = express();
const axios = require("axios");
const request = require("request-promise");
const dotenv = require("dotenv");
const router_product = require("./routers/router_product");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/products', router_product);

app.get('/', (req,res) => {
  body = {
    'version': 1,
    'api': 'shopify API',
    'doc': 'http://localhost:3000/',
    'GetAllProducts': '/products',
    'create_product': '/products/new_product'
  }
  res.json({message: body })
})
app.get('/test',(req,res) => {
  res.send("hello")
})
const port = process.env.port || 3000;

app.listen(3000, () => {
  console.log(`running on port ${port}`);
});
