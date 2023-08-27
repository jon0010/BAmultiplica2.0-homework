import React, { useState } from "react";

interface Evaluation {
  image: string;
  ratings: number[];
}

interface ImageEvaluationProps {
  history: Evaluation[];
  addToHistory: (evaluation: Evaluation) => void;
}

const ImageEvaluation: React.FC<ImageEvaluationProps> = ({
  history,
  addToHistory,
}) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [ratings, setRatings] = useState<number[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ratingValue = parseInt(event.target.value);
    if (event.target.checked) {
      setRatings([...ratings, ratingValue]);
    } else {
      setRatings(ratings.filter((rating) => rating !== ratingValue));
    }
  };

  const submitEvaluation = () => {
    const evaluation: Evaluation = {
      image: imageUrl,
      ratings: ratings,
    };
    addToHistory(evaluation);
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <label key={num}>
            <input
              type="checkbox"
              value={num}
              checked={ratings.includes(num)}
              onChange={handleRatingChange}
            />
            {num}
          </label>
        ))}
      </div>
      <button onClick={submitEvaluation}>Submit</button>
    </div>
  );
};

export default ImageEvaluation;
