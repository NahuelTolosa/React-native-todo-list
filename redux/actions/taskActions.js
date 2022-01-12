export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const SELECTED_TASK = "SELECTED_TASK";
export const REMOVE_FROM_SELECTED = "REMOVE_FROM_SELECTED";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const selectedTask = (id) => ({
  type: SELECTED_TASK,
  payload: id,
});

export const removeFromSelected = () => ({
  type: REMOVE_FROM_SELECTED,
});
