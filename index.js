const express = require("express");
const App = express();

App.use(express.json());

const users = [
  {
    id: 1,
    name: "abc",
    age: 15,
  },
  {
    id: 2,
    name: "jkl",
    age: 16,
  },
  {
    id: 3,
    name: "tyu",
    age: 17,
  },
  {
    id: 4,
    name: "iou",
    age: 18,
  },
  {
    id: 5,
    name: "xyz",
    age: 19,
  },
];

App.get("/users", (request, response) => {
  response.send({
    isSuccessfull: true,
    data: users,
  });
});
App.get("/users/:id", (request, response) => {
  let id = request.params.id;
  let obj = users.find((x) => x.id == id);
  if (!obj) {
    response.send({
      isSuccessfull: false,
      data: null,
      message: "No Data Found",
    });
  } else {
    response.send({
      isSuccessfull: true,
      data: obj,
      message: "",
    });
  }
});

App.post("/users", (request, response) => {
  const body = request.body;
  let id = users.length + 1;
  users.push({ ...body, id: id });
  response.send("User Added Successfully");
});
App.put("/users/:id", (request, response) => {
  let id = request.params.id;
  const body = request.body;

  let i = users.findIndex((x) => x.id == id);
  if (i > -1) {
    users[i].name = body.name;
    users[i].age = body.age;
    response.send({
      isSuccessfull: true,
      data: users[i],
      message: "Record Updated Successfully",
    });
  } else {
    response.send({
      isSuccessfull: false,
      data: null,
      message: "No Record Found",
    });
  }

  response.send("User Added Successfully");
});



App.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Your Server is listening on http://localhost:5000");
  }
});

// Express JS
// MongoDb
// CORS
// dotEnv
