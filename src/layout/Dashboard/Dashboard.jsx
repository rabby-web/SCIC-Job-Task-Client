import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import DashboardMenu from "./DashboardMenu/DashboardMenu";

const Dashboard = () => {
  // const { user, logOut } = useContext(AuthContext);
  // const handleSignOut = () => {
  //   logOut()
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => console.error(error));
  // };
  return (
    <>
      <div className="flex">
        <div className="md:w-1/5 bg-white h-screen fixed top-0 left-0">
          <div className="flex items-center pl-5 py-4 h-20 border-b border-gray-200">
            <Link to={"/"} className="mr-3">
              <img
                className="w-full hidden md:block"
                src="https://www.technovisionbd.com/wp-content/themes/tet/assets/images/logo.png"
                alt=""
              />
            </Link>
            {/* <div className="hidden md:block">
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
              >
                <Link to={"/"}>TechFirm IT</Link>
              </Typography>
            </div> */}
          </div>
          <div className="p-2">
            <DashboardMenu></DashboardMenu>
          </div>
        </div>

        <div className="w-full bg-slate-100 min-h-screen">
          <div className="flex">
            <div className="w-20 md:w-1/5"></div>
            <div className="w-[calc(100%-80px)] md:w-4/5 border-b border-gray-200 h-20 bg-white flex items-center pl-5">
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, color: "#262626", fontWeight: "700" }}
              >
                Dashboard
              </Typography>
            </div>
          </div>
          {/* <div>
            <div className="navbar-end">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
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
                      <a className="justify-between text-blue-01">
                        {user.email}
                      </a>
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
          </div> */}
          <div className="flex">
            <div className="w-20 md:w-1/5"></div>
            <div className="w-[calc(100%-80px)] md:w-4/5 p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
