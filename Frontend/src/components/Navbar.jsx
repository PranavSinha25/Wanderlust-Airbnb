import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <Link
          to="/"
          className="text-3xl font-bold text-red-500"
        >
          🏠 StayNest
        </Link>

        <div className="flex items-center gap-6">

          <Link to="/">Home</Link>

          <Link to="/add-property">
            Become a Host
          </Link>

          {token ? (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-red-500 text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;