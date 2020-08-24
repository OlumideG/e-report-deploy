const {Client} = require('pg');
require("dotenv").config();

const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    password:process.env.PASSWORD,
    database:process.env.DATABASE_NAME,
    port: process.env.PORT,
});

client.connect();


module.exports = client;
 
