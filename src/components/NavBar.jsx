import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/navigation.css";
import CreateModal from "./CreateModal";
import { useState } from "react";

function NavBar({type, onSearch}) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);    
  }

  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      // present all the items 
      onSearch("");
    }

    setSearch(e.target.value)
  }

  return (
    <div className="navigation_bar">
      {window.screen.availWidth > 650 && <img src={require("../assets/fullLogo.png")} alt="" />}
      {window.screen.availWidth <= 650 && <img src={require("../assets/logo.png")} alt="" />}

      <div className="navigation_right">
        <div className="navigation_searchBar">
          <label htmlFor="search">
            <span className="material-icons-outlined">search</span>
          </label>

          <form onSubmit={handleSearch}>
            <input type="search" name="search" placeholder="Search" required value={search} onChange={(e) => handleSearchChange(e)} />
          </form>
        </div>
        <div className="modal_div">

        <CreateModal setSearch = {setSearch} /> 
        </div>
      </div>
    </div>
  );
}

export default NavBar;
