require('dotenv').config()
const fs = require('fs')

const rootCert = fs.readFileSync('/etc/ssl/certs/ca-certificates.crt');

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "postgres",
        "dialectOptions": {
            ssl: {
                require: true,
                ca: rootCert, // Use the root certificate
            }
        }
    },
    "test": {
        "username": process.env.DB_ROOT_USER,
        "password": process.env.DB_ROOT_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.DB_ROOT_USER,
        "password": process.env.DB_ROOT_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "postgres"
    }
};
