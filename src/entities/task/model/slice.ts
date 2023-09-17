import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Task } from "shared/types";
import { getAllTasks } from "shared/api";

export interface Query {
	completed: boolean;
}

interface TaskModel {
	query: Query | null;
	taskList: Task[];
	isLoadingTaskList: boolean;
	errorMessage: null | string;
}
const initialState: TaskModel = {
	taskList: [],
	isLoadingTaskList: false,
	errorMessage: null,
	query: null,
};

export const getTaskListAsync = createAsyncThunk<Task[]>(
	"tasks/getTaskListAsync",
	() => {
		return getAllTasks();
	}
);

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
			const id = Math.round(Math.random() * 1000);
			const task: Task = { title, id, completed: false };
			state.taskList.push(task);
		},
		setQuery: (state, action: PayloadAction<Query | null>) => {
			const payload = action.payload;
			state.query = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getTaskListAsync.pending, (state) => {
			state.isLoadingTaskList = true;
		});
		builder.addCase(getTaskListAsync.fulfilled, (state, { payload }) => {
			state.isLoadingTaskList = false;
			state.taskList = payload;
		});
		builder.addCase(getTaskListAsync.rejected, (state) => {
			state.isLoadingTaskList = false;
			state.errorMessage = "Error on fetching tasks";
		});
	},
});

export const { toggleTaskCompleted, setQuery, addTask } = taskModel.actions;
export const reducer = taskModel.reducer;
