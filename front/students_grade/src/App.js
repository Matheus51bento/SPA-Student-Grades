import "./style/App.css";
// import Button from "./components/button";
import React, { useState } from "react";
import Theme from "./components/theme";
import more from "./static/add.png";
import ModalNotas from "./components/modal_notas";
import ModalMateria from "./components/modal_materia";

export default function App() {
    const [showModalNotas, setShowModalNotas] = useState(false);

    const openModal = () => {
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
                <span onClick={openModal} style={{ cursor: "pointer" }}>
                  Nota
                  <img className="add" src={more} alt="Mais" />
                </span>
              </li>
              <li>
                <span >
                  Matéria
                  <img className="add" src={more} alt="Mais" />
                </span>
              </li>
            </ul>
          </nav>
          <div className="container blue">
            <Theme />
          </div>
        </div>
      </div>
      {showModalNotas && <ModalNotas closeModal={closeModalNota} />}
      
      <footer>
          <div>Por: José Matheus</div>
      </footer>
    </div>
  );
}
