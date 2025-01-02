import { UserType } from "../../interface/login";
import { Login_Info_Button } from "./button";

type Props = {
  Interface: UserType;
  setExitAnimation: React.Dispatch<
    React.SetStateAction<{
      opacity: number;
      x: number;
    }>
  >;
};

export const Login_Info = ({ Interface, setExitAnimation }: Props) => {
  return (
    <div className="linkWraper">
      <Login_Info_Button
        Interface={Interface}
        text="회원가입"
        setExitAnimation={setExitAnimation}
      />

      <Login_Info_Button
        Interface={Interface}
        text="이메일 및 비밀번호 찾기"
        setExitAnimation={setExitAnimation}
      />
    </div>
  );
};
