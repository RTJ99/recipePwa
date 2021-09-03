import React from "react";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./filter.css";
export default function FilterUsers({ filterUser, setFilterUser }) {
  let location = useLocation();
  let history = useHistory();
  return (
    <div className="container">
      <Nav
        variant="pills"
        className="nav_pills"
        justify
        defaultActiveKey="/all"
      >
        <Nav.Item className="genre-select">
          <Nav.Link
            active={location.pathname === "/"}
            id="nav-link"
            eventkey="link-1"
            onClick={() => history.push("/")}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="genre-select">
          <Nav.Link
            active={location.pathname === "/breakfast"}
            id="nav-link"
            eventkey="link-1"
            onClick={() => history.push("/breakfast")}
          >
            Breakfast
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="genre-select">
          <Nav.Link
            active={location.pathname === "/lunch"}
            id="nav-link"
            eventkey="link-2"
            onClick={() => history.push("/lunch")}
          >
            Lunch
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="genre-select">
          <Nav.Link
            active={location.pathname === "/dinner"}
            id="nav-link"
            eventkey="link-3"
            onClick={() => history.push("/dinner")}
          >
            Dinner
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="genre-select">
          <Nav.Link
            active={location.pathname === "/desert"}
            id="nav-link"
            eventkey="link-4"
            onClick={() => history.push("/desert")}
          >
            Desert
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="genre-select">
          <Nav.Link
            active={location.pathname === "/drinks"}
            id="nav-link"
            eventkey="link-4"
            onClick={() => history.push("/drinks")}
          >
            Drinks
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
