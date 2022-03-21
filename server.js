const db = require("./db/connection");
const inquirer = require("inquirer");
const inputCheck = require("./utils/inputCheck");

const mainPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "what do you want to do",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((data) => {
      console.log(data);
      if (data.choice === "view all departments") {
        getDepartments();
      }
      if (data.choice === "add a department") {
        inquirer
          .prompt([
            {
              name: "name",
              type: "input",
              message: "What is the name of the department?",
            },
          ])
          .then((body) => {
            postDepartments(body);
          });
      }
      if (data.choice === "view all roles") {
        getRoles();
      }
      if (data.choice === "add a role") {
        inquirer
          .prompt([
            {
              name: "title",
              type: "input",
              message: "What is the name of the job role?",
            },
            {
              name: "salary",
              type: "input",
              message:
                "What is the salary amount for this role? (in whole numbers)",
            },
          ])
          .then((body) => {
            postRoles(body);
          });
      }
      if (data.choice === "view all employees") {
        getEmployees();
      }
      if (data.choice === "add an employee") {
        inquirer
          .prompt([
            {
              name: "first_name",
              type: "input",
              message: "What is the employees first name?",
            },
            {
              name: "last_name",
              type: "input",
              message: "What is the employees last name?",
            },
            {
              name: "role",
              type: "input",
              message: "What is the employees job role?",
            },
            {
              name: "manager",
              type: "input",
              message: "Who is the employees manager?",
            },
          ])
          .then((body) => {
            postEmployee(body);
          });
      }
    });
};

db.connect((err) => {
  if (err) throw err;
  mainPrompt();
});

const getDepartments = () => {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log({ error: err.message });
    }
    console.table(rows);
    mainPrompt();
  });
};

const postDepartments = (body) => {
  const errors = inputCheck(body, "name");
  if (errors) {
    return { error: errors };
  }

  const sql = `INSERT INTO department (name) VALUES (?)`;
  const params = [body.name];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: body,
    });
    mainPrompt();
  });
};

const getRoles = () => {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.table(rows);
    mainPrompt();
  });
};

const postRoles = (body) => {
  const errors = inputCheck(body, "title", "salary", "department_id");
  if (errors) {
    console.log({ error: errors });
    return;
  }

  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
  const params = [body.title, body.salary, body.department_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: body,
    });
    mainPrompt();
  });
};

const getEmployees = () => {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: rows,
    });
    mainPrompt();
  });
};

const postEmployee = (body) => {
  const errors = inputCheck(
    body,
    "first_name",
    "last_name",
    "role_id",
    "manager_id"
  );
  if (errors) {
    console.log({ error: errors });
    return;
  }

  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.role_id,
    body.manager_id,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: body,
    });
    mainPrompt();
  });
};
