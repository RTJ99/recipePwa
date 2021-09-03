import React from "react";
import Requests from "../Requests/Requests";
import { useApiRequest } from "./../../Components/axios/AxiosGet";
function Home() {
  const AppId = "179a1282";
  const AppKey = "6d7514a29991bd8d465ac2a73dce019d";
  const {
    data: requestsTrending,
    loading: loading1,
    error: errorTrending,
    isLoaded: isLoadedRequests1,
  } = useApiRequest(
    `https://api.edamam.com/search?q="trending"&app_id=${AppId}&app_key=${AppKey}&from=1&to=5`
  );

  const {
    data: requestsRecent,
    loading: loading2,
    error: errorRecent,
    isLoaded: isLoadedRequests2,
  } = useApiRequest(
    `https://api.edamam.com/search?q="beef"&app_id=${AppId}&app_key=${AppKey}&from=1&to=5`
  );

  const {
    data: requestsAlcohol,
    loading: loading3,
    error: errorAlcohol,
    isLoaded: isLoadedRequests3,
  } = useApiRequest(
    `https://api.edamam.com/search?q="wine"&app_id=${AppId}&app_key=${AppKey}&from=2&to=6`
  );

  const {
    data: requestsBD,
    loading: loading4,
    error: errorBD,
    isLoaded: isLoadedRequests4,
  } = useApiRequest(
    `https://api.edamam.com/search?q="rice"&app_id=${AppId}&app_key=${AppKey}&Diet="balanced"from=1&to=5`
  );

  return (
    <>
      <div>
        <Requests
          loading={loading1}
          requests={requestsTrending}
          isLoadedRequests={isLoadedRequests1}
          error={errorTrending}
          title={"Trending this week"}
        />
      </div>
      <div className="req2">
        {" "}
        <Requests
          loading={loading2}
          requests={requestsRecent}
          isLoadedRequests={isLoadedRequests2}
          error={errorRecent}
          title={"Most Recent"}
        />
      </div>
      <div className="req2">
        <Requests
          loading={loading3}
          requests={requestsAlcohol}
          isLoadedRequests={isLoadedRequests3}
          error={errorAlcohol}
          title={"Alcohol-Cocktail"}
        />
      </div>
      <div className="req2">
        <Requests
          loading={loading4}
          requests={requestsBD}
          isLoadedRequests={isLoadedRequests4}
          error={errorBD}
          title={"Balanced Diet"}
        />
      </div>
    </>
  );
}

export default Home;
