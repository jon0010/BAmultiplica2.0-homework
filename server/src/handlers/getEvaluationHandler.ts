import { Request, Response } from "express";
import Evaluations from "../models/Evaluations";

const getEvaluationsHandler = async (_req: Request, res: Response) => {
  try {
    const evaluations = await Evaluations.find();

    // Mapea las evaluaciones para agregar la URL de Cloudinary
    const evaluationsWithUrls = evaluations.map((evaluation) => ({
      ...evaluation.toObject(),
    }));

    res.status(200).json(evaluationsWithUrls);
  } catch (error) {
    console.error("Error fetching evaluations:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching evaluations" });
  }
};

export default getEvaluationsHandler;
