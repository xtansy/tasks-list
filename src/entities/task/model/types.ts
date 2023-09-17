export type Task = {
	id: number;
	title: string;
	completed: boolean;
};

export interface Query {
	completed: boolean;
}

export interface TaskModel {
	query: Query | null;
	taskList: Task[];
	isLoadingTaskList: boolean;
	errorMessage: null | string;
}
