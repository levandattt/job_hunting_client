import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

const Logout = () => {
  const { setAccessToken, setRefreshToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAccessToken();
    setRefreshToken();
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 0);
};

export default Logout;
