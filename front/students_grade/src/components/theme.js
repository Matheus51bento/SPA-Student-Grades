import React, { useState, useEffect } from "react";
import "../style/index.css";
import "../style/theme.css";
import axios from "axios";
import trash from "../static/trash.svg";

function Theme() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/themes/");
      setThemes(response.data);
    } catch (error) {
      console.error("Error fetching themes:", error);
    }
  };

  const deleteGrade = async (themeId, gradeId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/grades/${gradeId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting grade:", error);
    }
  };

  const deleteTheme = async (themeId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/themes/${themeId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting grade:", error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {themes.map((post) => {
        return (
          <div key={post.id} className="theme container">
            <div>
              <p>Matéria: {post.name}</p>
              {post.grades.map((grade, index) => {
                return (
                  <p className="avg" key={grade.id}>
                    Nota {index + 1}: {grade.value}{" "}
                    <img
                      className="add trash"
                      onClick={() => deleteGrade(post.id, grade.id)}
                      src={trash}
                      alt="Trash"
                    />
                  </p>
                );
              })}
            </div>
            <div className="column-container">
              <p>Média: {post.average_grade}</p>
              <div>
                <button onClick={() => deleteTheme(post.id)}>Excluir matéria</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Theme;
