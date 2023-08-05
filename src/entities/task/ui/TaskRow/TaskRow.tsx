import "./TaskRow.scss";

import { Typography } from "antd"
import { useNavigate } from "react-router-dom";

import { Task } from "shared/types";
const { Link } = Typography;

interface TaskRowProps {
    task: Task;
    before?: React.ReactNode
}

export const TaskRow: React.FC<TaskRowProps> = ({ task, before }) => {
    const navigate = useNavigate();

    const onClickTask = () => {
        navigate(`/${task.id}`);
    }

    return (
        <div className="taskRow">
            {before}
            <Link onClick={onClickTask}>
                {task.title}
            </Link>
        </div>
    );
};

