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

const todos = [
  {
    _id: "952cdaaf-5980-400f-bc1f-743f94fa7812",
    userId: "cf0561da-fdd6-405f-8ea7-509fc6f5060f",
    title: "Sample todo title",
    description: "Sample todo description",
    isCompleted: true,
    createdBy: "Rick Sorkin",
    createdAt: "2023-07-05T12:51:53.764Z",
  },
  {
    _id: "73d9dda4-9b50-4716-a51d-d1aea51992de",
    userId: "cf0561da-fdd6-405f-8ea7-509fc6f5060f",
    title: "Eat breakfast",
    description: "Eat aloo and dossa",
    isCompleted: true,
    createdBy: "Rick Sorkin",
    createdAt: "2023-07-05T13:27:30.432Z",
  },
  {
    _id: "620654d8-094e-4ee7-89f1-d8a245bf0a39",
    userId: "cf0561da-fdd6-405f-8ea7-509fc6f5060f",
    title: "Sing song",
    description: "But I don't know how to sing",
    isCompleted: true,
    createdBy: "Rick Sorkin",
    createdAt: "2023-07-05T13:27:55.215Z",
  },
  {
    _id: "8640f981-4fc5-40c2-a126-88bc23c34c29",
    userId: "e3023c62-14c3-45ea-9e2a-5ef44ee90213",
    title: "Win a case",
    description: "Mike lets win the case",
    isCompleted: true,
    createdBy: "Harvey Specter",
    createdAt: "2023-07-05T13:28:46.247Z",
  },
];

module.exports = { removeTodoById };
