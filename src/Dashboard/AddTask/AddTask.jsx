import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    const createTask = {
      title: data.title,
      category: data.category,
      date: data.date,
      descriptions: data.descriptions,
      userEmail,
    };
    console.log(createTask);
    const task = await axiosPublic.post("/api/v1/create-task", createTask);
    console.log(task.data);
    if (task.data.insertedId) {
      alert("item add done");
    }
  };

  console.log(watch("example"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email and job title */}
        <div className="flex ">
          <div className="flex-1">
            <input
              className="bg-slate-300 placeholder:text-black text-black p-3 rounded w-full outline-none"
              type="email"
              name="email"
              defaultValue={userEmail}
            />
          </div>
          {/* email */}
          <div className="flex-1">
            <input
              className="bg-slate-300 placeholder:text-black text-black p-3 rounded w-full outline-none"
              type="text"
              name="title"
              placeholder="Task Title"
              {...register("title")}
            />
          </div>
        </div>
        {/* category and deadline */}
        <div className="flex flex-col md:flex-row  gap-5 my-5">
          <div className="flex-1">
            {/* category */}

            <select
              className="bg-slate-300 placeholder:text-black text-black p-3 rounded w-full  outline-none"
              name="category"
              {...register("category")}
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* deadline */}
          <div className="flex-1">
            <input
              className="w-full bg-slate-300 placeholder:text-black text-black p-2 rounded"
              type="date"
              name="date"
              id=""
              {...register("date")}
            />
          </div>
        </div>
        {/*  description */}
        <div className="my-5">
          <textarea
            className="w-full  resize-none  outline-none bg-slate-300 placeholder:text-black text-black p-2 rounded"
            name="descriptions"
            rows="10"
            placeholder="Descriptions"
            {...register("descriptions")}
          ></textarea>
        </div>
        {/* upload pic */}
        {/*  description */}
        {/* add job button */}
        <div className="my-5">
          <input
            className="bg-[#754ffe] rounded-md py-2 px-6 text-white font-semibold text-xl cursor-pointer"
            type="submit"
            value="Create Task"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
