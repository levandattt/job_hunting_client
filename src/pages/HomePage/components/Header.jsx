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
    setModel(model);
    setIsWrapping(!isWrapping);
  };

  return (
    <div className={` select-none  w-full flex justify-between items-center `}>
      <div>
        <div
          className={`py-3 flex items-center text-base font-medium text-slate-600`}
          onClick={() => setIsWrapping(!isWrapping)}
        >
          <span>{model}</span>
          <span className={`mx-1 font-medium text-slate-600 text-lg`}>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className={`relative`}>
          <div
            className={`${
              isWrapping
                ? "hidden"
                : "flex flex-column -top-3 left-0 absolute z-30 rounded-xl bg-white/70 "
            }`}
          >
            {modelsState?.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    className={`font-medium text-slate-600 py-2 px-4 rounded-lg m-1 cursor-pointer w-fit`}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </button>
                  <div
                    key={index}
                    className={`border-t-2 border-slate-200`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" flex mr-3">
        <div className={"flex items-center mr-1"}>
          <span className="font-semibold text-slate-600 text-sm rounded-lg">
            levandat
          </span>
        </div>
        <div className={`w-9 h-9`}>
          <img
            src="/img/avatar.png"
            alt="logo"
            className="border-4 border-white/80 h-full w-full object-cover object-center rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
