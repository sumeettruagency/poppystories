import React from "react";
import './index.css';
import Camera from "./components/Camera";
import Colordetect from "./components/Colordetect";

 function App() {
  return (
    <div className="App">
      <Camera />
      <Colordetect url={'https://www.shutterstock.com/image-photo/word-demo-appearing-behind-torn-600w-1782295403.jpg'} />
    </div>
  );
}
export default App;
