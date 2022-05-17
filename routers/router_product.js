const express = require('express');

const router = express.Router();

const {instance} = require('../handlers/service/shopify-service');

router.get("/", async (req, res) => {
    try {
      const response = await instance.get(`/products.json`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });
  
router.post("/new_product", async (req, res) => {
  const data = req.body.product;
    try {
        const response = await instance.post("/products.json", {
          product: {
            title: data.title,
            product_type: data.product_type
            } 
          }
        );
        res.status(200).json(response.data);
      } catch (error) {
          res.status(500).json({ message: error });
      }
  });


module.exports= router;