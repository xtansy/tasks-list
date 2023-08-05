import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "shared/model";
import { useTasksSelector, getTaskListAsync } from "../model";

export const useFetchTasks = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(useTasksSelector);

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(getTaskListAsync());
        }
    }, [])
}