import "./TaskDetails.scss";

import { useParams } from "react-router-dom";
import { Layout, Result, Button } from "antd";
import { Link } from "react-router-dom";

import { useAppSelector } from "shared";
import { useTaskSelector } from "entities/task/model";
import { useFetchTasks } from "entities/task";
import { TaskToggler } from "features";
import { TaskCard } from "entities/task";


export const TaskDetails = () => {

    useFetchTasks();

    const { taskId } = useParams()

    const task = useAppSelector(useTaskSelector(+taskId!));

    if (!task) return (
        <Result
            status={404}
            title={404}
            subTitle={`Task ${taskId} was not found`}
            extra={
                <Link to="/">
                    <Button type="primary">Back to tasks list</Button>
                </Link>
            }
        />)

    return (
        <Layout className="taskDetails">
            <Layout.Content className="taskDetails__content">
                <TaskCard actions={[<TaskToggler withStatus key="toggle" taskId={task.id} />]} className="taskDetails__content-card" task={task} extra={<Link to="/">Back to TasksList</Link>} />
            </Layout.Content>
        </Layout>
    );
};

