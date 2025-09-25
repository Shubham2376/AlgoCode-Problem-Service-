const BaseError = require('./base.error')
const {StatusCodes} = require('http-status-codes')
class Interna1Server extends BaseError{
    constructor(details){
        // description was generic here because any server details you don't give it in form of message so here propertyName parameter was required
        super("Interna1Server",StatusCodes.INTERNAL_SERVER_ERROR,`Something went wrong!!`,details)          
    }
}
module.exports = Interna1Server