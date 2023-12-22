import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const EditTask = () => {
  const task = useLoaderData();
  console.log(task);
  const { title, description, category, date, _id } = task || {};

  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const title = data.taskTitle;
    const category = data.category;
    const date = data.date;
    const description = data.description;

    const editTask = { title, category, date, description, userEmail };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://scic-task-server-one.vercel.app/api/v1/${_id}/edit-task`,
            editTask
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Task has been updated.",
                icon: "success",
              });
              navigate("/dashboard/allTask");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c] uppercase">
        Edit <span className="text-[#975cec]">Task</span>
      </h2>

      <div className="bg-gray-200 p-6 my-5 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-5 my-5">
            <div className="flex-1">
              <input
                className="bg-white p-2 rounded-sm w-full outline-none"
                type="text"
                name="email"
                placeholder="Email"
                readOnly
                defaultValue={userEmail}
              />
            </div>
            <div className="flex-1">
              <input
                className="bg-white p-2 rounded-sm w-full outline-none"
                type="text"
                name="taskTitle"
                placeholder="Task Title"
                {...register("taskTitle", { required: true })}
                defaultValue={title}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 my-5">
            <div className="flex-1">
              <select
                className="bg-white w-full p-2 rounded-sm outline-none"
                name="category"
                required
                {...register("category", { required: true })}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="flex-1">
              <input
                className="bg-white w-full p-2 rounded-sm outline-none"
                type="date"
                name="date"
                {...register("date", { required: true })}
                defaultValue={date}
              />
            </div>
          </div>

          <div className="my-5">
            <textarea
              className="w-full rounded-sm resize-none p-2 outline-none"
              name="description"
              rows="10"
              placeholder="Description"
              {...register("description", { required: true })}
              defaultValue={description}
            ></textarea>
          </div>

          <div className="my-5">
            <input
              className="bg-[#975cec] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
