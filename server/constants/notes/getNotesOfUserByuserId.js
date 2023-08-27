const getNotesOfUserByUserId = (arr, userId) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].userId == userId) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

module.exports = { getNotesOfUserByUserId };
