import TaskList from "@/components/Quicks/TaskList/TaskList";
import TaskListData from "@/data/dummy/taskListData.json";

const Task = () => {
    return (
        <div className="p-5 overflow-auto">
            <div className="flex justify-between mb-4">
                <select
                    name="taskSelection"
                    id="taskSelection"
                    className="border border-stone-400 rounded-md px-3"
                >
                    <option value="mytask">My Task</option>
                    <option value="personalErrands">Personal Errands</option>
                    <option value="urgentTodo">Urgent To-Do</option>
                </select>

                <button className="text-white bg-blue-500 p-2 px-5 rounded-md hover:bg-blue-600 duration-150">
                    New Task
                </button>
            </div>

            <div className="overflow-y-auto">
                <TaskList data={TaskListData} />
            </div>
        </div>
    );
};

export default Task;
