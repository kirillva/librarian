import { combineReducers } from "redux";

export const UPDATE_PERSON = "UPDATE_PERSON";

const locations = (state = [], action) => {
  switch (action.type) {
    // case "ADD_TODO":
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       completed: false
    //     }
    //   ];
    // case "TOGGLE_TODO":
    //   return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      return state;
  }
};

const persons = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PERSON:
      return state.map(person => (person.id === action.id ? { ...person } : person));

    default:
      return state;
  }
};

const ownedLocations = (state = [], action) => {
  switch (action.type) {
    // case "ADD_TODO":
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       completed: false
    //     }
    //   ];
    // case "TOGGLE_TODO":
    //   return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    default:
      // console.log("state", state);
      return state;
  }
};

export default combineReducers({
  locations,
  persons,
  ownedLocations
});
