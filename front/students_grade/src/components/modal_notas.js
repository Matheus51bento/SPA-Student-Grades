import React, { useEffect, useState } from "react";
import axios from "axios";

function ModalNotas({ closeModal, initialThemeId, onSubmitSuccess }) {
  // const [themeId, setThemeId] = useState(initialThemeId);
  const [formData, setFormData] = useState({
    value: "" // Definindo o campo "value" no estado inicial de formData
  });

  useEffect(() => {
    // setThemeId(initialThemeId);
    console.log(initialThemeId)
  }, []);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/grades/", {
        theme: initialThemeId,
        value: formData.value // Usando o valor correto do estado formData
      });
      console.log("Formulário enviado com sucesso:", response.data);
      setFormData({
        value: "" // Limpando o campo "value" após o envio do formulário
      });
      onSubmitSuccess();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="value">Nota:</label> {/* Corrigindo htmlFor */}
            <input
              type="number"
              id="value"
              name="value"
              value={formData.value}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ModalNotas;
