import "./TaskList.scss";

import { Layout, Typography, Divider, Col, Row } from "antd";
const { Title } = Typography;

import { useAppSelector } from "shared/model";
import { useFilteredTasksSelector } from "entities/task/model";
import { TaskRow } from "entities/task";
import { TaskToggler, TaskFilter, TaskAdd } from "features";

export const TaskList = () => {
	return (
		<Layout className="taskList">
			<Layout.Header className="taskList__header">
				<Divider orientation="center">
					<Title>Todos</Title>
					<div className="taskList__features">
						<TaskAdd />
						<TaskFilter />
					</div>
				</Divider>
			</Layout.Header>
			<Layout.Content className="taskList__content">
				{Content()}
			</Layout.Content>
		</Layout>
	);
};

const Content = () => {
	const tasks = useAppSelector(useFilteredTasksSelector);

	return (
		<Row gutter={[8, 16]} align="middle" justify="center">
			{tasks.map((task) => {
				return (
					<Col key={task.id} span={24}>
						<TaskRow
							task={task}
							before={<TaskToggler taskId={task.id} />}
						/>
					</Col>
				);
			})}
		</Row>
	);
};
