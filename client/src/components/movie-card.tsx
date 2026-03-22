import { useFavorite } from "../context/favorite-context";
import type { IMovie } from "../types";

interface MovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { has, add, remove } = useFavorite();
  const isFavored = has(movie);

  const handleLike = () => {
    if (isFavored) {
      remove(movie);
    } else {
      add(movie);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold">{movie.name}</h3>
      </div>
      <img
        src={movie.image}
        alt={movie.name}
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <p className="text-gray-600">{movie.description}</p>
      </div>
      <div className="p-4 border-t border-gray-200 flex justify-end">
        <button
          onClick={handleLike}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
        >
          {isFavored ? "Dislike" : "Like"}
        </button>
      </div>
    </div>
  );
}
