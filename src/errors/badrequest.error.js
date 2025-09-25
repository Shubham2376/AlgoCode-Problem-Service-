const BaseError = require('./base.error')
const {StatusCodes} = require('http-status-codes')
class BadRequest extends BaseError{
    constructor(propertyName,details){
        // BaseError which is base class have there constructor so we call it from super(). constructor of base class which is BaseError wants error name, error status code and error description
        // every badrequest has common description so where has does common description comes so for that propertyName parameter was passed that which propertyName was not coming correctly lets think that we want our user to create problem in our platform so problem will have name of problem, it has desciption of problem lets think if somebody sends the description with empty description that's was a problem for my platform so we throw the BadRequest because it's a client side issue client don't send a valid issue 
        super("BadRequest",StatusCodes.BAD_REQUEST,`Invalid structure for ${propertyName} provided`,details)          
    }
}
module.exports = BadRequest
