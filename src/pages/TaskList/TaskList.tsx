import "./TaskList.scss";

import { useEffect } from "react";
import { Layout, Typography, Divider, Col, Row, Spin } from "antd";
const { Title } = Typography;

import { useAppDispatch, useAppSelector } from "shared/model";
import {
	getTaskListAsync,
	useFilteredTasksSelector,
	useTasksLoadingSelector,
} from "entities/task/model";
import { TaskRow } from "entities/task";
import { TaskToggler, TaskFilter } from "features";

export const TaskList = () => {
	return (
		<Layout className="taskList">
			<Layout.Header className="taskList__header">
				<Divider orientation="center">
					<Title>Tasks List</Title>
					<TaskFilter />
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
	const isLoading = useAppSelector(useTasksLoadingSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getTaskListAsync());
	}, []);

	if (isLoading) return <Spin size="large" />;

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
