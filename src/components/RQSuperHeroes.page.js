import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };

  const onError = () => {
    console.log("perform side effect after encountering error", error);
  };
  const { istLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000,
      // staleTime: 30000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: 2000,
      // refetchIntervalInBackground: true
      onSuccess,
      onError,
      // enabled: false
    }
  );

  // console.log({istLoading, isFetching})

  if (istLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="App">
      <h2>RQSuperHeroesPage</h2>
      {/* <button onClickCapture={refetch}>
        fetchSuperHeroes
      </button> */}
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            {" "}
            <Button>
              <Link to={`/rq-super-heroes\${hero.id}`}>{hero.name}</Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(RQSuperHeroesPage);
