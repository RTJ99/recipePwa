import React from "react";
import Requests from "./../Requests/Requests";
import { useApiRequest } from "./../../Components/axios/AxiosGet";
function Desert() {
  const AppId = "179a1282";
  const AppKey = "6d7514a29991bd8d465ac2a73dce019d";
  const {
    data: requests,
    fetchData,
    loading,
    error: error,
    isLoaded: isLoadedRequests,
  } = useApiRequest(
    `https://api.edamam.com/search?q="desert"&app_id=${AppId}&app_key=${AppKey}`
  );

  return (
    <Requests
      loading={loading}
      title={"Desert"}
      requests={requests}
      isLoadedRequests={isLoadedRequests}
      error={error}
    />
  );
}

export default Desert;
