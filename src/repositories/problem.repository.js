const { error } = require('console');
const {Problem} = require('../models'); //model return a whole object we destruture it 
const NotFound = require('../errors/notfound.error');
// Inside Repository we going to write moongose actual query 
class ProblemRepository{
    async createProblem(problemData){
        try{
            //throw {err:"some error occurred"};
            const problem = await Problem.create({
            title : problemData.title,
            description : problemData.description,
            // you can handle testCases properties now or later it doesn't matter because its not a required property for models 
            testCases : (problemData.testCases) ? problemData.testCases : []
        })
        return problem
        }
        catch(error){
            console.log(error);
            // we throw the error because later we handle this error into controllers
            throw error
        }
    }
    async getAllProblems(){
        try{
            // There is function called find in your models if you want to filter based on any parameter you can use object to pass that parameter into that object otherwise you pass it as empty object 
            //throw "error";
            const problems = await Problem.find({})
            return problems;
        }
        catch(error){
            console.log(error);
            // we throw the error because later we handle this error into controllers
            throw error
        }
    }
    async getProblem(id){
        try{
            // There is method called findById that moongse exposes to you using this method you can find any document based on id. if you see that mongodb automatically added _id property with whatever object you created using moongse 
            const problem = await Problem.findById(id);
            if(!problem){
                // resourceName was problem and resourceValue was id
                throw new NotFound("Problem",id);
            }
            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}
module.exports = ProblemRepository
