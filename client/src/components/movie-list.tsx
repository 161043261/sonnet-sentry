import { MovieCard } from "./movie-card";
import type { IMovie } from "../types";

interface MovieListProps {
  movieList: IMovie[];
}

export function MovieList({ movieList }: MovieListProps) {
  if (movieList.length === 0) {
    return <h1 className="text-center text-2xl mt-4">Empty Movie List</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
