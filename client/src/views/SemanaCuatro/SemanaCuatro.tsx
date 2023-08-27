import React, { useState } from "react";
import "./semanaCuatro.css";
import ImageEvaluation from "./ImageEvaluation";

interface Evaluation {
  image: string;
  ratings: number[];
}

const SemanaCuatro: React.FC = () => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);

  const addToHistory = (evaluation: Evaluation) => {
    setEvaluations([...evaluations, evaluation]);
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center">Evaluador de Flyers</h2>
      <ImageEvaluation addToHistory={addToHistory} history={[]} />
      <div className="evaluation-history">
        <h3>Historial de Evaluaciones</h3>
        {evaluations.map((evaluation, index) => (
          <div key={index} className="evaluation-entry">
            <img src={evaluation.image} alt="Evaluated Image" />
            <p>Ratings: {evaluation.ratings.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemanaCuatro;
