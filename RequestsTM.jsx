import React, { useState } from "react";
import "../../Pages/Requests/request.css";
import { TiInputChecked } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { useApiRequest } from "../../Components/axios/AxiosGet";
import AxiosDelete from "../../Components/axios/AxiosDelete";
import { baseUrl } from "../../Components/baseUrl";
import FilterData from "../../Components/FilterData/FilterData";
import axios from "axios";
import ServerError from "../../Components/Errors/ServerError";
import Error404 from "../../Components/Errors/Error404";
import BadRequest from "../../Components/Errors/BadRequest";
import Spinner from "react-bootstrap/Spinner";
import Success from "../../Components/Errors/Success";
function RequestsTM() {
  const {
    data: requests,
    fetchData,
    error: errorsRequests,
    isLoaded: isLoadedRequests,
  } = useApiRequest(baseUrl + `/api/transport-manager/vehicles/requests`);
  const [showMessage, setShowMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [error404, setError404] = useState(null);
  const [badRequestError, setBadRequestError] = useState(null);
  const [filterData, setFilterData] = useState("requests");
  const handleApprove = (id) => {
    setLoading(true);

    // localStorage.setItem("token", response.tokenObj.id_token);

    var config = {
      method: "post",
      url: baseUrl + `/api/transport-manager/vehicles/requests/${id}/approve`,
      headers: {
        accept: "application/json",
        "X-XSRF-TOKEN": localStorage.getItem("csrf_token"),
        authorization: "Bearer " + localStorage.getItem("token"),
        withCredentials: true,
      },
    };

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setShowMessage(true);
          setLoading(false);
          fetchData();
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);

        if (error.response.status === 400) {
          setBadRequestError(true);
        }
        if (error.response.status === 401) {
          setBadRequestError(true);
        }
        if (error.response.status === 500) {
          setServerError(true);
        }
        if (error.response.status === 422) {
          setServerError(true);
        }
        if (error.response.status === 404) {
          setError404(true);
        }
      });
  };

  const handleDisapprove = (id) => {
    setLoading(true);

    // localStorage.setItem("token", response.tokenObj.id_token);

    var config = {
      method: "post",
      url:
        baseUrl + `/api/transport-manager/vehicles/requests/${id}/disapprove`,
      headers: {
        accept: "application/json",
        "X-XSRF-TOKEN": localStorage.getItem("csrf_token"),
        authorization: "Bearer " + localStorage.getItem("token"),
        withCredentials: true,
      },
    };

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setShowMessage(true);
          setLoading(false);
          fetchData();
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);

        if (error.response.status === 400) {
          setBadRequestError(true);
        }
        if (error.response.status === 401) {
          setBadRequestError(true);
        }
        if (error.response.status === 500) {
          setServerError(true);
        }
        if (error.response.status === 422) {
          setServerError(true);
        }
        if (error.response.status === 404) {
          setError404(true);
        }
      });
  };

  return (
    <div className="container home-container">
      <FilterData filterUser={filterData} setFilterUser={setFilterData} />
      {isLoadedRequests && requests.length === 0 ? (
        <div style={{ marginTop: "100px" }}>
          {" "}
          <h4 className="no-new-requests">You have no new Requests</h4>
        </div>
      ) : (
        requests.map((request, index) => (
          <div style={{ marginTop: "30px" }} className="notification-container">
            <div style={{ display: "flex" }}>
              <div className="notification-status">
                {" "}
                <div style={{ marginTop: "5px" }}>
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="btn btn-primary btn-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDisapprove(request.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Disapprove
                  </button>
                </div>
              </div>
              <div style={{ marginTop: "15px", fontWeight: "400" }}>
                <p>{request.purpose}</p>
              </div>
            </div>
            <div className="notification-buttons">
              <div className="icon-button">
                <RiDeleteBin5Line
                  size={25}
                  className="delete-icon-button text-danger"
                  onClick={() =>
                    AxiosDelete({
                      url: "client/vehicles/requests",
                      id: request.id,
                      fetchData,
                    })
                  }
                />
              </div>
              {/* <div className="icon-button">
                <BsPencilSquare
                  size={25}
                  className=" edit-icon-button text-secondary"
                />
              </div> */}
            </div>
            {serverError && <ServerError setShowMessage={setShowMessage} />}
            {badRequestError && <BadRequest setShowMessage={setShowMessage} />}
            {error404 && <Error404 setShowMessage={setShowMessage} />}
            {showMessage && <Success setShowMessage={setShowMessage} />}
          </div>
        ))
      )}
    </div>
  );
}

export default RequestsTM;
