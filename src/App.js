import React, { useState, useEffect } from "react";
import PageLoader from "./components/loaders/PageLoader";
import Navigation from "./components/Navigation";
import { useDispatch } from "react-redux";
import { boardActions } from "./features/boardSlice";
import { toast } from "react-toastify";

function App() {
  const [screenLoad, setScreenLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setScreenLoad(true);
    const boards = localStorage.getItem("Boards");

    if (boards) {
      dispatch(boardActions.setBoards(JSON.parse(boards)));
    }

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
