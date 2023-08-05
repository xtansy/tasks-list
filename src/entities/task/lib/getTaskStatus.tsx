import { Task } from "shared/types";

export const getTaskStatus = (task: Task) => {
    return task.completed ? "CLOSED" : "OPENED";
}