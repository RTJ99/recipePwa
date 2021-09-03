import React from "react";
import Requests from "../Requests/Requests";
import { useApiRequest } from "./../../Components/axios/AxiosGet";
function Lunch() {
  const AppId = "179a1282";
  const AppKey = "6d7514a29991bd8d465ac2a73dce019d";
  const {
    data: requests,
    fetchData,
    error: error,
    isLoaded: isLoadedRequests,
  } = useApiRequest(
    `https://api.edamam.com/search?q="lunch"&app_id=${AppId}&app_key=${AppKey}`
  );
  return (
    <Requests
      title={"Lunch"}
      requests={requests}
      isLoadedRequests={isLoadedRequests}
      error={error}
    />
  );
}

export default Lunch;
