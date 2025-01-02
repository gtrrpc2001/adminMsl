import { Footer } from "./footer/footer";
import { MHeader } from "./mHeader/mHeader";
import "./HeaderFooter.scss";
import { Outlet } from "react-router-dom";

export const MHeaderFooter = () => {
  return (
    <div className="home">
      <div className="header">
        <MHeader>
          <div className="body">
            <div className="mainBody">
              <Outlet />
            </div>
          </div>
          <div className="footer">
            <Footer language={true} />
          </div>
        </MHeader>
      </div>
    </div>
  );
};
