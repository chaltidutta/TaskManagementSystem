import React, { useState } from 'react';

const TaskAssign = () => {
    const [tasks, setTasks] = useState([
        { id: 1, employeeId: 101, employeeName: 'John Doe', assignDate: '2024-09-08' },
        { id: 2, employeeId: 102, employeeName: 'Jane Smith', assignDate: '2024-09-08' }
    ]);

    const assignTask = (employeeId, employeeName) => {
        const newTask = {
            id: tasks.length + 1,
            employeeId,
            employeeName,
            assignDate: new Date().toISOString().split('T')[0]
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h2>Assign Task to Employee</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Assign Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.employeeId}</td>
                            <td>{task.employeeName}</td>
                            <td>{task.assignDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Assign New Task</h3>
            <button onClick={() => assignTask(103, 'Sarah Connor')}>Assign Task to Sarah Connor</button>
        </div>
    );
};

export default TaskAssign;
