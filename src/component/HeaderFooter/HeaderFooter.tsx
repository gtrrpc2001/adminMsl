import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import "./HeaderFooter.scss";
import { Outlet } from "react-router-dom";

export const HeaderFooter = () => {
  return (
    <div className="home">
      <div className="header">
        <Header>
          <div className="body">
            <div className="mainBody">
              <Outlet />
            </div>
          </div>
          <div className="footer">
            <Footer language={true} />
          </div>
        </Header>
      </div>
    </div>
  );
};
