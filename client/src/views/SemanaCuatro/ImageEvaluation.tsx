import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { VITE_UPLOAD_PRESET } from "../../variable";
import { VITE_CLOUDINARY_NAME } from "../../variable";
import "./semanaCuatro.css";

interface Evaluation {
  image: string;
  ratings: Record<string, number>;
  evaluatorName: string;
  summary: string;
}

interface ImageEvaluationProps {
  addToHistory: (evaluation: Evaluation) => void;
  evaluationHistory: Evaluation[];
}

const ImageEvaluation: React.FC<ImageEvaluationProps> = ({ addToHistory }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [evaluationRatings, setEvaluationRatings] = useState<
    Record<string, number>
  >({});
  const [elementRatings, setElementRatings] = useState<Record<string, number>>(
    {}
  );
  const [designRuleRatings, setDesignRuleRatings] = useState<
    Record<string, number>
  >({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [evaluatorName, setEvaluatorName] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const uploadPreset = VITE_UPLOAD_PRESET;
  const cloudName = VITE_CLOUDINARY_NAME;

  const evaluationCriteria = [
    "La simpleza de la pieza gráfica por sobre la cantidad de recursos utilizados",
    "Jerarquía visual",
    "Calidad del dibujo vectorial",
    "Uso apropiado de colores (esquema armonioso de colores)",
    "Correcta elección de tipografía",
    "Buen uso del espacio y composición",
    "Creatividad en el diseño",
    "Correcta alineación dentro del diseño",
    "Legibilidad del texto",
    "Correcta relación entre el diseño y la creación del posteo para una red social",
    "¿Se tiene en cuenta a la audiencia a la hora de pensar en cómo armar el diseño?",
    "Buen uso de Inkscape",
    "Calidad del diseño final (buena o mala calidad)",
    "Correcta elección y disposición de los elementos, temática, colores, tipografías, etc",
  ];

  const elementCriteria = [
    "Correcta ortografía",
    "Creación de una marca o logotipo",
    "Que el diseño contenga información relevante y esencial sobre el evento (título del evento, fecha, hora e inscripción)",
  ];

  const designRuleCriteria = [
    "Interletraje",
    "Legibilidad",
    "Estética",
    "Líneas cortas",
    "Jerarquía (y propósito de esta)",
    "Espacios entre palabra y palabra",
    "Alineación",
    "Dar lugar al espacio negativo",
    "No usar tantos efectos",
    "Herramientas usadas correctamente",
    "No seguir tendencias",
    "Evitar choque de colores",
    "No estirar las letras",
    "Fuentes decorativas (para título) - elección de tipografías",
    "Uso de fuentes consistentes",
    "Aplicar teoría de color",
    "Viudas y huérfanas",
    "Tomar en cuenta la audiencia",
  ];

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", `${uploadPreset}`);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );

        setImageUrl(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleEvaluationRatingChange = (criterio: string, rating: number) => {
    setEvaluationRatings((prevRatings) => ({
      ...prevRatings,
      [criterio]: rating,
    }));
  };

  const handleElementRatingChange = (criterio: string, rating: number) => {
    setElementRatings((prevRatings) => ({
      ...prevRatings,
      [criterio]: rating,
    }));
  };

  const handleDesignRuleRatingChange = (criterio: string, rating: number) => {
    setDesignRuleRatings((prevRatings) => ({
      ...prevRatings,
      [criterio]: rating,
    }));
  };

  const handleSubmit = async () => {
    const hasEvaluationRatings =
      Object.keys(evaluationRatings).length === evaluationCriteria.length;
    const hasElementRatings =
      Object.keys(elementRatings).length === elementCriteria.length;
    const hasDesignRuleRatings =
      Object.keys(designRuleRatings).length === designRuleCriteria.length;

    if (
      !imageUrl ||
      !hasEvaluationRatings ||
      !hasElementRatings ||
      !hasDesignRuleRatings ||
      !evaluatorName ||
      !summary
    ) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Asegúrate de llenar todos los campos antes de enviar la evaluación.",
      });
      return;
    }

    setIsSubmitting(true);

    const evaluation: Evaluation = {
      image: imageUrl,
      ratings: {
        ...evaluationRatings,
        ...elementRatings,
        ...designRuleRatings,
      },
      evaluatorName: evaluatorName,
      summary: summary,
    };

    console.log({ a: evaluation });
    try {
      const response = await axios.post(
        "http://localhost:3001/evaluation",
        evaluation
      );
      if (response.status === 201) {
        addToHistory(evaluation);
        setImageUrl("");
        setEvaluationRatings({});
        setElementRatings({});
        setDesignRuleRatings({});
        setEvaluatorName("");
        setSummary("");
        Swal.fire({
          icon: "success",
          title: "Evaluación guardada",
          text: "La evaluación se ha guardado correctamente.",
        });
        navigate("/historial");
      }
    } catch (error) {
      console.error("Error submitting evaluation:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClearImage = () => {
    setImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <label htmlFor="evaluatorName">Nombre del Evaluador:</label>
        <input
          type="text"
          id="evaluatorName"
          value={evaluatorName}
          onChange={(event) => setEvaluatorName(event.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div className="text-center mt-5 mb-5">
        <input type="file" onChange={handleImageUpload} ref={fileInputRef} />
        {imageUrl && <img src={imageUrl} alt="Uploaded" width="300" />}
        <button style={{ textDecoration: "none" }} onClick={handleClearImage}>
          cambiar imagen
        </button>
      </div>
      <div className="texto1 fs-5 fw-bold">
        <h1 className="fw-bold text-center mb-5">Criterios de evaluación:</h1>
        {evaluationCriteria.map((criterio, index) => (
          <div className="text-center" key={index}>
            <p>{criterio}</p>

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <label key={num}>
                <input
                  style={{ marginLeft: "25px" }}
                  type="radio"
                  name={`${criterio}${index}`}
                  value={num}
                  checked={evaluationRatings[criterio] === num}
                  onChange={() => handleEvaluationRatingChange(criterio, num)}
                  disabled={!imageUrl || isSubmitting}
                />
                {num}
              </label>
            ))}
            <hr />
          </div>
        ))}
        <hr />
      </div>
      <div className="texto1 fs-5 fw-bold">
        <h1 className="fw-bold text-center mb-5">Elementos necesarios:</h1>
        {elementCriteria.map((criterio, index) => (
          <div className="text-center" key={index}>
            <p>{criterio}</p>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <label key={num}>
                <input
                  style={{ marginLeft: "25px" }}
                  type="radio"
                  name={`${criterio}${index}`}
                  value={num}
                  checked={elementRatings[criterio] === num}
                  onChange={() => handleElementRatingChange(criterio, num)}
                  disabled={!imageUrl || isSubmitting}
                />
                {num}
              </label>
            ))}
            <hr />
          </div>
        ))}
        <hr />
      </div>
      <div className="texto1 fs-5 fw-bold">
        <h1 className="fw-bold text-center mb-5">Reglas para diseñar:</h1>
        {designRuleCriteria.map((criterio, index) => (
          <div className="text-center" key={index}>
            <p>{criterio}</p>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <label key={num}>
                <input
                  style={{ marginLeft: "25px" }}
                  type="radio"
                  name={`${criterio}${index}`}
                  value={num}
                  checked={designRuleRatings[criterio] === num}
                  onChange={() => handleDesignRuleRatingChange(criterio, num)}
                  disabled={!imageUrl || isSubmitting}
                />
                {num}
              </label>
            ))}
            <hr />
          </div>
        ))}
      </div>
      <div className="text-center mb-5 mt-5 d-flex flex-column align-content-center align-items-center texto1 fw-bold fs-2">
        <label htmlFor="summary">
          Resumen final y justificación de las notas:
        </label>
        <textarea
          style={{ width: "22em", alignItems: "center" }}
          id="summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          rows={6}
          disabled={isSubmitting}
        />
      </div>
      <div className="text-center">
        <button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : "Guardar Evaluación"}
        </button>
      </div>
      <hr />
      <hr />
    </div>
  );
};

export default ImageEvaluation;
