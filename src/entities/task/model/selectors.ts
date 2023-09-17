import { createSelector } from "@reduxjs/toolkit";

import { type Task } from "./types";

export const useTaskSelector = (taskId: Task["id"]) => (state: RootState) =>
	state.tasks.taskList.find((task) => task.id === taskId);

export const useTasksSelector = (state: RootState) => state.tasks.taskList;

export const useQuerySelector = (state: RootState) => state.tasks.query;

export const selectFilteredTasks = createSelector(
	[useQuerySelector, useTasksSelector],
	(query, tasks) => {
		if (!query) return tasks;
		return tasks.filter((task) => task.completed === query.completed);
	}
);
