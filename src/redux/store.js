// src/redux/store.js
import { createStore } from 'redux';
// import tasksReducer from '../redux/reducers/tasksReducer';
import tasksReducer from '../redux/reducers/index'
const store = createStore(tasksReducer);

export default store;
