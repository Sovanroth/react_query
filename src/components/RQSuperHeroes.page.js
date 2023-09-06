import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "../App.css";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const RQSuperHeroesPage = () => {
  const { istLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

  if (istLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <h2>RQSuperHeroesPage</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}> {hero.name}</div>;
      })}
    </div>
  );
};

export default React.memo(RQSuperHeroesPage);
