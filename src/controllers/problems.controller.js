function pingProblemController(req,res){
    return res.json({
        message : "problem controller is up"
    })
}
function addProblem(req,res){
    // res function has a status function it set the status code of the http response and onthe of that you can chain the json
    return res.status(500).json({
        message : 'Not Implemented'
    })

}
function getProblem(req,res){
    return res.status(500).json({
        message : 'Not Implemented'
    })
}
function getProblems(req,res){
    return res.status(500).json({
        message : 'Not Implemented'
    })
}
function deleteProblem(req,res){
    return res.status(500).json({
        message : 'Not Implemented'
    })
}
function updateProblem(req,res){
    return res.status(500).json({
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