const dotenv = require('dotenv');
dotenv.config() //This line load all the environment variable
module.exports = {
    PORT : process.env.PORT
}