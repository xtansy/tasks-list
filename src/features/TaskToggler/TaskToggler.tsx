import "./TaskToggler.scss";
import { Checkbox } from "antd";
import { useAppSelector, useAppDispatch } from "shared";
import {
	useTaskSelector,
	toggleTaskCompleted,
	type Task,
} from "entities/task/model";
import { getTaskStatus } from "entities/task";

interface TaskTogglerProps {
	taskId: Task["id"];
	withStatus?: boolean;
}

export const TaskToggler: React.FC<TaskTogglerProps> = ({
	taskId,
	withStatus,
}) => {
	const dispatch = useAppDispatch();
	const task = useAppSelector(useTaskSelector(taskId));

	if (!task) return null;

	const onToggle = () => {
		dispatch(toggleTaskCompleted(taskId));
	};

	return (
		<Checkbox onChange={onToggle} checked={task?.completed}>
			{withStatus && getTaskStatus(task)}
		</Checkbox>
	);
};
