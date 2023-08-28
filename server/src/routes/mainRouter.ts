import { Router } from "express";
import evaluationRouter from "./createEvaluationRouter";

const mainRouter = Router();

mainRouter.use("/evaluation", evaluationRouter);

export default mainRouter;
