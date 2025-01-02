import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((registration) => {
    registration.onupdatefound = () => {
      const installingWorker: any = registration.installing;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            // 새로운 버전이 설치되었음을 알림
            console.log(
              "새로운 업데이트가 있습니다. 앱을 새로 고치시겠습니다."
            );

            // 자동으로 새로 고침
            window.location.reload(); // 새로 고침
          }
        }
      };
    };
  });
}
