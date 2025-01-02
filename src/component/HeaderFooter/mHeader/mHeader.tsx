import { useNavigate } from "react-router-dom";
import "./mHeader.scss";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
// import { saveLog } from "../../../data/login";
// import { useDispatch, useSelector } from "react-redux";
// import { loginActions } from "../../../components/createslice/createslices";
// import { AppDispatch, RootState } from "../../../store/store";
import { PropsWithChildren, useRef, useState } from "react";
import { Menu } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { MenuList } from "../../Menu/List";
import { LOGO } from "../../../controller/controller";

export const MHeader = ({ children }: PropsWithChildren) => {
  const navigation = useNavigate();
  //   const eqSelector = useSelector<RootState, string>((state) => state.eq);
  //   const useCheckDispatch = useDispatch<AppDispatch>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const titleClick = () => {
    navigation("/home");
  };

  const HandleLogout = async () => {
    // const loginBool = await saveLog(eqSelector, "로그아웃");
    // useCheckDispatch(loginActions.loginCheck(!loginBool));
    navigation("/");
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const adminMenuList = [
    {
      name: "제품",
      Icon: LocalMallIcon,
      contents: [
        { name: "현황", func: () => {}, path: "#" },
        { name: "등록", func: () => {}, path: "#" },
        { name: "수정", func: () => {}, path: "#" },
      ],
    },
  ];

  return (
    <Box>
      <div className={`MobileSilderButton ${isDrawerOpen ? "open" : ""}`}>
        <Box className="MobileDrawerButtonWrapper">
          <IconButton
            ref={buttonRef}
            onClick={toggleDrawer}
            className="MobileDrawerButton"
          >
            <Menu className="menu" />
          </IconButton>
        </Box>
        {children}
      </div>
      <div>
        <Drawer
          ref={drawerRef}
          className="AppDrawer"
          variant="persistent"
          anchor="right"
          open={isDrawerOpen}
          transitionDuration={300}
        >
          <div onClick={titleClick} className="headerTitleDiv">
            <Typography align="center" className="headerTitle">
              {LOGO}
            </Typography>
          </div>

          <div className="menuList">
            <MenuList adminMenuList={adminMenuList} />
          </div>
          <div className="logoutbuttonDiv">
            <Button
              className="logoutbutton"
              onClick={HandleLogout}
              variant="outlined"
            >
              <LogoutIcon />
              <Typography className="logOutText">로그아웃</Typography>
            </Button>
          </div>
        </Drawer>
      </div>
    </Box>
  );
};
