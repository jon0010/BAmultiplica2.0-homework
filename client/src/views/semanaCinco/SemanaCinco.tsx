import React from "react";

function SemanaCinco() {
  console.log(React.version);
  return (
    <div className="row">
      <h2 className="titulos1 text-center tarea-title fs-1 mt-5">
        ENTREGA FINAL <br /> BA MULTIPLICA 2.0 - 3RA EDICION
      </h2>
      <div className="text-center mt-5 mb-5 col-sm-12">
        <p className="textos1 col-md-8 col-sm-10 mx-auto lh-lg fs-5 mb-3">
          En esta oportunidad les ofrezco una exposición, donde tomamos dos
          flyers publicitarios aleatorios y hacemos paso a paso el armado con
          GIMP e InkScape, mostrando en primer lugar, maneras de encarar este
          tipo de proyectos y la implementación en conjunto de ambos programas
          en el armado de productos a gusto del cliente, ademas de recursos web.
          La implementación es casi a tiempo real, pero con recortes porque el
          video crudo era de 2 horas 17 minutos 😱 <br /> Espero que les sea de
          utilidad!!!
        </p>
        <div className="embed-responsive embed-responsive-16by9 text-center">
          <iframe
            className="iframe-container"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kKsrpybZJ5w?si=8u9h-tWs8WPeIS1S"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="text-center mx-auto col-md-8 col-sm-10 mb-5 p-5 fs-4">
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
