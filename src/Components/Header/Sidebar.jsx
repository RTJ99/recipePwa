import React from "react";
import Nav from "react-bootstrap/Nav";
import { useLocation, useHistory } from "react-router-dom";
import "./Filter/filter.css";
import { AiFillHome } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import { IoIosIceCream } from "react-icons/io";
function Sidebar(props) {
  let location = useLocation();
  let history = useHistory();
  return (
    <nav className={props.sidebar ? "sidebar-container active" : "nav-menu"}>
      <div className="sidebar-content">
        <Nav.Item className="genre-select">
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
            <MdFreeBreakfast /> <span className="link-title">Breakfast</span>
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
            <span className="link-title">Desert</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="genre-select">
          <Nav.Link
            active={location.pathname === "/drinks"}
            id="nav-link"
            eventkey="link-4"
            onClick={() => history.push("/drinks")}
          >
            <IoIosIceCream />
            <span className="link-title">Drinks</span>
          </Nav.Link>
        </Nav.Item>
      </div>
    </nav>
  );
}

export default Sidebar;
