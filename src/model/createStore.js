import { createStore as createReduxStore, combineReducers } from 'redux';
import { taskReducer, newTaskReducer } from './reducers';

export default function createStore() {
  const reducers = combineReducers({
    tasks: taskReducer,
    newItemText: newTaskReducer
  });

  return createReduxStore(
    reducers,
    {
      tasks: [
        { id: 1, text: 'Task 1', done: false },
        { id: 2, text: 'Task 2', done: false },
        { id: 3, text: 'Task 3', done: false }
      ],
      newItemText: 'Add me!'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
