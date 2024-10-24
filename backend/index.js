const express = require("express"),
  path = require("path");

const app = express();

// Frontendet vill ha /
app.use(express.static(path.join(path.resolve(), "dist")));

// Backendet vill ha /
app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

console.log(path.resolve());
console.log(path.join(path.resolve(), "dist"));

// Det som kommer först vinner

app.listen(3000, () => {
  console.log("Redo på http://localhost:3000/");
});
