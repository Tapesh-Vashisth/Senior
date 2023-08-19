import "../styles/navigation.css";
import CreateModal from "./CreateModal";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";

function NavBar({ type, onSearch, title }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);

  useEffect(() => {
    if(type === "posts") {
      setSearchIcon(true)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  
  const searchIconHandler = () => {
    setSearchIcon(false);
  }
  
  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      // present all the items
      onSearch("");
    }

    setSearch(e.target.value);
  };

  const handleNavigation = () => {
    navigate(-1);
  }

  return (
    <div className="navigation_bar">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {type === "posts" && <ArrowBackIosNewIcon onClick = {handleNavigation} style = {{cursor: "pointer"}} />}
        {type === "posts" && (
          <img
            src={require("../assets/logo.png")}
            alt=""
            style={{ marginRight: "10px" }}
          />
        )}
        {type !== "posts" && window.screen.availWidth > 650 && (
          <img src={require("../assets/fullLogo.png")} alt="" />
        )}
        {type !== "posts" && window.screen.availWidth <= 650 && (
          <img src={require("../assets/logo.png")} alt="" />
        )}
        <h4 style={{ margin: "0px" }}>
          {title}
        </h4>
      </div>

      <div className="navigation_right">
        {searchIcon ? (
          <SearchOutlinedIcon onClick={searchIconHandler} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}/>
        ) : (
          <div className="navigation_searchBar">
            <label htmlFor="search" style = {{cursor: "pointer"}}>
              <span className="material-icons-outlined">search</span>
            </label>

            <form onSubmit={handleSearch}>
              <input
                id="search"
                type="search"
                name="search"
                placeholder="Search"
                required
                value={search}
                onChange={(e) => handleSearchChange(e)}
              />
            </form>
          </div>
        )}

        {type === "posts" && <div style = {{width: "1px", alignSelf: "stretch", backgroundColor: "black"}}></div>}

        <div className="modal_div">
          {type === "posts" ? (
            <BookmarkBorderIcon />
          ) : (
            <CreateModal setSearch={setSearch} type = "create" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
