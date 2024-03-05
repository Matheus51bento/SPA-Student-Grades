import "./style/App.css";
// import Button from "./components/button";
import React, { useState } from "react";
import Theme from "./components/theme";
import more from "./static/add.png";

import ModalMateria from "./components/modal_materia";
import axios from "axios";

export default function App() {
  
  const [showModalMateria, setShowModalMateria] = useState(false);
  const [themes, setThemes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/themes/");
      setThemes(response.data);
    } catch (error) {
      console.error("Error fetching themes:", error);
    }
  };

  const openModalMateria = () => {
    setShowModalMateria(true);
  };

  const closeModalMateria = () => {
    setShowModalMateria(false);
  };



  return (
    <div className="App">
      <h1>Sistema de Notas</h1>
      <div className="content">
        <div className="container">
          <nav className="nav-menu">
            <ul>
              <li>
                <span onClick={openModalMateria} style={{cursor: "pointer"}}>
                  Matéria
                  <img className="add" src={more} alt="Mais" />
                </span>
              </li>
            </ul>
          </nav>
          <div className="blue">
            <Theme fetchData={fetchData} themes={themes} setThemes={setThemes}/>
          </div>
        </div>
      </div>

      {showModalMateria && <ModalMateria closeModal={closeModalMateria} onSubmitSuccess={fetchData} />}

      <footer>
        <div>Por: José Matheus</div>
      </footer>
    </div>
  );
}
