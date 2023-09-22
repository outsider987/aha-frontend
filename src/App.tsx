import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { selectAuth } from "./store";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";

function App() {
  const authState = useSelector(selectAuth);
  const isPassLogin = authState.accessToken ? true : false;
  const [isLoginPage, setIsLogin] = useState(true);
  const onSwitchLogin = () => {
    setIsLogin(!isLoginPage);
  };

  return (
    <>
      <div className="grid grid-cols-2 font-bold ">
        {isLoginPage ? <Login /> : <Register />}
        <div className="text-orange-400">
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
      <div>
        <Profile></Profile>
      </div>
    </>
  );
}

export default App;
