const updateTodoStatusById = (arr, id, newStatus) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id === id) {
      arr[i].status = newStatus.toLowerCase();
    }
  }
  return arr;
};

module.exports = { updateTodoStatusById };
