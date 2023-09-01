import React from "react";
import buu2 from "../../assets/buu2.gif";

function SemanaCinco() {
  console.log(React.version);
  return (
    <div>
      <h1 className="text-center mt-5">
        Ultima tarea, que emoción! La actualización esta pendente
      </h1>
      <div className="text-center mt-5 mb-5 p-5">
        <img src={buu2} alt="buu2" />
      </div>
      <p className="text-center mx-auto col-md-8 col-sm-10 mt-5 mb-5 p-5 fs-4">
        Me siento muy contento de haber participado y agradezco las enseñanzas y
        los compañeros que me llevoo de aca!
        <br /> Espero que lo que haya aportado haya sido de ayuda y ya saben que
        siempre que necesiten algun asesoramiento sobre programación o diseño,
        pueden contar conmigo!!
        <br /> Abrazo equipo BA-Multiplica 2.0!!
      </p>
    </div>
  );
}

export default SemanaCinco;
