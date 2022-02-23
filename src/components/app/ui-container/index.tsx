import { useEffect } from 'react'
import Navigation from "../nav-container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../../pages/home";
import Favorites from "../../../pages/favorites";
import { useDispatch, useSelector } from 'react-redux'
import { requestRepositories } from '../../../repositories/repositoryReducer';
import './index.scss'

const UIContainer: React.FC = () => {

  const dispatch = useDispatch()
  const items = useSelector((state: any) => state?.repositories?.items);

  useEffect(() => {
    dispatch({ type: requestRepositories})
  }, [])

  return (
    <div className="container">
      <Router>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={!!items && <Home items={items} />} />
            <Route path="/favorites" element={!!items && <Favorites items={items} />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default UIContainer;
