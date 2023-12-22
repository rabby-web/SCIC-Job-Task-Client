// import AllTaskCard from "./AllTaskCard";

import useCreateTask from "../../hooks/useCreateTask";
import TaskCard from "./TaskCard";

const AllTask = () => {
  const [tasks] = useCreateTask();
  console.log(tasks);

  return (
    <div>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tasks.map((item, index) => (
            <TaskCard key={index} data={item}></TaskCard>
          ))}
        </div>
      }
    </div>
  );
};

export default AllTask;
