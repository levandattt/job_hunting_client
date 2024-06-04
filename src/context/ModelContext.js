// src/context/ModelContext.js
import React, { createContext, useState, useEffect } from "react";

// Tạo Context
const ModelContext = createContext();

// Tạo Provider
const ModelProvider = ({ children }) => {
  // Khôi phục trạng thái từ Local Storage
  const [models, setModels] = useState(() => {
    const savedModels = localStorage.getItem("models");
    return savedModels ? JSON.parse(savedModels) : [];
  });

  const [currentModel, setCurrentModel] = useState(() => {
    const savedCurrentModel = localStorage.getItem("currentModel");
    return savedCurrentModel ? JSON.parse(savedCurrentModel) : null;
  });

  // Lưu trạng thái vào Local Storage bất cứ khi nào models hoặc currentModel thay đổi
  useEffect(() => {
    localStorage.setItem("models", JSON.stringify(models));
  }, [models]);

  useEffect(() => {
    localStorage.setItem("currentModel", JSON.stringify(currentModel));
  }, [currentModel]);

  return (
    <ModelContext.Provider
      value={{ models, setModels, currentModel, setCurrentModel }}
    >
      {" "}
      {children}{" "}
    </ModelContext.Provider>
  );
};

export { ModelContext, ModelProvider };
