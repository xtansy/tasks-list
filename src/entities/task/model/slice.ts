import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Task, type TaskModel, type Query } from "./types";

const initialTasks: Task[] = [
	{ id: 0, title: "Тестовое задание", completed: true },
	{ id: 1, title: "Прекрасный код", completed: true },
	{ id: 2, title: "Покрытие тестами", completed: true },
	{ id: 3, title: "Собеседование", completed: false },
	{ id: 4, title: "Оффер", completed: false },
];

export const initialState: TaskModel = {
	taskList: initialTasks,
	isLoadingTaskList: false,
	errorMessage: null,
	query: null,
};

export const taskModel = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		toggleTaskCompleted: (state, action: PayloadAction<Task["id"]>) => {
			const currentTaskId = action.payload;
			state.taskList = state.taskList.map((task) =>
				task.id === currentTaskId
					? { ...task, completed: !task.completed }
					: task
			);
		},
		addTask: (state, action: PayloadAction<Task["title"]>) => {
			const title = action.payload;
			const id = state.taskList.length;
			const task: Task = { title, id, completed: false };
			state.taskList.push(task);
		},
		setQuery: (state, action: PayloadAction<Query | null>) => {
			const payload = action.payload;
			state.query = payload;
		},
	},
});

export const { toggleTaskCompleted, setQuery, addTask } = taskModel.actions;
export const reducer = taskModel.reducer;
