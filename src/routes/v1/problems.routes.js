const express = require('express');

const {ProblemController} = require('../../controllers')

const ProblemRouter = express.Router();

ProblemRouter.get('/ping',ProblemController.pingProblemController)
ProblemRouter.get('/:id',ProblemController.getProblem)
ProblemRouter.get('/',ProblemController.getProblems)
ProblemRouter.post('/',ProblemController.addProblem)
ProblemRouter.delete('/:id',ProblemController.deleteProblem)
ProblemRouter.patch('/:id',ProblemController.updateProblem)


module.exports = ProblemRouter