import React, { useState, useEffect } from "react";
// import './ProgressBar.css'; // Importa el archivo de estilos
import "../../assets/css/screens/dashboards/ProgressBar.css";

export const ProgressBar = () => {
  const checkpoints = [20, 40, 60, 80, 100];

  const [percentage, setPercentage] = useState(0);

  return (
    <div className="progress">
      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={(e) => setPercentage(e?.target?.value)}
        className="custom-range"
      />

      <div className="checkpoints">
        {[20, 40, 60, 80, 100].map((point) => (
          <span
            key={point}
            className={`checkpoint ${percentage >= point ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
