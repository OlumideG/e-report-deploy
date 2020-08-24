const {Client} = require('pg');
require("dotenv").config();


const devConfig = {
    user: process.env.USER,
    host: process.env.HOST,
    password:process.env.PASSWORD,
    database:process.env.DATABASE_NAME,
    port: process.env.PG_PORT,
};

const proConfig = {
    connectionString: process.env.DATABASE_URL
}

const client = new Client(
    process.env.NODE_ENV === "production" ? proConfig : devConfig

);

client.connect();


module.exports = client;
 
