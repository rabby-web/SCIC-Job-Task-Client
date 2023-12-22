import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import DashboardMenu from "./DashboardMenu/DashboardMenu";
import { FaCircleUser } from "react-icons/fa6";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
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
              <div className=" flex justify-center items-center">
                <h2 className="text-center font-medium text-[#2a2a2a] mr-2">
                  {user?.displayName || "User"}
                </h2>

                {user.photoURL ? (
                  <img
                    className="w-9 h-9 rounded-full border-2 border-gray-300 mr-4"
                    src={user.photoURL}
                  />
                ) : (
                  <FaCircleUser className="text-3xl mr-4" />
                )}
              </div>
            </div>
          </div>
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
