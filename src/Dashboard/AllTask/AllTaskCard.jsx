import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import useCreateTask from "../../../hooks/useCreateTask";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllTaskCard = ({ data }) => {
  // console.log(data);
  const { title, description, category, date, _id } = data || {};
  const [, refetch] = useCreateTask();

  const handleDeleteTask = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/api/v1/${_id}/delete-task`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Task has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col min-h-full">
        <div className="bg-white p-8 rounded flex flex-col justify-between h-full">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-[#2c2a37]">
              {title}
            </h2>

            <h2 className="text-lg md:text-xl  font-bold text-[#2c2a37]">
              Deadline: {date}
            </h2>

            <h2 className="text-lg md:text-xl  font-bold text-[#76757a]">
              <span className="text-red-500">Priority:</span> {category}
            </h2>

            <p className="text-base text-[#76757a] flex-grow">
              {description?.length > 60
                ? `${description.slice(0, 60)}...`
                : description}
            </p>
          </div>

          <div className="flex justify-between mt-3">
            <button onClick={() => handleDeleteTask(_id)}>
              <MdAutoDelete className="text-2xl" />
            </button>

            <Link to={`/dashboard/editTask/${_id}`}>
              <button>
                <FaEdit className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTaskCard;
