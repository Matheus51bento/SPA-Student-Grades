import React, { useEffect, useState } from "react";
import "../style/modal.css";
import axios from "axios";


function ModalMateria({ closeModal, onSubmitSuccess }) {

  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/themes/", formData);
      console.log("Form submitted successfully:", response.data);

      setFormData({
        name: "",
      });
      onSubmitSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


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
        <p>Criar Matéria</p>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalMateria;
