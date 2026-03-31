import { useState } from "react";
import { FavoriteProvider } from "./context/favorite-context";
import { SearchList } from "./pages/search-list";
import { FavoriteList } from "./pages/favorite-list";
import type { TPage } from "./types";
import { Home } from "./pages/home";
import { Toolbar } from "./components/toolbar";

function App() {
  const [currentPage, setCurrentPage] = useState<TPage>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "search":
        return <SearchList />;
      case "favorite":
        return <FavoriteList />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-xl mb-4 text-gray-700">Page Not Found</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
              onClick={() => setCurrentPage("home")}
            >
              Back to Home
            </button>
          </div>
        );
    }
  };

  return (
    <FavoriteProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Toolbar onPageChange={setCurrentPage} />
        <main className="flex-1 container mx-auto px-4 py-4">
          {renderPage()}
        </main>
      </div>
    </FavoriteProvider>
  );
}

export default App;
