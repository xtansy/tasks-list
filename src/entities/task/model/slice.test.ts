import { reducer, addTask, initialState, toggleTaskCompleted } from ".";
import { type TaskModel, type Task } from "./types";

test("should return the initial state", () => {
	expect(reducer(initialState, { type: undefined })).toEqual(initialState);
});

test("should handle a todo being added to an empty list", () => {
	const title = "Run the tests";
	const newTask: Task = { title, id: 0, completed: false };

	const newState: TaskModel = {
		...initialState,
		taskList: [newTask],
	};

	expect(reducer(initialState, addTask(title))).toEqual(newState);
});

test("should handle a todo being added to an existing list", () => {
	const firstTask = { id: 0, title: "First task", completed: false };

	const title = "Second task";
	const secondTask = { id: 1, title, completed: false };

	const prevState = { ...initialState, taskList: [firstTask] };
	const newState = { ...initialState, taskList: [firstTask, secondTask] };

	expect(reducer(prevState, addTask(title))).toEqual(newState);
});

test("should change the completed status of the current task", () => {
	const taskNoCompleted = { id: 0, title: "First task", completed: false };
	const taskCompleted = { ...taskNoCompleted, completed: true };

	const prevState = { ...initialState, taskList: [taskNoCompleted] };
	const newState = { ...initialState, taskList: [taskCompleted] };

	expect(reducer(prevState, toggleTaskCompleted(0))).toEqual(newState);
});
