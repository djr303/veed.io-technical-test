import { useEffect, useMemo } from "react";
import Navigation from "../nav-container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../../pages/home";
import Favorites from "../../../pages/favorites";
import { useDispatch, useSelector } from "react-redux";
import {
  requestRepositories,
  updateFavorite,
} from "../../../repositories/repositoryReducer";
import "./index.scss";

const UIContainer: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state?.repositories?.items);
  const favorites = useSelector((state: any) => state?.favorites)
  const favoritedItems = useMemo(() => !!items && !!favorites && items.filter((item: any) => !!favorites[item.id]), [items, favorites])

  useEffect(() => {
    dispatch({ type: requestRepositories });
  }, []);

  const handleChange = (id: string) => {
    dispatch({ type: updateFavorite, payload: { id } });
  }

  console.log('favorites', favorites)
  console.log('favoritedItems', favoritedItems)

  return (
    <div className="container">
      <Router>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                !!items && (
                  <Home
                    items={items}
                    favorites={favorites}
                    handleChange={handleChange}
                  />
                )
              }
            />
            <Route
              path="/favorites"
              element={
                !!items && (
                  <Favorites
                    favorites={favorites}
                    handleChange={handleChange}
                    items={favoritedItems}
                  />
                )
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default UIContainer;
