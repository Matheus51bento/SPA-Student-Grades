import "./style/App.css";
import Button from "./components/button";
import React, { useState } from "react";
// import Theme from './components/theme';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleSimClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="dudinha">
        <p>Dudinha é fofinha?</p>
        <div>
          <button onClick={handleSimClick}>Sim</button>
          <Button />
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>Dudinha é muito fofinha mesmo!</p>
          </div>
        </div>
      )}
      {/* <Theme /> */}
    </div>
  );
}
