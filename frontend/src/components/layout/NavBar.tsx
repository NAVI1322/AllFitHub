
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui/button";

export const Navbar = () => {
  const navigate = useNavigate();

  const [params] = useSearchParams();
  const id = params.get("id");
  const  token = localStorage.getItem("token") || null;

  

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-10 pt-5 pb-5 shadow-md z-10 w-full ${
        isScrolled ? "bg-slate-300 dark:bg-gray-800 transition-colors duration-250" : "" // Conditional background color change
      }`}
    >
      <div className="">
        <img
          src="../../../public/logo1.png"
          alt=""
          className="h-[50px]"
        />  
      </div>
      <div className="flex gap-4">
        <div className="flex items-center">
          <ModeToggle />
        </div>
        <div  className="flex justify-between space-x-4 ">
          <Button
          onClick={() => navigate("/signup")}
            variant="secondary"
            className={`text-md rounded-full bg-slate-300 hover:bg-slate-500 hover:text-slate-200  dark:bg-gray-800  hover:ring-offset-red-200 outline-none  ${token? "hidden": ""}`}
          >
            Register Now
          </Button>
          <Button
          onClick={() => navigate("/login")}
            variant="ghost"
            className={`text-md rounded-full ${token? "hidden": ""}`}
          >
            Login
          </Button>
          
        </div>
        <div className="flex justify-between space-x-4 ">
        <Button
            variant="link"
            onClick={()=>
              {
                navigate('/chat')
            }}
            className={`text-md rounded-full  ${token? "": "hidden"}`} >
            Try Zen AI
          </Button> 
          <Button
            variant="link"
            onClick={()=>
              {
                navigate('/diet')
            }}
            className={`text-md rounded-full ${token? "": "hidden"}`} >
           Try New recipes
          </Button> 
        <Button
            variant="secondary"
            onClick={()=>
              {
                localStorage.setItem("token","")
                localStorage.setItem("id","")
            
window.location.reload();
            }}
            className={`text-md rounded-full bg-slate-300 hover:bg-slate-500 hover:text-slate-200 hover:ring-2 hover:ring-white dark:bg-gray-800  hover:ring-offset-red-200 ring-1 ${token? "": "hidden"}`} >
            Logout
          </Button> 
        </div>
      </div>
     
    </div>
  );
};