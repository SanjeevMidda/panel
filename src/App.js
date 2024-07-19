import { useState } from "react";
import "./index.css";
import segaull from "./assets/seagull.mp4";
import clouds from "./assets/clouds.mp4";
import icecream from "./assets/icecream.mp4";

function App() {
  const [status, setStatus] = useState(false);

  let styles = {
    transform: `translateY(${status ? "100%" : "0%"})`,
  };
  return (
    <div className="App">
      <div
        className="panel"
        // style={styles}
        onMouseEnter={() => setStatus(true)}
      >
        <h1 onMouseLeave={() => setStatus(false)}>PANEL</h1>
      </div>

      <div className="videoGrid">
        <video autoplay="true" loop>
          <source src={segaull} type="video/mp4" />
        </video>

        <video autoplay="true" loop>
          <source src={clouds} type="video/mp4" />
        </video>

        <video autoplay="true" loop>
          <source src={icecream} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
