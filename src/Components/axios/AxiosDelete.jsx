import React from "react";
import axios from "axios";
import { baseUrl } from "./../baseUrl";

const AxiosDelete = (props) => {
  if (window.confirm("Are you sure you want to delete?") === false) {
    return;
  }

  if (props.setLoading) {
    props.setLoading(true);
  }

  var config = {
    method: "delete",
    url: baseUrl + `/api/${props.url}/${props.id}`,
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("token"),
      accept: "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      props.fetchData();
      if (response.status === 400) {
        if (props.setBadRequestError) {
          props.setBadRequestError(true);
        }
      }
      if (response.status === 500) {
        if (props.setServerError) {
          props.setServerError(true);
        }
      }
      if (response.status === 422) {
        if (props.setWrongDetails) {
          props.setWrongDetails(true);
        }
      }
      if (response.status === 404) {
        if (props.setError404) {
          props.setError404(true);
        }
      }
    })
    .catch(function (error) {
      if (error.response.status === 400) {
        if (props.setDisable) {
          props.setDisable(true);
        }
      }
    });
};
export default AxiosDelete;
