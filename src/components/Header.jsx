function Header() {
  return (
    <div className="header-container">
      <header>
        <div id="assettoken-logo">
          <img className="logo" src="images/Asset-token-logo.png" alt="Asset Token Logo" />
          <p>Asset Token</p>

          <nav className="navlist">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Investment</a></li>
            <li><a href="#">Property</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </nav>


        <div className="btn">
          <button className="buttons">Log In</button>
          <button className="buttons" id="sign-up">Sign Up For Free</button>
        </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
