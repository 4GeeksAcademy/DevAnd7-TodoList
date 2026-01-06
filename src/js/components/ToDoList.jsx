import { useState } from "react"

export const ToDoList = () => {

    const [taskList, setTaskList] = useState([{}])


    return (
        <div className="container text-center">
            <div className="row">
                <h1>ToDo List</h1>
            </div>

            {/*Visualizacion de los elementos*/}
            <div>
                <p>#:</p>
                <p>Task:</p>
                <p>Date:</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-auto d-flex gap-1">
                    <input type="text" name="task" placeholder="Escribe aqui la tarea" />
                    <input type="date" name="date" />
                </div>
            </div>
        </div>
    )
}