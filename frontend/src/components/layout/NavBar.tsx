import { EnterIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Btn from "../ui/Btn";
import { ModeToggle } from "../ui/mode-toggle";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, Setuser] = useState(false);

  const [params] = useSearchParams();

  const id = params.get("id");
  useEffect(() => {
    if (!id) {
      Setuser(true);
    }
  });

  return (
    <div className={`flex items-center justify-between px-10 pt-10 pb-5 z-10`}>
      <div className="flex items-center">
        <img src="../../../public/logo1.png" alt="" className="h-[50px]" />
      </div>
      <div className="flex gap-4">
        <div className="flex items-center">
          <ModeToggle />
        </div>
        <div onClick={() => navigate("/login")}>
          {" "}
          <Btn variant="secondary">
            Login <EnterIcon className="w-5 h-full" />
          </Btn>
        </div>
        <div onClick={() => navigate("/signup")}>
          {" "}
          <Btn variant="primary" className="mx-0">
            Register Now
          </Btn>
        </div>
      </div>
      <div className="md:hidden"></div>
    </div>
  );
};
