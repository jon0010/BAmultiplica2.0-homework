import React, { useState } from "react";
import "./semanaCuatro.css";
import ImageEvaluation from "./ImageEvaluation";

interface Evaluation {
  image: string;
  ratings: Record<string, number>;
  evaluatorName: string;
  summary: string;
}

const SemanaCuatro: React.FC = () => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);

  const addToHistory = (evaluation: Evaluation) => {
    setEvaluations([...evaluations, evaluation]);
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center">Evaluador de Flyers</h2>
      <ImageEvaluation
        addToHistory={addToHistory}
        evaluationHistory={evaluations}
      />
    </div>
  );
};

export default SemanaCuatro;
