const santizeMarkdownContent = require("../utils/markdownSantizier")

class ProblemService{
    // ProblemService have a ProblemRepository property this ProblemRepository property will going to be pass into constructor
    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository
    }
    async createProblem(problemData){
            // 1. Santize the markdown for description
            problemData.description = santizeMarkdownContent(problemData.description);
            console.log("Problem Data",problemData);

            const problem = await this.ProblemRepository.createProblem(problemData);
            console.log("problem created",problem);
            return problem;
    }
    async getAllProblems(){
            const problems = await this.ProblemRepository.getAllProblems();
            return problems;
    }
    async getProblem(problemId){
        const problem = await this.ProblemRepository.getProblem(problemId);
        return problem;
    }
    async deleteProblem(problemId){
        const problem = await this.ProblemRepository.deleteProblem(problemId);
        return problem;
    }
    async updateProblem(problemId,updatedData){
        if(updatedData.description){
            updatedData.description = santizeMarkdownContent(updatedData.description);
        }
        const updatedProblem = await this.ProblemRepository.updateProblem(problemId,updatedData);
        return updatedProblem
    }
}
module.exports = ProblemService