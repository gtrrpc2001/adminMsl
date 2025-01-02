import { Button, Grid2 } from "@mui/material";

type Props = {
  disabled: boolean;
};

export const Login_Button = ({ disabled }: Props) => {
  return (
    <Grid2 size={12} className="GridRow-center">
      <div className="loginButtonWraper">
        <Button
          variant="contained"
          className="loginButton"
          type="submit"
          disabled={disabled}
        >
          로그인
        </Button>
      </div>
    </Grid2>
  );
};
