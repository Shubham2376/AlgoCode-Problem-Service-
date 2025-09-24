const {StatusCodes} = require('http-status-codes')

function pingProblemController(req,res){
    return res.json({
        message : "problem controller is up"
    })
}
function addProblem(req,res){
    // res function has a status function it set the status code of the http response and onthe of that you can chain the json
    /**
     * res.status -> it return same response object with status property set 
     * res.status.json -> it return same response object which has status property set but this json to be returned also set 
     */
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message : 'Not Implemented'
    })

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