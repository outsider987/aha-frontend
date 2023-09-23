import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  const [isLoginPage, setIsLogin] = useState(true);
  const onSwitchLogin = () => {
    setIsLogin(!isLoginPage);
  };

  return (
    <>
      <div className="grid grid-cols-2 font-bold ">
        {isLoginPage ? <Login /> : <Register />}
        <div className="text-orange-400">
          <div className=" flex items-end h-ful cursor-pointer">
            {isLoginPage ? (
              <div
                className="flex justify-center items-center"
                onClick={onSwitchLogin}
              >
                Register
              </div>
            ) : (
              <div
                className="flex justify-center items-center"
                onClick={onSwitchLogin}
              >
                Login
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Profile></Profile>
      </div>
    </>
  );
}

export default App;
