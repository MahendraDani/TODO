const getNoteIndexById = (arr, noteId) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].noteId == noteId) {
      return i;
    }
  }
  return -1;
};

module.exports = { getNoteIndexById };
