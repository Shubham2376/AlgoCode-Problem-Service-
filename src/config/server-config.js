const dotenv = require('dotenv');
dotenv.config() //This line load all the environment variable
module.exports = {
    // if somebody don't set the port variable you can't get from the environment variable then i return the hard coded value so that server was always running 
    PORT : process.env.PORT || 3000,
    ATLAS_DB_URL : process.env.ATLAS_DB_URL,
    NODE_ENV : process.env.NODE_ENV || "development" //default value is development environment i.e if nothing was already setup we set it to development environment 
}