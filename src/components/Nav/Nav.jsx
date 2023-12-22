import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/logo-pv.png";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li className="text-lg font-semibold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-blue-01 text-white"
              : "text-blue-01 "
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-blue-01 text-white"
              : "text-blue-01 "
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink
          to="/contract"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-blue-01 text-white"
              : "text-blue-01 "
          }
        >
          Contract
        </NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-blue-01 text-white"
              : "text-blue-01 "
          }
        >
          Dashboard
        </NavLink>
      </li>
      {/* <li className="text-lg font-semibold">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-blue-01 text-white"
              : "text-blue-01 "
          }
        >
          login
        </NavLink>
      </li>
      <li className="text-lg font-semibold">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " bg-blue-01 text-white"
              : "text-blue-01 "
          }
        >
          Register
        </NavLink>
      </li> */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-slate-100 shadow text-black px-4 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current dark:text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="p-2 flex gap-4 items-center font-semibold text-2xl">
            <p className="hidden md:block text-blue-01">
              <img src={logo} className="w-28" alt="" />
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div></div>
        <div className="navbar-end">
          {/* <div className="mt-1 mx-2">
            {theme === "dark" ? (
              <button
                onClick={handleThemeSwich}
                className="text-3xl dark:text-white"
              >
                <MdOutlineLightMode />
              </button>
            ) : (
              <button
                onClick={handleThemeSwich}
                className="text-3xl dark:text-white"
              >
                <MdOutlineDarkMode />
              </button>
            )}
          </div> */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full border-2 border-blue-01 dark:border-white">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 text-blue-02 rounded-box w-72"
              >
                <li>
                  <a className="justify-between font-semibold text-blue-01">
                    {user.displayName}
                  </a>
                </li>
                <li>
                  <a className="justify-between text-blue-01">{user.email}</a>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-blue-01 hover:bg-blue-01 hover:text-[white] font-semibold px-3 py-1 rounded text-base border border-blue-01 "
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              {" "}
              <button className="text-blue-01 hover:bg-blue-01 hover:text-[white] font-semibold px-4 py-2 rounded text-lg border border-blue-01 dark:border-white">
                Log In
              </button>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
