import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import '../styles/home.css'
import { useSelector } from "react-redux";
import { BoardsList } from "../components/BoardsList";

function Home() {
  const boards = useSelector((state) => state.boards);

  useEffect(() => {
    console.log(boards)
  }, [])
  
  return (
    <>
    <NavBar className="navbar" />
    <BoardsList />

    </>
  );
}

export default Home;
