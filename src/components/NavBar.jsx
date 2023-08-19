import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/navigation.css";
import CreateModal from "./CreateModal";

function NavBar() {
    console.log(window.screen.availWidth);
  return (
    <div className="navigation_bar">
      {window.screen.availWidth > 650 && <img src={require("../assets/fullLogo.png")} alt="" />}
      {window.screen.availWidth <= 650 && <img src={require("../assets/logo.png")} alt="" />}

      <div className="navigation_right">
        <div className="navigation_searchBar">
          <label htmlFor="search">
            <span className="material-icons-outlined">search</span>
          </label>

          <input type="text" name="search" placeholder="Search" />
        </div>
        <div className="modal_div">

        <CreateModal /> 
        </div>
      </div>
    </div>
  );
}

export default NavBar;
