import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo/playverse-logo.jpeg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img src={logo} alt="PlayVerse Logo" />
      </div>

      {/* Search */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search videos"
        />

        <button className="search-button" aria-label="Search">
          <SearchOutlined />
        </button>
      </div>

      {/* Right Actions */}
      <div className="header-actions">
        <button className="more-button" aria-label="More options">
          <MoreOutlined />
        </button>

        <button className="login-button">
          Login
        </button>

        <button className="signup-button">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;