const santizeMarkdownContent = require("../utils/markdownSantizier")

class ProblemService{
    // ProblemService have a ProblemRepository property this ProblemRepository property will going to be pass into constructor
    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository
    }
    async createProblem(problemData){
        try{
            // 1. Santize the markdown for description
            problemData.description = santizeMarkdownContent(problemData.description);
            console.log("Problem Data",problemData);

            const problem = await this.ProblemRepository.createProblem(problemData);
            console.log("problem created",problem);
            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }
}
module.exports = ProblemService