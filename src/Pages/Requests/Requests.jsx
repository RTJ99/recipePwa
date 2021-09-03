import React, { useState } from "react";
import "./request.css";
import { GiFruitBowl } from "react-icons/gi";
import ModalComponent from "../../Components/Modal/Modal";
import Skeleton from "react-loading-skeleton";

function Requests({ requests, isLoadedRequests, error, loading, title }) {
  const [readMore, setReadMore] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(-1);

  const [serverError, setServerError] = useState(null);
  const [error404, setError404] = useState(null);
  const [badRequestError, setBadRequestError] = useState(null);
  const [show, setShow] = useState(false);

  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <div className="container home-container  px-4">
      {currentRecipe > -1 && (
        <ModalComponent
          setShow={setCurrentRecipe}
          show={currentRecipe}
          recipe={
            <>
              {requests[currentRecipe].recipe.ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </>
          }
        />
      )}
      <div className="container">
        <h3 className="page-title">{title}</h3>
      </div>
      <div className="row gx-3">
        {isLoadedRequests && requests.length === 0 ? (
          <div style={{ marginTop: "100px" }}>
            {" "}
            <h4 className="text-muted">No Recipes to display</h4>
          </div>
        ) : (
          requests.map((request, index) => (
            <div className="col-md-3">
              <div className="notification-container ">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {" "}
                  <div>
                    <img
                      onClick={() => setCurrentRecipe(index)}
                      src={request.recipe.image}
                      alt=""
                      className="recipe-thumbnail"
                    />
                  </div>
                  <div className="recipe-bottom">
                    <p
                      onClick={() => setCurrentRecipe(index)}
                      className="recipe-label"
                    >
                      {request.recipe.label}
                    </p>
                    <p className="dish-type">{request.recipe.dishType}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="row" style={{ flexWrap: "wrap" }}>
            <div className="col-sm" style={{ display: "block" }}>
              <div className="col-md-3">
                <div className="notification-container ">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Skeleton height={200} width={220} />
                  </div>
                  <div className="col-sm" style={{ maxWidth: "100%" }}>
                    <Skeleton height={30} width={220} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm" style={{ display: "block" }}>
              <div className="col-md-3">
                <div className="notification-container ">
                  <div
                    className="col-sm"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Skeleton height={200} width={220} />
                  </div>
                  <div className="col-sm" style={{ maxWidth: "100%" }}>
                    <Skeleton height={30} width={220} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm" style={{ display: "block" }}>
              <div className="col-md-3">
                <div className="notification-container ">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Skeleton height={200} width={220} />
                  </div>
                  <div className="col-sm" style={{ maxWidth: "100%" }}>
                    <Skeleton height={30} width={220} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm" style={{ display: "block" }}>
              <div className="col-md-3">
                <div className="notification-container ">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Skeleton height={200} width={220} />
                  </div>
                  <div className="col-sm" style={{ maxWidth: "100%" }}>
                    <Skeleton height={30} width={220} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Requests;
