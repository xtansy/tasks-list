import { Card, CardProps } from "antd";
import { Task } from "shared/types";

interface TaskCardProps extends CardProps {
    task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, children, ...args }) => {
    return (
        <Card title={`Task#${task.id}`} {...args}>
            <p>{task.title}</p>
            {children}
        </Card>
    );
};

