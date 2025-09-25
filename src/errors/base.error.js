// Js have its own Error class named as Error so whatever BaseError class we make it extends tha js inbuilt error class Error 
class BaseError extends Error{
    // we call the constructor with parameter like name -> name of the error, statusCode of the error, description of the error
    constructor(name,statusCode,description,details){
        // we call the super constructor it means the constructor of Error class
        // super class here is Error class 
        super(description)
        this.name = name
        this.statusCode = statusCode
        this.description = description
        // in details we set error object or any other details 
        this.details = details
        // There is property which is Error.captureStackTrace(object) you will get the corresponding stackTrace on the corresponding object 
        Error.captureStackTrace(this)
    }
}
module.exports = BaseError