import { useState } from "react"

export const ToDoList = () => {

    const [task, setTask] = useState(null);

    const updateTask = (key, value) => {
        const newTask = {
            ...task,
            [key]: value
        };
        setTask(newTask);
    }

    const [activity, setActivity] = useState([])

    const addActivity = () => {
        if (!task || !task.priority || !task.action || !task.date) {
            alert('Complete the task')
            return
        }
        const newActivity = [
            ...activity,
            task
        ]
        setActivity(newActivity);
        setTask(null)
    }


    const deleteActivity = (index) => {
        const newActivity = activity.filter((_, i) => i !== index);
        setActivity(newActivity);
    };

    return (
        <div className="container text-center">
            <div className="row">
                <h1>ToDo List</h1>
            </div>


            <div className="row justify-content-center">
                <div className="col-auto d-flex gap-1">

                    <label htmlFor="priority" className="form-label fw-bold d-flex align-items-center">
                        Select Priority
                    </label>
                    <input type="number" name="priority" min='1' max='3' value={task ? task.priority : 0}
                        onChange={(evt) => updateTask('priority', evt.target.value)} />

                    <input type="text" name="action" placeholder="Escribe aqui la tarea" value={task ? task.action : ''}
                        onChange={(evt) => updateTask('action', evt.target.value)} />

                    <input type="date" name="date" value={task ? task.date : ''}
                        onChange={(evt) => updateTask('date', evt.target.value)} />



                    <div className="btn btn-warning" onClick={() => addActivity()}>Add Task</div>

                </div>

                <div className="bg-secondary fs-4 text-white">
                    {
                        activity.map((item, index) => (
                            <div className="d-flex justify-content-between gap-3">
                                <div className="d-flex flex-grow-1 justify-content-between">
                                    <p>Priority: {item.priority}/3</p>
                                    <p>Task: {item.action}</p>
                                    <p>Date: {item.date}</p>
                                </div>


                                <div
                                    className="btn btn-danger ms-3"
                                    onClick={() => deleteActivity(index)}>
                                    X
                                </div>

                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}