import express from "express";
import employees from "#db/employees";

const app = express();

export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const NUM_EMPLOYEES = 10;
  const ranIndex = Math.floor(Math.random() * NUM_EMPLOYEES);
  res.send(employees[ranIndex]);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  if (Number(id) < 0 || Number(id) > 10) {
    return res.status(404).send("Number should be with 1-10");
  }

  const selectedEmployee = employees.filter(
    //* Had to put "Number()" because "currWorker.id" is a INTEGER, and "id" is a STRING
    (currWorker) => currWorker.id === Number(id),
  );

  res.status(202).send(selectedEmployee[0]);
});
