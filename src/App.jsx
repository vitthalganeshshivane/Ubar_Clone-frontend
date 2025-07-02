import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectedWrap from "./pages/UserProtectedWrap";
import CaptainProtectedWrap from "./pages/CaptainProtectedWrap";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import Riding from "./components/Riding";
import CaptainRiding from "./pages/CaptainRiding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrap>
              <Home />
            </UserProtectedWrap>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrap>
              <UserLogout />
            </UserProtectedWrap>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrap>
              <CaptainHome />
            </CaptainProtectedWrap>
          }
        />
        <Route
          path="/captain-riding"
          element={
            <CaptainProtectedWrap>
              <CaptainRiding />
            </CaptainProtectedWrap>
          }
        />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
