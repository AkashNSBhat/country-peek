import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1 className="logo">CountryPeek</h1>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>
    </header>
  );
}

export default Header;