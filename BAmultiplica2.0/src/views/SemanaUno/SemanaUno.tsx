import mario from "../../assets/mario.jpg";
import marioRealista from "../../assets/marioRealista.jpg";
import logotipo from "../../assets/logotipo.png";
import isotipo from "../../assets/isotipo.png";
import imagotipo from "../../assets/imagotipo.png";
import isologo from "../../assets/isologo.png";
import manzanaPixart from "../../assets/manzanaPixart.png";
import manzana from "../../assets/manzana.png";
import ruleta from "../../assets/ruleta.png";
import quiz from "../../assets/quiz.png";
import "./SemanaUno.css";

const SemanaUno = () => {
  return (
    <div>
      <div>
        <p className="textos1 text-center col-8 mx-auto mt-5 lh-lg fs-5">
          Tarea semana 1 <br /> - A entregar el 4/8 hasta las 23:59 <br /> 1)📌
          Buscar dos imágenes compuestas por pixeles (mapa de bits) <br />
          2)📌 Buscar un ejemplo de cada uno de los tipos de marcas y
          fundamentar: logotipo, imagotipo, isotipo e isologotipo. Luego,
          justificar la elección de colores de la marca (pensando en la
          psicología del color) <br /> 3)📌 Pensar dos actividades (una para
          hacer en clase y otra de tarea) que se les pueden proponer a los
          alumnos con los temas vistos en ambas clases de la semana.
        </p>
      </div>
      <div>
        <h2 className="titulos1 text-center">TAREA 1</h2>
      </div>
      <div className="row">
        <div className="tarjetas1 col-md-6 text-center">
          <div className="cardBox mx-auto">
            <div className="card">
              <div className="h4 lh-lg">
                En imagenes de 8 bits, los pixeles son mas faciles de apreciar y
                se puede comprender mejor como se compone la imagen de mapa de
                bits.
                <br />
                COLOCA EL CURSOR SOBRE ESTE TEXTO PARA VER UN EJEMPLO
              </div>
              <div className="content">
                <img src={mario} alt="mario" />
              </div>
            </div>
          </div>
        </div>
        <div className="tarjetas1 col-md-6 text-center">
          <div className="cardBox">
            <div className="card">
              <div className="h4 lh-lg">
                En imagenes de tipo realista, la cantidad de pixeles que se usan
                es mayor, por eso es mas dificil observarlos a menos que se haga
                un acercamiento.
                <br />
                COLOCA EL CURSOR SOBRE ESTE TEXTO PARA VER UN EJEMPLO
              </div>
              <div className="content">
                <img src={marioRealista} alt="marioRealista" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="textos1 text-center mt-4">Resumen</h3>
          <p className="textos1 col-10 mx-auto mt-4 text-center lh-lg fs-5">
            Una imagen compuesta de mapa de bits es un tipo de imagen digital
            que representa gráficos o fotografías mediante la disposición de
            píxeles individuales.
            <br /> En este tipo de imágenes, cada píxel (unidad más pequeña de
            información en una imagen digital) es una pequeña "pincelada" de
            color que se combina con otros píxeles para formar una imagen
            completa. La imagen se compone de una matriz rectangular de píxeles,
            donde cada píxel tiene su propio valor de color y se almacena como
            una secuencia de bits. Al ser representadas mediante una matriz de
            píxeles, las imágenes de mapa de bits son altamente detalladas y
            adecuadas para fotografías y gráficos complejos. <br /> Sin embargo,
            una limitación importante es que si se redimensionan (zoom)
            demasiado, es posible que se vean borrosas o pixeladas, ya que se
            apreciarán los píxeles individuales.
          </p>
        </div>
      </div>
      <div>
        <h2 className="titulos1 text-center mt-5 mb-5">TAREA 2</h2>
        <div className="text-center">
          <h3>
            LOGOTIPO: Hablamos de logotipo cuando se identifica por el texto{" "}
          </h3>
          <img src={logotipo} alt="logotipo" />
          <hr />
          <p></p>
        </div>
        <div className="text-center mt-5">
          <h3>
            ISOTIPO: Parte simbolica de la marca, esta es reconocida sin texto{" "}
          </h3>
          <img src={isotipo} alt="isotipo" />
        </div>
        <hr />
        <div className="text-center mt-5">
          <h3>
            IMAGOTIPO: Combinacion de imagen y texto, también funcionan por
            separado{" "}
          </h3>
          <img src={imagotipo} alt="imagotipo" />
        </div>
        <hr />
        <div className="text-center mt-5">
          <h3>
            ISOLOGOTIPO: El texto y el ícono conforman un grupo. No funcionan el
            uno sin el otro{" "}
          </h3>
          <img src={isologo} alt="isologo" />
        </div>
        <hr />
        <h3 className="text-center">RESUMEN</h3>
        <p className="textos1 col-10 mx-auto mt-4 text-start lh-lg fs-5">
          Lo primero a tener en cuenta es que en la psicología del color hay que
          tener en cuenta el contexto cultural y social antes de elegir el color
          que va a tener nuestro logo, ya que esto definira la manera en la que
          se va a interpretar. usemos de ejemplo el color rojo 🔴🔴🔴 <hr />
          ❤️Pasión y amor: El rojo es a menudo asociado con el amor, la pasión y
          el deseo. Representa la energía y la intensidad en relaciones
          románticas y también puede evocar emociones fuertes. <br />
          🔋Energía y acción: El rojo es un color estimulante que sugiere
          energía y acción. Es utilizado frecuentemente para llamar la atención
          y generar un sentido de urgencia o movimiento. <br />
          🔥Poder y fuerza: El rojo se asocia con el poder y la fuerza, lo que
          lo convierte en un color utilizado en muchas marcas y logotipos de
          empresas para transmitir confianza y autoridad.
          <br />
          ⚠️Peligro y advertencia: En señales de tráfico y advertencias, el
          color rojo se utiliza para indicar peligro o situaciones de alerta.
          <br />
          😡Violencia y agresión: Debido a su naturaleza intensa, el rojo
          también puede asociarse con la violencia y la agresión. Celebración y
          festividad: En algunas culturas, el rojo se asocia con la celebración
          y la buena fortuna, y se utiliza en festividades y ceremonias.
          <hr />
          Con esto, podemos entender que si estamos ideando una marca, tenemos
          que tener en cuenta la clase de producto que estamos ofreciendo y a
          que publico esta dirigido y en base a eso darle el color y las matices
          mas adecuadas ya que de eso depende el mensaje que querramos
          transmitir .
        </p>
      </div>
      <hr />
      <h2 className="titulos1 text-center">TAREA 3</h2>
      <div>
        <div>
          <h3 className="text-center mt-4 mb-5">ACTIVIDAD 1</h3>
          <p className="textos1 fs-4">
            Objetivo: Introducir a los alumnos en el concepto del pixel
            utilizando la técnica del pixel art.
          </p>
          <p className="textos1 fs-4">
            La actividad para tarea en casa sera armar nuestro propio sprite
            pixel x pixel!{" "}
            <span>
              para esta actividad se le dara a cada alumno la teoria del mapa de
              bits, qué es un pixel y cómo los píxeles individuales se combinan
              para formar mapas de bits. Para una mejor comprension, realizaran
              un diseño en pixel art
              <img className="mt-4 mb-4" src={manzanaPixart} alt="manzana" />
              Usaremos el siguiente enlace ---
              <a href="https://www.piskelapp.com/">https://www.piskelapp.com</a>
            </span>
            <br />
            Luego el estudiante deberá copiar lo mas parecido posible la imagen
            asignada en el sitio hasta completar el sprite
            <img className="mt-4" src={manzana} alt="manzana" />
          </p>
        </div>
        <div>
          <h3 className="text-center mt-4 mb-5">ACTIVIDAD 2</h3>
          <p className="textos1 fs-4">
            👉 Objetivo: Introducir a los alumnos en la historia del diseño,
            fomentar el reconocimiento del arte de distintas epocas.
            <p className="textos1 fs-4">
              La actividad para clase en vivo se dividira en dos partes, la
              primera sera que todos los estudiantes entren a mentimeter con el
              codigo de 8 numeros, una ves hayan ingresado, giramos la ruleta de
              temas sobre categorías del arte / historia del diseño:{" "}
              <span>
                <img className="mt-4 mb-4" src={ruleta} alt="ruleta" />
              </span>
              <br />
              Luego los estudiantes deberán responder la pregunta del tema en
              especifico que toco en la ruleta y finalmente se seleccionara a un
              estudiante para que aporte detalles sobre la resupesta elegida. Se
              repetira la misma gimnasia hasta finalizar la actividad
              <img className="mt-4" src={quiz} alt="manzana" />
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SemanaUno;
