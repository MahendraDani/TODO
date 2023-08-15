const createNote = async (req, res) => {
  try {
    res.send("Notes route working!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createNote };
