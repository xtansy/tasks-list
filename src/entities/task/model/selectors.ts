import { Task } from "shared/types";

export const useTaskSelector = (taskId: Task["id"]) => (state: RootState) => state.tasks.taskList.find(task => task.id === taskId);

export const useTasksSelector = (state: RootState) => state.tasks.taskList;

export const useTasksLoadingSelector = (state: RootState) => state.tasks.isLoadingTaskList;

export const useQuerySelector = (state: RootState) => state.tasks.query;

export const useFilteredTasksSelector = (state: RootState) => {
    const query = state.tasks.query;
    if (!query) return state.tasks.taskList;

    return state.tasks.taskList.filter(task => task.completed === query.completed);
}


