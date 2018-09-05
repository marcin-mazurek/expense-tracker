export function taskReducer(tasks = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];

    case "TOGGLE_TASK":
      return tasks.map(task => {
        if (task.id === action.payload) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      });

    default:
      return tasks;
  }
}

export function newTaskReducer(text = "", action) {
  switch (action.type) {
    case "CHANGE_TEXT":
      return action.payload;

    case "ADD_TASK":
      return "";

    default:
      return text;
  }
}
