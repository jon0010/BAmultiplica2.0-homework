import "./semanaDos.css";

const SemanaDos = () => {
  return (
    <div className="container-fluid">
      <p className="textos1 text-center col-md-8 mx-auto mt-5 lh-lg fs-6">
        Tarea semana 2 <br /> - A entregar el 13/8 hasta las 23:59 <br /> 1)📌
        Pensar una actividad para el inicio de la clase y una para finalizar.
        Alguna de estas dos actividades tiene que ser un juego. <br />
        2)📌 Grabarse a ustedes mismos explicando una parte de la teoría o
        realizando un ejercicio (paso a paso) en alguno de los dos programas de
        diseño. <br />
      </p>
      <div>
        <h2 className="titulos1 text-center tarea-title fs-1">ACTIVIDADES</h2>
        <p className="textos1 text-center col-md-8 mx-auto mt-5 lh-lg fs-6">
          LA MAZMORRA DEL DRAGÓN!! <br />
          Se van a separar en grupos para entrar a la mazmorra del dragón, un
          juego que prepare para medir sus conocimientos en historia, arte y por
          supuesto, GIMP <br />
          Entrarán al siguiente enlace que los llevará directo a la puerta de la
          mazmorra y luego de debatir con un limite de tiempo, iran recolectando
          las gemas para derrotar a un dragon!! <br />
        </p>
        <div className="textos1 text-center col-md-8 mx-auto mt-5 lh-lg fs-6">
          <h2 className="titulos2 text-center tarea-title">
            INGRESA A LA MAZMORRA AQUI
          </h2>
          <a href="https://view.genial.ly/64d544f5f052d7001a734821/interactive-content-breakout-la-mazmorra-del-dragon">
            Enlace a la Mazmorra del Dragón
          </a>
        </div>
      </div>
      <div className="text-center">
        <div>
          <h2 className="titulos1 text-center tarea-title fs-1">CLASE 1</h2>
          <p className="textos1 text-center col-md-8 mx-auto mt-5 lh-lg fs-6">
            COMO APLICAR EFECTO NEÓN A TUS PROYECTOS!! <br />
            En el siguiente video vamos a crear un proyecto donde vamos a
            aplicar efecto de neón a una foto realista <br />
            Depende su creatividad para que le saquen el mayor provecho a la
            tecnica, disfrutenlo!! <br />
          </p>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="iframe-container"
            width="861"
            height="615"
            src="https://www.youtube.com/embed/gVIlfC4QwbE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SemanaDos;
