import { FaHome } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";

import { Link } from "react-router-dom";

const DashboardMenu = () => {
  return (
    <div>
      <Link
        to={"/dashboard"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <FaHome className="text-2xl" />{" "}
        <span className="hidden md:block">Home</span>
      </Link>
      <Link
        to={"/dashboard/addTask"}
        className="w-full my-2 py-3 px-5 text-dark-01 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200 duration-500 flex items-center gap-3"
      >
        <MdBookmarkAdded className="text-2xl" />{" "}
        <span className="hidden md:block">Create Task</span>
      </Link>
    </div>
  );
};

export default DashboardMenu;
