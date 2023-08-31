const updateTodoTitleById = (arr, id, newTitle) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id === id) {
      arr[i].title = newTitle;
    }
  }
  return arr;
};

module.exports = { updateTodoTitleById };
