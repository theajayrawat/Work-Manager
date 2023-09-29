import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  const result = await httpAxios
    .post("/api/tasks", task)
    .then((response) => response.data);

    return result
}

export async function deleteTask(taskId) {
  const result = await httpAxios
    .delete(`/api/tasks/${taskId}`, taskId)
    .then((response) => response.data);

    return result
}
