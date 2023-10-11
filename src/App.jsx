import {useState} from "react";
import "./App.css";
import Callback from "./components/Callback";

function App() {
  console.log("Parent Component Re-rendered");

  const [UIcolor, setUIColor] = useState(null);
  const [activeColor, setActiveColor] = useState("Enter Your Color Here");

  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <>
      <h1>React With Vite</h1>

      <div
        className="App_color_container"
        style={{background: `${UIcolor}`}}
      ></div>
      <Callback
        getColor={getColor}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
    </>
  );
}

export default App;
