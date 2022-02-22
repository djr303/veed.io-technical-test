import { Link } from 'react-router-dom'
import './index.scss'

export default () => <>
  <div className="nav">
    <div className="logo">
      <img src="/images/github-icon.svg" />
    </div>
    <Link className="home-link" to="/">
      Latest repositories
    </Link>
    <Link className="favorites-link" to="/favorites">
      Favorited repositories
    </Link>
    <footer>
      <div className="copyleft">&copy;</div>
    </footer>
  </div>
</>