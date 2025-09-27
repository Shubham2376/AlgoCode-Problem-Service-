const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server-config');

async function connectToDB(){
    // why we use try catch because this is risky piece of code lets say if you want to connect with db server but the db server is not up then what you do in that case 
    try{
        // based on different different environment that you are working on you connect with that db if it was prod environment then we will connect with some other url 
        if(NODE_ENV == "development"){
            await mongoose.connect(ATLAS_DB_URL)
        }  
    }
    catch(error){
        console.log("unable to connect to the DB server");
        console.log(error);
    }
}

module.exports = connectToDB