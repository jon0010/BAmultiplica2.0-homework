import { Request, Response } from "express";
import Evaluations from "../models/Evaluations";
import "dotenv/config";

const createEvaluationHandler = async (req: Request, res: Response) => {
  try {
    const { ratings, evaluatorName, summary, image } = req.body;
    console.log({ a: req.body });
    const newEvaluation = new Evaluations({
      image: image,
      ratings,
      evaluatorName,
      summary,
    });

    await newEvaluation.save();
    res.status(201).json({ message: "Evaluation created successfully" });
  } catch (error) {
    console.error("Error creating evaluation:", error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the evaluation" });
  }
};

export default createEvaluationHandler;
