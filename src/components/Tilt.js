import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from "react-parallax-tilt";

function App() {
   return (
      <Tilt>
         <div style={{ height: "300px", backgroundColor: "darkgreen"}}>
            <h1>React Parallax Tilt</h1>
         </div>
      </Tilt>
   );
}

export default App;
