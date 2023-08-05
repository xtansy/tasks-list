import "./TaskFilter.scss";

import { Radio } from "antd";

import { filters, DEFAULT_FILTER } from "../../config";
import { useAppDispatch } from "shared";
import { Query, setQuery } from "entities/task/model";

export const TaskFilter = () => {
    const dispatch = useAppDispatch();

    const onClickFilter = (query: Query | null) => {
        dispatch(setQuery(query));
    }

    return (
        <Radio.Group defaultValue={DEFAULT_FILTER} buttonStyle="solid">
            {
                filters.map(filter => {
                    return (
                        <Radio.Button value={filter.id} onClick={() => onClickFilter(filter.query)} key={filter.id}>{filter.title}</Radio.Button>
                    )
                })
            }
        </Radio.Group>
    );
};

