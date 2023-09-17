import "./TaskCard.scss";

import { Card, CardProps } from "antd";
import { type Task } from "entities/task/model";

interface TaskCardProps extends CardProps {
	task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({
	task,
	children,
	...args
}) => {
	return (
		<Card className="taskCard" title={`Task#${task.id}`} {...args}>
			<p>{task.title}</p>
			{children}
		</Card>
	);
};
