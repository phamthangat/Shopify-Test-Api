
const axios = require("axios");

const instance = axios.create({
    baseURL: "https://shopth123.myshopify.com/admin/api/2022-01/",
    timeout: 1000,
    headers: {
      "X-Shopify-Access-Token": "",
      "content-type": "application/json",
    },
  });

  module.exports = {
    instance
  }