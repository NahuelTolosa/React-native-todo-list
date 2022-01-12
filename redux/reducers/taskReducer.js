import {
  ADD_TASK,
  REMOVE_TASK,
  SELECTED_TASK,
  REMOVE_FROM_SELECTED,
} from "../actions/taskActions";

const initialState = {
  tasks: [],
  selectedTask: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = state.tasks.concat(action.payload);
      return {
        ...state,
        tasks: newTasks,
      };

    case REMOVE_TASK:
      const tasksFiltered = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: tasksFiltered,
      };

    case SELECTED_TASK:
      const taskSelected = state.tasks.find(
        (task) => task.id === action.taskId
      );
      return {
        ...state,
        selectedTask: taskSelected,
      };

    case REMOVE_FROM_SELECTED:
      return {
        ...state,
        selectedTask: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default tasksReducer;
