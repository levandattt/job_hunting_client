import { Link } from "react-router-dom";

const Item = ({ children, icon, id, iconOnly, className, disabled }) => {
  return (
    <Link
      to={`/chat/${id}`}
      className={`text-slate-500 font-medium no-underline w-full flex items-center px-3 py-2 mb-4 ${className} `}
      key={id}
    >
      <div className={`flex items-center`}>
        <span className={`text-xl mr-2`}>{icon}</span>
        <span
          className={`w-full text-sm whitespace-nowrap text-ellipsis overflow-hidden`}
        >
          {children}
        </span>
      </div>
    </Link>
  );
};

export default Item;
