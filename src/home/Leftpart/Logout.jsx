
import axios from "axios";
import React,{ useState} from "react";
import { BiLogOutCircle } from "react-icons/bi";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async() => {
     setLoading(true)
     try {
        await axios.post("/api/user/logout");
        localStorage.removeItem("ChatApp");
        Cookies.remove("jwt");
        setLoading(false);
        toast.success("Logout successful");
        window.location.href = "/login"; 
     } catch (error) {
       console.error("Logout failed:", error);
      
     }
  }
  return (
    <div className="h-[10vh]">
      <div>
        <BiLogOutCircle className="p-2 mt-2 ml-2 text-5xl text-white duration-300 rounded-full cursor-pointer hover:bg-slate-700"
        onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Logout;
