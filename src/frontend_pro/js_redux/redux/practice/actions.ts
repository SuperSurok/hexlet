export type Task = "TASK_ADD" | "TASK_REMOVE"

export const addTask = (task: Task) => ({
  type: "TASK_ADD",
  payload: {
    task,
  },
});

export const removeTask = (id: string) => ({
  type: "TASK_REMOVE",
  payload: {
    id,
  },
});
