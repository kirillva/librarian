export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const updatePerson = ({ id, ownedLocations }) => {
  // console.log(ownedLocations);
  debugger;
  return { type: "UPDATE_PERSON", id };
};
