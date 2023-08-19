import React from "react";
import NavBar from "../components/NavBar";
import '../styles/home.css'
import CreateModal from "../components/CreateModal";
import CreatePostModal from "../components/CreatePostModal";

function Home() {
  return (
    <>
    <NavBar className="navbar" />
    <CreateModal />
    <CreatePostModal />
    </>
  );
}

export default Home;
