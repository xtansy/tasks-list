import "./TaskAdd.scss";

import { Input } from "antd";
import { useState } from "react";

import { useAppDispatch } from "shared";
import { addTask } from "entities/task/model";

export const TaskAdd = () => {
	const [todoTitle, setTodoTitle] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<string>("");
	const dispatch = useAppDispatch();

	const onPressEnter = () => {
		if (errorMessage) return;
		dispatch(addTask(todoTitle));
		setErrorMessage("");
		setTodoTitle("");
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setTodoTitle(value);
		if (value.length < 2 || value.length > 70) {
			setErrorMessage("Incorrect task length");
		} else {
			setErrorMessage("");
		}
	};

	return (
		<div>
			<Input
				value={todoTitle}
				onChange={onChange}
				status={errorMessage ? "error" : ""}
				onPressEnter={onPressEnter}
				placeholder="Your task"
			/>
			{errorMessage && <p className="errorMessage">{errorMessage}</p>}
		</div>
	);
};
