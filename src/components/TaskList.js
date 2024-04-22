import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            {tasks.map((task, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleComplete(index))}
                            className="form-check-input"
                        />
                        <label className="form-check-label" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.content}
                        </label>
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTask(index))}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
