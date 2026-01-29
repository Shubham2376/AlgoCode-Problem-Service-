const {Problem} = require('../models'); //model return a whole object we destruture it 
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
}
module.exports = ProblemRepository
