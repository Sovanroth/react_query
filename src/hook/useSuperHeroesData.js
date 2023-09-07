import { useQuery } from "react-query";
import axios from "axios";

// const onSuccess = (data) => {
//   console.log("perform side effect after data fetching", data);
// };

// const onError = (error) => {
//   console.log("perform side effect after encountering error", error);
// };

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const useSuperHeroesData = (onSuccess, onError) => {
  useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: 2000,
    // refetchIntervalInBackground: true
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name)
    //   return superHeroNames
    // },
    // enabled: false
  });
};

export default useSuperHeroesData