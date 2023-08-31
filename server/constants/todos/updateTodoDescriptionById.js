const updateTodoDescriptionById = (arr, id, newDescription) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id === id) {
      arr[i].description = newDescription;
    }
  }
  return arr;
};

module.exports = { updateTodoDescriptionById };
