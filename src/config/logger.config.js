const winston = require('winston');
const { LOG_DB_URL } = require('./server-config');
// This method winston.createLogger method helps us to create a brand new logger for us 
// it accepts a object where we pass the configuration that how this logger was accepted to be work 

require('winston-mongodb');

const allowedTransports = [];
// winston.transports.Console() it make sure we configure the console based printing inside our winston logs

// The below transport configuration enables logging on the console
allowedTransports.push(new winston.transports.Console({
    // when we printing the log on console in specific format we able to do that in this way
    // specifically for console based printing we can define the format property here
    format : winston.format.combine(
        winston.format.colorize(), // it make sure the log was printed in colorized format on console
        winston.format.timestamp({
            format : 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.printf((log) =>{return `${log.timestamp} [${log.level}]: ${log.message}${
            log.stack ? `\n${log.stack}` : ''
        }`
})
    )
}));

// The below transport configuration enables logging in the mongodb database
allowedTransports.push(new winston.transports.MongoDB({
    // Inside this object we pass configuration for connecting to mongodb database
    level:'error',
    db : LOG_DB_URL,
    collection:'logs',
    options: { useUnifiedTopology: true }
})
)

// The below transport configuration enables logging in the file
allowedTransports.push(new winston.transports.File({
    filename: 'app.log',
}))


const logger = winston.createLogger({
    // format defines that when the log was printed on console or file how it was going to be printed 
    // i wanted that where my log was printed i wanted to see timestamp of that log that when my log was came up and then i try to put the remaining details of log we have to configure the winston to do that otherwise it get the default configuration
    // we define the format for any type of log printing
    // 1. first configuration - we configure the format
    // This is default formating 
    format : winston.format.combine(
        // first argument of combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format : 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.printf((log) =>{return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message} ${
            log.stack ? `\n${log.stack}` : ''
        }`
})
        // second argument of combine method is defining how the log was going to be printed
        // printf takes the call back function as the argument
        
    ),
    // next thing we configure was transports it was going to tell that where we want to print our logs
    // 2. second configuration-we configure transports
    transports:allowedTransports
})
module.exports = logger