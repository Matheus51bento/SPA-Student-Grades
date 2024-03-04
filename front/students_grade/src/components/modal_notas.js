import React, { useEffect } from "react";
import "../style/modal.css";

function ModalNotas({ closeModal }) {
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
        <p>Modal content here</p>
      </div>
    </div>
  );
}

export default ModalNotas;
