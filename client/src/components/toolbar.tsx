import { Search, Heart } from "lucide-react";
import type { TPage } from "../types";

interface ToolbarProps {
  onPageChange: (page: TPage) => void;
}

export function Toolbar({ onPageChange }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <span
        className="text-lg font-bold cursor-pointer select-none"
        onClick={() => onPageChange("home")}
      >
        Movie List
      </span>
      <div className="flex gap-2">
        <button
          className="p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={() => onPageChange("search")}
        >
          <Search className="w-6 h-6" />
        </button>
        <button
          className="p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer"
          onClick={() => onPageChange("favorite")}
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
