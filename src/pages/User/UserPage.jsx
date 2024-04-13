import { Outlet } from "react-router-dom";
const UserPage = () => {
  return <div className={`flex flex-col min-h-screen `}>
      <div className={`min-h-full w-full`}>
        <Outlet/>
      </div>
  </div>;
};

export default UserPage;
