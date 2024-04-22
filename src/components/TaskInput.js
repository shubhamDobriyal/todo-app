import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input.trim()) return;
        dispatch(addTask(input));
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="text-center">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a new task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </div>
            </div>
        </form>
    );
};

export default TaskInput;
