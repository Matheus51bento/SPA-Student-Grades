import React, { useEffect } from "react";
import "../style/modal.css";

function ModalMateria({ closeModal }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modal")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  }, [closeModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Modal Matéria</p>
      </div>
    </div>
  );
}

export default ModalMateria;
