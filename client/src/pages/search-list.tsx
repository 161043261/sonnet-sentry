import { useState } from "react";
import { MovieList } from "../components/movie-list";
import { Spinner } from "../components/spinner";
import type { IMovie, IResponse } from "../types";

export function SearchList() {
  const [searchTitle, setSearchTitle] = useState("");
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchMovie = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.imdbapi.dev/interests");
      const data: IResponse = await response.json();

      const allInterests = data.categories.flatMap((cat) => cat.interests);

      const movies = allInterests.map(
        ({ id, name, primaryImage, description }) => ({
          id,
          name,
          image: primaryImage?.url || "",
          description,
        }),
      );

      const filteredMovies = movies.filter((movie) => {
        const title = searchTitle.toLowerCase();
        return (
          movie.name.toLowerCase().includes(title) ||
          (movie.description && movie.description.toLowerCase().includes(title))
        );
      });

      setMovieList(filteredMovies);
    } catch (err) {
      console.error(err);
      setMovieList([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center mt-4">
      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Movie Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <button
          onClick={handleSearchMovie}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50 cursor-pointer"
        >
          Search
        </button>
      </div>

      {isLoading ? <Spinner /> : <MovieList movieList={movieList} />}
    </div>
  );
}
