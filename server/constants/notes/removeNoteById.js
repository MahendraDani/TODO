const removeNoteById = (arr, noteId) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].noteId != noteId) {
      newArray.push(arr[i]);
    } else {
      continue;
    }
  }
  return newArray;
};

module.exports = { removeNoteById };
