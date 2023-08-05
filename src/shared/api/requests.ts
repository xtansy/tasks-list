import { AxiosPromise } from "axios";

import { api } from "./instance";
import { Task } from "./types";

const BASE_URL = "/todos";

export const getAllTasks = async (): Promise<Task[]> => {
    const { data } = await api.get<Task[]>(BASE_URL);
    return data;
}

export const getTaskById = (taskId: Task["id"]): AxiosPromise<Task> => {
    return api.get(`${BASE_URL}/${taskId}`);
}