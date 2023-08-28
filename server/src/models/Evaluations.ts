import mongoose, { Document, Schema } from "mongoose";

interface Evaluation extends Document {
  image: string;
  ratings: Record<string, number>;
  evaluatorName: string; // Nuevo campo: nombre del evaluador
  summary: string; // Nuevo campo: resumen final
}

const evaluationSchema = new Schema<Evaluation>({
  image: { type: String, required: true },
  ratings: { type: Schema.Types.Mixed, required: true },
  evaluatorName: { type: String, required: true }, // Agregado: nombre del evaluador
  summary: { type: String, required: true }, // Agregado: resumen final
});

const EvaluationModel = mongoose.model<Evaluation>(
  "Evaluation",
  evaluationSchema
);

export default EvaluationModel;
