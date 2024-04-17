
const Item = ({children,icon,onClick, iconOnly, className, disabled}) => {
    return (
        <div className={`w-full flex items-center px-3 py-2 mb-4 ${className} `}>
            <span className={`text-xl mr-2`}>{icon}</span>
            <span className={`w-full text-sm whitespace-nowrap text-ellipsis overflow-hidden`}>{children}</span>
        </div>
    )
};

export default Item;
  