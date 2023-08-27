const removeTodoById = (arr, id) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id != id) {
      newArray.push(arr[i]);
    } else {
      continue;
    }
  }
  return newArray;
};

module.exports = { removeTodoById };
