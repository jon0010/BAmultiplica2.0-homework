import CarouselComponent from "../../components/carruselPdf/CarruselPdf";
import "./semanaTres.css";

const SemanaTres = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {" "}
        <div className="col-md-8 col-sm-12 mx-auto">
          {" "}
          <p className="textos1 text-center col-md-8 mx-auto mt-5 lh-lg fs-6">
            Tarea semana 3 <br /> - A entregar el 20/8 hasta las 23:59 <br />{" "}
            1)📌Armar un flyer informativo utilizando gimp e inkscape en el que
            se invite a las personas a inscribirse a la nueva edición de BA
            Multiplica 2.0, o a cualquier curso de diseño gráfico digital.{" "}
            <br />
            2)📌 Planificar una clase que gire en torno a dar de tarea a los
            alumnos la actividad del punto 1 (el diseño de un flyer de un curso
            de diseño gráfico). Incluir objetivos de la clase, actividades,
            recursos, contenido, estructura y tiempos estimados (para que la
            clase dure dos horas). <br />
          </p>
        </div>
      </div>
      <div>
        <h2 className="titulos1 text-center tarea-title fs-1">ACTIVIDAD 1</h2>
        <p className="textos1 text-center col-md-8 mx-auto mt-5 lh-lg fs-6">
          Usando una plantilla random de canva que personalizamos a gusto 🧑‍🎨🎨,
          creamos nuestro flyer aprovechando las herramientas de InkScape para
          realizar el patrón de fondo y Gimp para insertar el contenido!! 🖌️{" "}
          <br />
          Luego del video 📽️ se encontraran un carrusel con las slides que se
          explican en el mismo y obviamente les paso algunos tips y recursos
          extra 👌 para aumentar su nivel de diseñadores!! 📈 espero que les sea
          de provecho 🍀🍀🍀 <br />
        </p>
      </div>
      <div className="embed-responsive embed-responsive-16by9 text-center">
        <iframe
          className="iframe-container"
          width="861"
          height="615"
          src="https://www.youtube.com/embed/OvuAtxeuDQk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CarouselComponent />
      <hr />
      <div>
        <h2 className="titulos1 text-center tarea-title fs-1 mt-5">
          ACTIVIDAD 2
        </h2>
        <h3 className="titulos1 text-center tarea-title fs-1 mt-5">
          CLASE DE HOY: CREACION DE UN FLYER PARA INSCRIBIRSE A UN CURSO
        </h3>
        <h3 className="titulos1 text-center tarea-title fs-1 mt-5">
          OBJETIVOS DE LA CLASE:
        </h3>
        <p className="textos1 text-start col-md-8 mx-auto mt-5 lh-lg fs-5">
          1- Comprender el funcionamiento de los programas Gimp e InkScape de
          diseño gráfico y aplicarlos a la creación de un flyer.
          <br /> 2- Utilizar esos conocimientos para diseñar un flyer atractivo
          y efectivo. <br /> 3- Aplicar principios de composición, tipografía,
          paleta de colores y herramientas de los programas en el diseño del
          flyer. <br /> 4- Demostrar habilidades creativas y de comunicación
          visual en el diseño de un proyecto concreto.
          <br />
          <hr />
          Estructura de la Clase:
          <br /> INTRODUCCION (15 minutos): Breve presentación de los objetivos
          de la clase y su relevancia en el diseño gráfico. Contextualización
          sobre la importancia de los flyers en la promoción de eventos y
          cursos.
          <hr /> CONCEPTOS BASICOS DE DISEÑO (20 minutos): Repaso de los
          principios de composición, contraste, alineación y repetición.
          Exploración de la importancia de la tipografía y la paleta de colores
          en el diseño gráfico, repaso de las herramientas que se usaran para la
          confeccion del flyer.
          <hr /> CREACION DEL FLYER (60 minutos) Demostración en pantalla de
          cómo iniciar un diseño de flyer en Gimp e InkScape. Guía paso a paso
          para la selección de imágenes, combinación de colores y elección de
          tipografía. Acompañamiento en la creación de los primeros elementos
          del flyer por parte de los estudiantes.
          <hr /> COMPARTIR ENTRE TODOS Y RETROALIMENTACION (15 minutos): Hacemos
          una pausa y cada estudiante comparte su progreso con el diseño del
          flyer con el resto de la clase. Se brinda retroalimentación
          constructiva y se destacan los aspectos positivos de cada diseño.
          <hr /> APOYO PREVIO A FINALIZAR (20 minutos): Los estudiantes
          continúan trabajando en sus flyers, aplicando los conceptos
          aprendidos. El instructor brinda asistencia según las necesidades de
          cada estudiante. <hr /> REPASO Y CIERRE (10 minutos): Se repasan los
          conceptos clave aprendidos durante la clase. Se responde a preguntas y
          dudas de los estudiantes. Se invita a los estudiantes a completar sus
          flyers en casa y a traerlos para la próxima clase. <hr /> ACTIVIDADES:
          Presentación interactiva sobre los principios de diseño gráfico.
          Creación guiada de un flyer paso a paso en Gimp e InkScape. Compartir
          y discutir los avances de los estudiantes en el diseño del flyer.
          Espacio para contestar preguntas. PLANIFICACION DEL TIEMPO ⌛:
          Introducción: 15 minutos. Conceptos Básicos de Diseño: 20 minutos.
          Creación del Flyer (parte 1): 30 minutos. Compartir y
          Retroalimentación: 15 minutos. Creación del Flyer (parte 2): 30
          minutos. Tiempo para Finalizar: 20 minutos. Repaso y Cierre: 10
          minutos.
        </p>
      </div>
    </div>
  );
};

export default SemanaTres;
