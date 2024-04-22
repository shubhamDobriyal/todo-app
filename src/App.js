import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="text-center">
                        <h1>Todo List</h1>
                        <TaskInput />
                        <TaskList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
