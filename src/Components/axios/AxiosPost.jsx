import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const useApiRequest = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [error404, setError404] = useState(null);
  const [badRequestError, setBadRequestError] = useState(null);

  return { serverError, error404, badRequestError, isLoaded, data };
};
