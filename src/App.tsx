import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainFrame } from "./component/login/frame";
import { Navigate, Route, Routes } from "react-router-dom";
import store, { persistor } from "./store/store";
import { Login } from "./pages/login/login";
import { HeaderFooter } from "./component/HeaderFooter/HeaderFooter";
import { Home } from "./pages/home/home";
import { useIsMobile } from "./controller/hookCustom";
import { MHeaderFooter } from "./component/HeaderFooter/mHeaderFooter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route element={<MainFrame />}>
              <Route path="/" element={<Login />} />,
              {/* <Route path="/signup/user" element={<UserSignUp />} />,
              <Route path="/findpw/user" element={<FindAccount />} />, */}
            </Route>
            {UI()}
            <Route path="*" element={<Navigate to={"/"} replace={true} />} />,
          </Routes>
        </PersistGate>
      </Provider>
      {import.meta.env.VITE_API_NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default App;

const UI = () => {
  const isMobile = useIsMobile();
  return isMobile ? MobileUI() : WebUI();
};

const MobileUI = () => {
  return (
    <Route element={<MHeaderFooter />}>
      <Route path="/home" element={<Home test={"모바일 환경입니다"} />} />,
      {/* <Route path="/home" element={<Home />} />, */}
      {/* <Route path="/home/graph" element={<Graph />} />,
        <Route path="/home/ward" element={<Ward />} />, */}
    </Route>
  );
};

const WebUI = () => {
  return (
    <Route element={<HeaderFooter />}>
      <Route path="/home" element={<Home test={"데스크탑 환경입니다."} />} />,
      {/* <Route path="/home" element={<Home />} />, */}
      {/* <Route path="/home/graph" element={<Graph />} />,
        <Route path="/home/ward" element={<Ward />} />, */}
    </Route>
  );
};
