import { type Task } from "../model/types";

export const getTaskStatus = (task: Task) => {
	return task.completed ? "CLOSED" : "OPENED";
};
