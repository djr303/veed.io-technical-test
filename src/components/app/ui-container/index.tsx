import "./index.scss";
import Navigation from "../nav-container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../../pages/home";
import Favorites from "../../../pages/favorites";
import './index.scss'

const UIContainer: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <nav>
          <Navigation />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default UIContainer;
