import { useState, useEffect, useContext } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { ModelContext } from "../../../context/ModelContext";

const Header = ({ children, className, disabled }) => {
  const { models, setmodels, currentModel, setCurrentModel } =
    useContext(ModelContext);
  const [state, setState] = useState({
    message: "",
    messages: [],
  });
  const [modelsState, setmodelsState] = useState([
    "Model 3.4",
    "Model 3.5",
    "Model 3.6",
  ]);
  const [model, setModel] = useState("Model 3.4");
  const [isWrapping, setIsWrapping] = useState(true);
  // onclick
  const handleClick = (model) => {
    console.log("hihi");
    setModel(model);
    setIsWrapping(!isWrapping);
  };

  useEffect(() => {
    console.log("model", model);
  }, [model]);

  return (
    <div className={` select-none  w-full `}>
      <div
        className={`py-3 flex items-center text-base`}
        onClick={() => setIsWrapping(!isWrapping)}
      >
        <span>{model}</span>
        <span className={`mx-1`}>
          <RiArrowDownSLine />
        </span>
      </div>
      <div className={`relative`}>
        <div
          className={`${
            isWrapping ? "hidden" : "absolute z-30 rounded-xl bg-white/30 "
          }`}
        >
          {modelsState?.map((modell, index) => {
            return (
              <button
                key={index}
                className={` py-2 px-4 rounded-lg m-1 cursor-pointer`}
                onClick={() => handleClick(modell)}
              >
                {modell}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
