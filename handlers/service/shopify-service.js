
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const instance = axios.create({
    baseURL: "https://shopth123.myshopify.com/admin/api/2022-01/",
    timeout: 1000,
    headers: {
      "X-Shopify-Access-Token": `${process.env.App_Store_Token}`,
      "content-type": "application/json",
    },
  });

  module.exports = {
    instance
  }