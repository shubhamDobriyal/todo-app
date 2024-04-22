// actions.js

import * as types from '../actionTypes';

export const addTask = content => ({
    type: types.ADD_TASK,
    payload: { content, completed: false } // Set completed to false initially
});

export const deleteTask = index => ({
    type: types.DELETE_TASK,
    payload: index
});

export const toggleComplete = index => ({
    type: types.TOGGLE_COMPLETE,
    payload: index
});
