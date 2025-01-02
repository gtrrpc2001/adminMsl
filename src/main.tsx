import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true, // 즉시 등록
  onNeedRefresh() {
    console.log("새로운 버전이 있습니다. 페이지를 새로 고침하세요.");
    // 사용자에게 새로 고침을 요청할 수 있는 로직 추가 가능
  },
  onOfflineReady() {
    console.log("오프라인 모드 준비 완료.");
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
