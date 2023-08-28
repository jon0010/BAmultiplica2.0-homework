import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HistorialDeEvaluaciones.css"; // Importa tu archivo de estilos CSS

interface Evaluation {
  image: string;
  ratings: Record<string, number>;
  evaluatorName: string;
  summary: string;
}

interface HistorialDeEvaluacionesProps {
  // Define las props necesarias si las hay
}

const HistorialDeEvaluaciones: React.FC<
  HistorialDeEvaluacionesProps
> = ({}) => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);

  useEffect(() => {
    // Realizar una solicitud GET al backend para obtener las evaluaciones
    axios
      .get("http://localhost:3001/evaluation")
      .then((response) => {
        setEvaluations(response.data);
        console.log({ a: response.data });
      })

      .catch((error) => {
        console.error("Error fetching evaluations:", error);
      });
  }, []);

  return (
    <div className="historial-container">
      <h1>Historial de Evaluaciones</h1>
      <div className="cards-container">
        {evaluations.map((evaluation, index) => (
          <div className="card" key={index}>
            <h2>Evaluación {index + 1}</h2>
            <p>Evaluador: {evaluation.evaluatorName}</p>
            <p>Resumen: {evaluation.summary}</p>
            {evaluation.image && (
              <img src={evaluation.image} alt={`Evaluación ${index + 1}`} />
            )}
            <h3>Calificaciones:</h3>
            <ul>
              {Object.entries(evaluation.ratings).map(
                ([criterio, calificacion]) => (
                  <li key={criterio}>
                    {criterio}: {calificacion}
                    <hr />
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorialDeEvaluaciones;
