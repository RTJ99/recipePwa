import React, { useState } from "react";
import "./header.css";
import { CgAddR } from "react-icons/cg";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import RecipesLogo from "./recipes.png";
import { Link } from "react-router-dom";
import Filter from "./Filter/Filter";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useLocation, useHistory } from "react-router-dom";
import "./Filter/filter.css";
import Nav from "react-bootstrap/Nav";
import { AiFillHome } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosIceCream } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
function Header({
  query,
  setQuery,
  requests,
  handleShowSearch,
  showSidebar,
  sidebar,
}) {
  let location = useLocation();
  let history = useHistory();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${text}`);
  };
  const onChangeHandler = (text) => {
    setText(text);
  };

  return (
    <nav className="header-container">
      <div className="header-content">
        <div className="header-left">
          <>
            <div className="navbar2 hamburger-icon">
              <FaBars
                onClick={() => {
                  showSidebar(true);
                  handleShowSearch(false);
                }}
                className="menu-bars"
              />
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <AiOutlineClose
                    size={20}
                    className="close-icon close-sidebar"
                  />
                </li>

                <Nav.Item className="genre-select">
                  <span className="link-title-main">Menu</span>
                </Nav.Item>
                <Nav.Item
                  style={{ marginTop: "10px" }}
                  className="genre-select"
                >
                  <Nav.Link
                    active={location.pathname === "/"}
                    id="nav-link"
                    eventkey="link-1"
                    onClick={() => history.push("/")}
                  >
                    <AiFillHome /> <span className="link-title">Home</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="genre-select">
                  <Nav.Link
                    active={location.pathname === "/breakfast"}
                    id="nav-link"
                    eventkey="link-1"
                    onClick={() => history.push("/breakfast")}
                  >
                    <MdFreeBreakfast />{" "}
                    <span className="link-title">Breakfast</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="genre-select">
                  <Nav.Link
                    active={location.pathname === "/lunch"}
                    id="nav-link"
                    eventkey="link-2"
                    onClick={() => history.push("/lunch")}
                  >
                    <GiHamburger /> <span className="link-title">Lunch</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="genre-select">
                  <Nav.Link
                    active={location.pathname === "/dinner"}
                    id="nav-link"
                    eventkey="link-3"
                    onClick={() => history.push("/dinner")}
                  >
                    <GiKnifeFork /> <span className="link-title">Dinner</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="genre-select">
                  <Nav.Link
                    active={location.pathname === "/desert"}
                    id="nav-link"
                    eventkey="link-4"
                    onClick={() => history.push("/desert")}
                  >
                    <IoIosIceCream /> <span className="link-title">Desert</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="genre-select">
                  <Nav.Link
                    active={location.pathname === "/drinks"}
                    id="nav-link"
                    eventkey="link-4"
                    onClick={() => history.push("/drinks")}
                  >
                    <BiDrink />
                    <span className="link-title">Drinks</span>
                  </Nav.Link>
                </Nav.Item>
              </ul>
            </nav>
          </>
          <div className="logo-div">
            <img src={RecipesLogo} alt="" className="logo" />
          </div>
        </div>
        <div className="header-center">
          <Filter />
        </div>
        <div className="header-right">
          <form onSubmit={handleSubmit}>
            <div className="input-group" style={{ display: "flex" }}>
              <input
                className="form-control search-div"
                type="search"
                name=""
                id=""
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                onClick={handleShowSearch}
                className="btn btn-sm  search-btn"
              >
                <AiOutlineSearch size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
