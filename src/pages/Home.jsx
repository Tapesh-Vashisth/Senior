import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import '../styles/home.css'
import CreateModal from "../components/CreateModal";
import CreatePostModal from "../components/CreatePostModal";
import { useSelector } from "react-redux";

function Home() {
  const boards = useSelector((state) => state.boards);

  useEffect(() => {
    console.log(boards)
  }, [])
  
  return (
    <>
    <NavBar className="navbar" />
    <CreateModal />
    <CreatePostModal />
    </>
  );
}

export default Home;
