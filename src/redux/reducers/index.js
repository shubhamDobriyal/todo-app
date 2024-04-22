// reducers.js

import * as types from '../actionTypes';

// Load tasks from local storage if available
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK:
            const newTask = { content: action.payload.content, completed: action.payload.completed };
            const updatedAddState = { tasks: [...state.tasks, newTask] };
            localStorage.setItem('tasks', JSON.stringify(updatedAddState.tasks));
            return updatedAddState;
        case types.DELETE_TASK:
            const updatedDeleteState = { tasks: state.tasks.filter((_, index) => index !== action.payload) };
            localStorage.setItem('tasks', JSON.stringify(updatedDeleteState.tasks));
            return updatedDeleteState;
        case types.TOGGLE_COMPLETE:
            const updatedToggleState = {
                tasks: state.tasks.map((task, index) =>
                    index === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
            localStorage.setItem('tasks', JSON.stringify(updatedToggleState.tasks));
            return updatedToggleState;
        default:
            return state;
    }
};

export default tasksReducer;
