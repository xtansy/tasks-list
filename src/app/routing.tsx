import { Routes, Route } from "react-router";

import { TaskList, TaskDetails } from "pages";

export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<TaskList />} />
			<Route path="/:taskId" element={<TaskDetails />} />
		</Routes>
	);
};
