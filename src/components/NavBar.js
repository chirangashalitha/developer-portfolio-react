const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          className="justify-content-end"
        >
          <div class="navbar-nav">
            <a class="navlink" aria-current="page" href="#">
              Home
            </a>
            <a class="navlink" href="#">
              About
            </a>
            <a class="navlink" href="#">
              Services
            </a>
            <a class="navlink" href="#">
              Projects
            </a>
            <a class="navlink" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
