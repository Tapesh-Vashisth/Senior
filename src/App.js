import React, { useState, useEffect } from "react";
import PageLoader from "./components/loaders/PageLoader";
import Navigation from "./components/Navigation";

function App() {
  const [screenLoad, setScreenLoad] = useState(true);

  useEffect(() => {
    setScreenLoad(false);
  }, [])

  return (
    <div className="App">
      {
        screenLoad
        ?
        <PageLoader />
        :
        <Navigation />
      }
    </div>
  );
}

export default App;
