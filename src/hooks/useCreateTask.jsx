import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const useCreateTask = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const { refetch, data: tasks = [] } = useQuery({
    queryKey: ["tasks", userEmail],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:3000/api/v1/show-all-task?userEmail=${userEmail}`
      );
      return result.data;
    },
  });
  return [tasks, refetch];
};

export default useCreateTask;
