import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { AiOutlineFileSearch } from "react-icons/ai";

const DropdownComponent = ({
  value,
  options,
  placeholder = "Select",
  onChange,
  handleSubmit,
  onChangeHandler,
  showSearch,
}) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    onChange(selectedValue);
    setOpen(false);
  };
  let history = useHistory();
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  console.log(open, "ppppp");
  return (
    <div ref={node} className="dropdown">
      <Form className="search-form" onSubmit={handleSubmit} inline>
        <input
          value={value}
          onClick={(e) => setOpen(!open)}
          onChange={onChange}
          type="search"
          placeholder="Search"
          className="mr-sm-2 searchbox form-control search-large-screen"
        />
        {showSearch && (
          <div
            className="search-small-screen"
            id="search-small-screen"
            style={{ display: "flex" }}
          >
            <input
              onChange={(e) => onChangeHandler(e.target.value)}
              onClick={(e) => setOpen(!open)}
              value={value}
              type="search"
              placeholder="Search"
              className="mr-sm-2 searchbox form-control"
            />
            <button onClick={handleSubmit} className="btn search-form-btn">
              <AiOutlineFileSearch className="search-icon" />
            </button>
          </div>
        )}
        {open && value !== "" && options && (
          <div className="search-suggestions">
            {options.map((result, key) => (
              <div
                className="suggestions"
                onClick={() => {
                  history.push(`/Preview/${result.id}`);
                }}
                key={key}
              >
                {result.title}
              </div>
            ))}
          </div>
        )}
      </Form>
    </div>
  );
};

export default DropdownComponent;
