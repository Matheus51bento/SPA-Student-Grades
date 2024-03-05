import "./style/App.css";
// import Button from "./components/button";
import React, { useState } from "react";
import Theme from "./components/theme";
import more from "./static/add.png";
import ModalNotas from "./components/modal_notas";
import ModalMateria from "./components/modal_materia";

export default function App() {
  const [showModalNotas, setShowModalNotas] = useState(false);
  const [showModalMateria, setShowModalMateria] = useState(false);

  const openModalMateria = () => {
    setShowModalMateria(true);
  };

  const closeModalMateria = () => {
    setShowModalMateria(false);
  };

  const openModalNota = () => {
    setShowModalNotas(true);
  };

  const closeModalNota = () => {
    setShowModalNotas(false);
  };

  return (
    <div className="App">
      <h1>Sistema de Notas</h1>
      <div className="content">
        <div className="container">
          <nav className="nav-menu">
            <ul>
              <li>
                <span onClick={openModalNota} style={{ cursor: "pointer" }}>
                  Nota
                  <img className="add" src={more} alt="Mais" />
                </span>
              </li>
              <li>
                <span onClick={openModalMateria} style={{cursor: "pointer"}}>
                  Matéria
                  <img className="add" src={more} alt="Mais" />
                </span>
              </li>
            </ul>
          </nav>
          <div className="blue">
            <Theme />
          </div>
        </div>
      </div>
      {showModalNotas && <ModalNotas closeModal={closeModalNota} />}
      {showModalMateria && <ModalMateria closeModal={closeModalMateria} />}

      <footer>
        <div>Por: José Matheus</div>
      </footer>
    </div>
  );
}
