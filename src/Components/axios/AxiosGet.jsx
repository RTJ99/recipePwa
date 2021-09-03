import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const useApiRequest = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    var config = {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get(url, config)
      .then((response) => {
        setLoading(false);
        setIsLoaded(true);
        console.log(response.data);
        setData(response.data.hits);
      })
      .catch((error) => {
        setError(error);
        // setLoading(false);
        setIsLoaded(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { error, isLoaded, loading, data, fetchData };
};
