import "./login.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { setInitialParams } from "../../controller/controller";
import { LoginUI } from "../../component/login/loginUI";
import { UserType } from "../../interface/login";

export const Login = () => {
  const location = useLocation();
  const pageStatus = location.state?.pageStatus || "init";
  const [userType, setUserType] = useState<UserType>({ type: "관리자" });
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [exitParams, setExitParams] = useState({ opacity: 0, x: 100 });

  function handleUserType(type: UserType) {
    if (type.type !== null) {
      setUserType(type);
    }
  }

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePw(e: React.ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);
  }

  return (
    <motion.div
      initial={setInitialParams(pageStatus)}
      animate={{ opacity: 1, x: 0 }}
      exit={exitParams}
      transition={{ duration: 0.5 }}
      className="SignInWraper"
    >
      <div className="Grid-Container">
        <LoginUI
          Interface={userType}
          email={email}
          pw={pw}
          setExitAnimation={setExitParams}
          handleUserType={handleUserType}
          handleEmail={handleEmail}
          handlePw={handlePw}
        />
      </div>
    </motion.div>
  );
};
