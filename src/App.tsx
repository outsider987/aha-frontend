import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" text-pink-700 space-y-3">
        <Input></Input>
        <Input></Input>
      </div>
    </>
  );
}

export default App;
