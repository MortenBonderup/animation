import Lottie from "lottie-react";
import anim1 from "./AE.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottie animationData={anim1} loop={true}  height={800} width={1000} style={{
      top: "10px",
      left: "10px",
      position: "fixed",
    }}/>;
    </div>
  );
}

export default App;
