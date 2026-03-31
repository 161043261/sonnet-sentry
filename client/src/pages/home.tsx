import { useState, useEffect } from "react";
import { MovieList } from "../components/movie-list";
import { Spinner } from "../components/spinner";
import type { IMovie, IResponse } from "../types";

export function Home() {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieList = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.imdbapi.dev/interests");
        const data: IResponse = await response.json();

        if (data.categories && data.categories.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * data.categories.length,
          );
          const { interests: randomInterests } = data.categories[randomIndex];
          const movies = randomInterests.map(
            ({ id, name, primaryImage, description }) => ({
              id,
              name,
              image: primaryImage?.url || "",
              description,
            }),
          );
          setMovieList(movies);
        }
      } catch (err) {
        console.error(err);
        setMovieList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieList();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <MovieList movieList={movieList} />;
}
