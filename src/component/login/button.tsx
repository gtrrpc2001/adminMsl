import { Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleAnimateNext } from "../../controller/controller";
import { UserType } from "../../interface/login";

type Props = {
  Interface: UserType;
  text: "회원가입" | "이메일 및 비밀번호 찾기";
  setExitAnimation: React.Dispatch<
    React.SetStateAction<{
      opacity: number;
      x: number;
    }>
  >;
};

export const Login_Info_Button = ({
  Interface,
  text,
  setExitAnimation,
}: Props) => {
  const navigate = useNavigate();
  const routes = {
    회원가입: {
      관리자: "/signup/admin",
    },
    "이메일 및 비밀번호 찾기": {
      관리자: "/findpw/admin",
    },
  };

  const clickHandler = () => {
    const action = routes[text];
    if (action && action[Interface.type]) {
      handleAnimateNext(action[Interface.type], setExitAnimation, navigate);
    }
  };

  return (
    <Grid2 size={12} className="GridRow-link">
      <Button onClick={() => clickHandler()}>{text}</Button>
    </Grid2>
  );
};
