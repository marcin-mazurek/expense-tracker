import generateGuid from "../utils/generateGuid";

export function addTask({ text }) {
  return {
    type: "ADD_TASK",
    payload: {
      text,
      done: false,
      id: generateGuid()
    }
  };
}

export function toggleTask(id) {
  return {
    type: "TOGGLE_TASK",
    payload: id
  };
}

export function changeNewItemText(text) {
  return {
    type: "CHANGE_TEXT",
    payload: text
  };
}
