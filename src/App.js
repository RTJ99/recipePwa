import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { useApiRequest } from "./Components/axios/AxiosGet";
import Header from "./Components/Header/Header";
import Body from "./Pages/Body";
import Requests from "./Pages/Requests/Requests";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Lunch from "./Pages/Lunch/Lunch";
import Breakfast from "./Pages/Breakfast/Breakfast";
import Dinner from "./Pages/Dinner/Dinner";
import Drinks from "./Pages/Drinks/Drinks";
import Desert from "./Pages/Desert/Desert";
import { useHistory } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = `/search/${text}`;
  };
  const onChangeHandler = (text) => {
    setText(text);
  };
  const handleShowSearch = () => {
    setShowSearch(true);
  };

  const AppId = "179a1282";
  const AppKey = "6d7514a29991bd8d465ac2a73dce019d";
  const {
    data: requests,
    loading,
    error: error,
    isLoaded: isLoadedRequests,
  } = useApiRequest(
    `https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`
  );
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="app">
      <BrowserRouter>
        <Header
          sidebar={sidebar}
          showSidebar={showSidebar}
          handleShowSearch={handleShowSearch}
          requests={requests}
          query={query}
          setQuery={setQuery}
        />
        {showSearch && !sidebar && (
          <form onSubmit={handleSubmit}>
            <div
              className="input-group"
              style={{ display: "flex", marginTop: "70px" }}
            >
              <input
                className="form-control search-div-shown"
                type="search"
                name=""
                id=""
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                onClick={handleShowSearch}
                type="submit"
                className=" btn-search"
              >
                <AiOutlineSearch size={30} style={{ marginTop: "-8px" }} />
              </button>
            </div>
          </form>
        )}
        <Switch>
          <Route
            exact
            path="/search/:q"
            render={(props) => {
              return <Body {...props} />;
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} />;
            }}
          />

          <Route
            exact
            path="/lunch"
            render={(props) => {
              return <Lunch {...props} />;
            }}
          />
          <Route
            exact
            path="/breakfast"
            render={(props) => {
              return <Breakfast {...props} />;
            }}
          />
          <Route
            exact
            path="/dinner"
            render={(props) => {
              return <Dinner {...props} />;
            }}
          />
          <Route
            exact
            path="/drinks"
            render={(props) => {
              return <Drinks {...props} />;
            }}
          />
          <Route
            exact
            path="/desert"
            render={(props) => {
              return <Desert {...props} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
