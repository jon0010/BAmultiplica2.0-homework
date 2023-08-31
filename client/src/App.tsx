import { Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SemanaUno from "./views/SemanaUno/SemanaUno";
import SemanaDos from "./views/SemanaDos/SemanaDos";
import SemanaTres from "./views/SemanaTres/SemanaTres";
import SemanaCuatro from "./views/SemanaCuatro/SemanaCuatro";
import HistorialDeEvaluaciones from "./views/historialDeEvaluaciones/HistorialDeEvaluaciones";
import SemanaCinco from "./views/semanaCinco/SemanaCinco";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semanauno" element={<SemanaUno />} />
        <Route path="/semanados" element={<SemanaDos />} />
        <Route path="/semanatres" element={<SemanaTres />} />
        <Route path="/semanacuatro" element={<SemanaCuatro />} />
        <Route path="/semanacinco" element={<SemanaCinco />} />
        <Route path="/historial" element={<HistorialDeEvaluaciones />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
