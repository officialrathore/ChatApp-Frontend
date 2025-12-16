import React,{ useState} from "react";
import { BiLogOutCircle } from "react-icons/bi";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/axios";
import { useAuth } from "../../context/AuthProvider";

function Logout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await api.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt"); 
      setAuthUser(null);   
      toast.success("Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[10vh]">
      <div>
        <BiLogOutCircle
          className="p-2 mt-2 ml-2 text-5xl text-white duration-300 rounded-full cursor-pointer hover:bg-slate-700"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Logout;
