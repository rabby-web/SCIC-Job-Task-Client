import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Dashboard from "../layout/Dashboard/Dashboard";
import Contract from "../pages/Contract/Contract";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddTask from "../Dashboard/AddTask/AddTask";
import AllTask from "../Dashboard/AllTask/AllTask";
import EditTask from "../layout/Dashboard/EditTask";
import ManageTask from "../layout/Dashboard/ManageTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "allTask",
        element: <AllTask></AllTask>,
      },
      {
        path: "manageTask",
        element: <ManageTask></ManageTask>,
      },
      {
        path: "/dashboard/editTask/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/${params.id}/show-task`),
        element: <EditTask></EditTask>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);

export default router;
