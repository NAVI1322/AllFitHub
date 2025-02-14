import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || null;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-10 py-4 shadow-lg z-10 w-full backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <img
          src="/assets/logo1.png"
          alt="Logo"
          className="h-8 sm:h-12 w-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ModeToggle />
        {!token ? (
          <>
            <Button
              onClick={() => navigate("/signup")}
              variant="ghost"
              className="text-sm sm:text-base font-medium bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full px-4 py-2 transition-all duration-300"
            >
              Sign Up
            </Button>
            <Button
              onClick={() => navigate("/login")}
              className="text-sm sm:text-base font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6 py-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Login
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              localStorage.setItem("token", "");
              localStorage.setItem("id", "");
              window.location.reload();
            }}
            className="text-sm sm:text-base font-medium bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-full px-6 py-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Logout
          </Button>
        )}
      </div>
    </motion.div>
  );
};