import React from "react";
import SplashScreen from "./Pages/SplashScreen";
import  { useState } from "react";
import Navigate from "./Navigate";
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationEnd = () => {
    setShowSplash(false); // Hide splash screen after animation
  };
  return (
    <>
      <div>
      {showSplash ? <SplashScreen onAnimationEnd={handleAnimationEnd} /> : <Navigate />}
    </div>
   <Navigate/>
    </>
    
  );
};

export default App;
