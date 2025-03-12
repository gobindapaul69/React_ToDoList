import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";

export function Todo() {

    let existingRecords = [{
        id: 101,
        name: 'Team Call at 11:00 AM',
        description: 'Current sprint discussion',
        status: 'In Progress'
    },
    {
        id: 102,
        name: 'Team Lunch at 2:00 PM',
        description: 'Team Lunch',
        status: 'In Progress'
    },
    {
        id: 103,
        name: 'Interview at 4:00 PM',
        description: 'Internal hiring',
        status: 'In Progress'
    },
    {
        id: 104,
        name: 'Client call at 5 PM',
        description: 'Client call',
        status: 'In Progress'
    }];

    const [todoName, setTodoName] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [todoStatus, setTodoStatus] = useState('Pending');
    let [records, setRecords] = useState(existingRecords);

    const saveRecords = () => {
        alert(todoName + " " + todoDescription + " " + todoStatus);

        let newTask = {
            id: records.length + 1,
            name: todoName,
            description: todoDescription,
            status: todoStatus
        }
        //existingRecords.push(newTask);
        setRecords([...records, newTask]);
        existingRecords.push(newTask);
        console.log(existingRecords);
    }

    const deleteRecord = (id) => {
        alert(id);
        //let arrRecords = records;
        let resultSet = records.filter((item) => item.id!=id);
        records = resultSet;
        console.log(records);
        setRecords([...records]);
    }

    return (<>

        <div className="container p-3 border border-black mt-3">
            <div className="row">
                <div className="col-6">
                    <table class="table table-striped table-hover table-secondary table-danger fst-italic fs-10">
                        <thead>
                            <tr>
                                <th scope="col">Task #</th>
                                <th scope="col">Task Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map(item => <>
                                    <tr className="fs-6">
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button className="btn btn-warning">
                                                {/* <i className="fa fa-pencil"></i> */}
                                                <FaEdit />
                                            </button>
                                            <button className="btn btn-danger"
                                                onClick={() => deleteRecord(item.id)} >
                                                {/* <i className="fa fa-trash"></i> */}
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                </>)
                            }

                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-6">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control mt-6"
                            id="txtName" placeholder="Todo name" value={todoName}
                            onChange={(e) => setTodoName(e.target.value)} />
                        <label for="txtName">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="txtDesc"
                            placeholder="Todo description" value={todoDescription}
                            onChange={(e) => setTodoDescription(e.target.value)} />
                        <label for="txtDescription">Description</label>
                    </div>
                    <select class="form-select mb-3" aria-label="Select status" value={todoStatus}
                        onChange={(e) => setTodoStatus(e.target.value)} >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In-Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <input class="btn btn-primary" type="submit" value="Submit"
                        onClick={(e) => saveRecords()} />
                </div>
            </div>

        </div>

    </>);

}