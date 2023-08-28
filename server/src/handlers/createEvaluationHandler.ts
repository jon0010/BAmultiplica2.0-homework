import { Request, Response } from "express";
import Evaluations from "../models/Evaluations"; // Asegúrate de importar el modelo correctamente

const createEvaluationHandler = async (req: Request, res: Response) => {
  try {
    const { image, ratings, evaluatorName, summary } = req.body;

    const newEvaluation = new Evaluations({
      image,
      ratings,
      evaluatorName, // Nuevo campo: nombre del evaluador
      summary, // Nuevo campo: resumen final
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
