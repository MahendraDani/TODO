const getTodoIndexFromId = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id === id) {
      return i;
    }
  }
  return -1;
};

module.exports = { getTodoIndexFromId };
