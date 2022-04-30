const { parsed: localEnv } = require("dotenv").config();

const webpack = require("webpack");
const path = require("path");
const { printSourceLocation } = require("graphql");

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);
const host = JSON.stringify(process.env.HOST);
const shopifyHost = JSON.stringify(process.env.SHOPIFY_HOST);

module.exports = {
  compress: false,
  env:{
    API_KEY: process.env.API_KEY, 
    HOST: process.env.HOST, 
    SHOPIFY_HOST: process.env.SHOPIFY_HOST,
    SHOP:process.env.SHOP,
    DB_URL:process.env.DB_URL,
    
  },
  images:{
    domains:['cdn.shopify.com']
  },
  webpack: (config) => {
    const env = { API_KEY: apiKey, HOST: host, SHOPIFY_HOST: shopifyHost };
    config.plugins.push(new webpack.DefinePlugin(env));

    // Add ESM support for .mjs files in webpack 4
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    config.module.rules.push({
      test: /\.(gif|png|jpg|jpeg|svg)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 22000,
          name: "assets/[name]-[hash].[ext]",
        },
      },
    });

    config.resolve.alias["public"] = path.join(__dirname, "public");

    config.resolve.alias["@app"] = path.join(__dirname, "app");

    return config;
  },
  
};
