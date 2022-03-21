const db = require("../db/connection");
const inputCheck = require("../utils/inputCheck");

// Get all roles and their employee affiliation
const getRoles = () => {
  const sql = `SELECT roles.*, employees.name 
                AS employee_name 
                FROM roles 
                LEFT JOIN employees 
                ON roles.employee_id = employees.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.log({ error: err.message });
      return;
    }
    console.log({
      message: "success",
      data: rows,
    });
  });
};

// Get single role with employee affiliation
// router.get("/role/:id", (req, res) => {
//   const sql = `SELECT roles.*, employees.name
//                AS employee_name
//                FROM roles
//                LEFT JOIN employees
//                ON roles.employee_id = employees.id
//                WHERE roles.id = ?`;
//   const params = [req.params.id];

//   db.query(sql, params, (err, row) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: "success",
//       data: row,
//     });
//   });
// });

// Create a role
const postRoles = (body) => {
  const errors = inputCheck(
    body,
    "first_name",
    "last_name",
    "salary",
    "department_id"
  );
  if (errors) {
    console.log({ error: errors });
    return;
  }

  const sql = `INSERT INTO roles (first_name, last_name, salary, department_id) VALUES (?,?,?,?)`;
  const params = [
    body.first_name,
    body.last_name,
    body.salary,
    body.department_id,
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
  });
};

// Update a role's employee
// router.put("/role/:id", (req, res) => {
//   const errors = inputCheck(req.body, "employee_id");
//   if (errors) {
//     res.status(400).json({ error: errors });
//     return;
//   }

//   const sql = `UPDATE roles SET employee_id = ?
//                WHERE id = ?`;
//   const params = [req.body.employee_id, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "role not found",
//       });
//     } else {
//       res.json({
//         message: "success",
//         data: req.body,
//         changes: result.affectedRows,
//       });
//     }
//   });
// });

// Delete a role
// router.delete("/role/:id", (req, res) => {
//   const sql = `DELETE FROM roles WHERE id = ?`;

//   db.query(sql, req.params.id, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "role not found",
//       });
//     } else {
//       res.json({
//         message: "deleted",
//         changes: result.affectedRows,
//         id: req.params.id,
//       });
//     }
//   });
// });

// module.exports = router;
