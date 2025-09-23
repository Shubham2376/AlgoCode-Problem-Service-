const dotenv = require('dotenv');
dotenv.config() //This line load all the environment variable
module.exports = {
    // if somebody don't set the port variable you can't get from the environment variable then i return the hard coded value so that server was always running 
    PORT : process.env.PORT || 3000
}