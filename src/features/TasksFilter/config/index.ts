import { Query } from "entities/task/model";

interface Filter {
	id: number;
	title: string;
	query: Query | null;
}

export const filters: Filter[] = [
	{
		id: 1,
		title: "All",
		query: null,
	},
	{
		id: 2,
		title: "Opened",
		query: { completed: false },
	},
	{
		id: 3,
		title: "Closed",
		query: { completed: true },
	},
];

export const DEFAULT_FILTER = 1;
