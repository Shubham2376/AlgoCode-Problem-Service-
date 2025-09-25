const BaseError = require("../errors/base.error")
const {StatusCodes} = require('http-status-codes')
// it take err object, req object, res object and access to next middlware 
function errorHandler(err,req,res,next){
    // Badrequest, internalserver and notImplemented all this error is a BaseError because all of this class extends the BaseError class 
    if(err instanceof BaseError){
        // every BaseError has statusCode property so we can set the statusCode to status
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} //because this is exception so data was going to be provided
        })
    }
    // if there was unknown error(error others than Badrequest, internalserver and notImplemented that we implemented) then we do this 
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong",
            error: err,
            data: {} //because this is exception so data was going to be provided
        });
}
module.exports = errorHandler