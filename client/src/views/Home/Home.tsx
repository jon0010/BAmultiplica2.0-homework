import image1 from "../../assets/image1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="container-fluid home-div"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <div className="row">
        <div className="col-12 text-center fontCustom2">
          <h1 className="titulo lh-lg">
            BUENOS AIRES <br /> MULTIPLICA 2.0
          </h1>
          <h2 className="subtitulo fontCustom2 fs-1">3ra edicion</h2>
        </div>
        <div>
          <p className="textoInicio text-center fw-semibold lh-lg mt-5">
            "¡Bienvenido/a a mi sitio relacionado a la capacitación para ser
            promotor de BA Multiplica 2.0 en Diseño Digital y Gestión de
            Proyectos! Vas a poder ver todas las tareas relacionadas con la
            capacitación, las cuales voy a ir actualizando semanalmente a medida
            que avance el curso. <br /> Cada semana presentaré las tareas que
            debo realizar para seguir mi progreso en la formación como promotor
            de BA Multiplica 2.0. <br /> Vamos a completar cada tarea con
            entusiasmo y dedicación. ¡Juntos/as lograremos alcanzar nuestros
            objetivos y potenciar nuestras habilidades en diseño digital y
            gestión de proyectos! <br /> ¡Gracias por la oportunidad de aplicar
            para tener la posibilidad de ser parte de este programa de
            capacitación para el desarrollo de mis habilidades para el futuro!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
