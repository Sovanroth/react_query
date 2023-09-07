import React from "react";
import useSuperHeroesData from "../hook/useSuperHeroesData";
import { useParams } from "react-router-dom";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const {data} = useSuperHeroesData(heroId);


  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RQSuperHero;
