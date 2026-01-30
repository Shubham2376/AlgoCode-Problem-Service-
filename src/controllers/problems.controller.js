const {StatusCodes} = require('http-status-codes')
const NotImplemented = require('../errors/notImplemented.error')
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories');
const { success } = require('zod');
const { error } = require('console');

// we create the instance of ProblemService by passing the ProblemRepository instance to it
const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req,res){
    return res.json({
        message : "problem controller is up"
    })
}
async function addProblem(req,res,next){
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
        //throw new NotImplemented('addProblem')
        console.log("Incoming req body",req.body);
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Successfully created the Problem",
            error:{},
            data:newProblem
        })

    }
    catch(error){
        // i will call the next middleware with corresponding error 
        next(error)
    }
}

async function getProblem(req,res,next){
     try{ 
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully fetched the Problem",
            error:{},
            data:problem
        })
    }
    catch(error){
        // i will call the next middleware with corresponding error 
        next(error)
    }
}
async function getProblems(req,res,next){
     try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully fetched all the Problems",
            error:{},
            data:response
        }) 
    }
    catch(error){
        // i will call the next middleware with corresponding error 
        next(error)
    }
}
function deleteProblem(req,res,next){
     try{ 
        throw new NotImplemented('deleteProblem')
    }
    catch(error){
        // i will call the next middleware with corresponding error 
        next(error)
    }
}
function updateProblem(req,res,next){
     try{
        throw new NotImplemented('updateProblem')
    }
    catch(error){
        // i will call the next middleware with corresponding error 
        next(error)
    }
}
module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}