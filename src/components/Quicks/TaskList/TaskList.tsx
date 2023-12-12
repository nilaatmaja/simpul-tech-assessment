import { TaskItem, TaskListProps } from "@/types/QuicksType";
import { calculateDaysLeft, formatSimpleDate } from "@/utils/helpers/Date";
import {
    ChevronUpIcon,
    ClockIcon,
    EllipsisHorizontalIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const TaskList = (props: TaskListProps) => {
    const { data } = props;
    const [taskList, setTaskList] = useState<TaskItem[]>([]);

    useEffect(() => {
        setTaskList(data);
    }, [data]);

    const toggleCollapsiblePanel = (taskId: string) => {
        setTaskList((prev) => {
            const targetIndex = prev.findIndex((item) => item.id === taskId);

            if (targetIndex === -1) {
                return prev;
            }

            const updatedTaskList = [...prev];
            updatedTaskList[targetIndex] = {
                ...updatedTaskList[targetIndex],
                isExpand: !updatedTaskList[targetIndex].isExpand,
            };

            return updatedTaskList;
        });
    };

    const handleTaskChecked = (taskId: string) => {
        setTaskList((prev) => {
            const targetIndex = prev.findIndex((item) => item.id === taskId);

            if (targetIndex === -1) {
                return prev;
            }

            const updatedTaskList = [...prev];
            updatedTaskList[targetIndex] = {
                ...updatedTaskList[targetIndex],
                isChecked: !updatedTaskList[targetIndex].isChecked,
            };

            return updatedTaskList;
        });
    };

    return (
        <>
            {taskList.map((task, index) => (
                <div
                    key={`taskList-${index}`}
                    className="flex gap-3 border border-transparent py-3 border-b-stone-300"
                >
                    <div className="flex items-start pt-0.5">
                        <input
                            type="checkbox"
                            name={task.id}
                            id={task.id}
                            checked={task.isChecked}
                            onChange={() => {
                                handleTaskChecked(task.id);
                            }}
                        />
                    </div>

                    <div className="flex flex-col text-xs flex-grow justify-center">
                        <div
                            onClick={() => toggleCollapsiblePanel(task.id)}
                            className="flex justify-between cursor-pointer"
                        >
                            <span
                                className={`font-bold w-[300px] whitespace-pre-wrap ${
                                    task.isChecked
                                        ? "text-gray-300 line-through"
                                        : ""
                                }`}
                            >
                                {task.title}
                            </span>

                            <div className="flex items-top w-[200px] justify-end gap-2">
                                <span className="text-xs text-red-500">
                                    {calculateDaysLeft(task.createdDate)}
                                </span>
                                <span className="text-xs">
                                    {formatSimpleDate(task.createdDate)}
                                </span>
                                <ChevronUpIcon
                                    height={15}
                                    width={15}
                                    className={
                                        !task.isExpand ? "rotate-180" : ""
                                    }
                                />
                                <EllipsisHorizontalIcon
                                    height={20}
                                    width={20}
                                />
                            </div>
                        </div>

                        {task.isExpand && (
                            <>
                                <div className="flex items-center gap-3 py-2">
                                    <div className="w-[20px]">
                                        <ClockIcon
                                            height={20}
                                            width={20}
                                            className="text-blue-500"
                                        />
                                    </div>
                                    <input
                                        type="date"
                                        className="border border-stone-300 p-2 px-3 rounded-md cursor-text"
                                        defaultValue={new Date(task.date)
                                            .toISOString()
                                            .substring(0, 10)}
                                        min={new Date()
                                            .toISOString()
                                            .substring(0, 10)}
                                    />
                                </div>

                                <div className="flex items-start gap-3 py-2">
                                    <div className="w-[20px]">
                                        <PencilIcon
                                            height={20}
                                            width={20}
                                            className="text-blue-500"
                                        />
                                    </div>
                                    <span>
                                        {task.description ?? "No Description"}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default TaskList;
