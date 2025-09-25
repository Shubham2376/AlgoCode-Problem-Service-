const {StatusCodes} = require('http-status-codes')
const NotImplemented = require('../errors/notImplemented.error')

function pingProblemController(req,res){
    return res.json({
        message : "problem controller is up"
    })
}
function addProblem(req,res,next){
    // res function has a status function it set the status code of the http response and onthe of that you can chain the json
    /**
     * res.status -> it return same response object with status property set 
     * res.status.json -> it return same response object which has status property set but this json to be returned also set 
     */
    // return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    //     message : 'Not Implemented'
    // })

    try{
        // we throw not implemented and which method which is not implemented is addProblem
        // NotImplemented contructor accepts method name that is why we send addProblem as a parameter 
        throw new NotImplemented('addProblem')
    }
    catch(error){
        // i will call the next middleware with corresponding error 
        next(error)
    }
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not Implemented'
    })
}
function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not Implemented'
    })
}
function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not Implemented'
    })
}
function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not Implemented'
    })
}
module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}