import { Router } from "express";
import getEvaluationsHandler from "../handlers/getEvaluationHandler";
import createEvaluationHandler from "../handlers/createEvaluationHandler";

export const evaluationRouter = Router();

evaluationRouter.post("/", createEvaluationHandler);
evaluationRouter.get("/", getEvaluationsHandler);

export default evaluationRouter;
