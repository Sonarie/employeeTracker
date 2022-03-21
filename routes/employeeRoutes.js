const db = require("../db/connection");

// Get all employees
const getEmployees = () => {
  const sql = `SELECT * FROM employees`;

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

const postEmployees = (body) => {
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

  const sql = `INSERT INTO roles (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
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
  });
};

// Get single employee
// router.get("/employee/:id", (req, res) => {
//   const sql = `SELECT * FROM employees WHERE id = ?`;
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

// Delete a employee
// router.delete("/employee/:id", (req, res) => {
//   const sql = `DELETE FROM employees WHERE id = ?`;

//   db.query(sql, req.params.id, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "employee not found",
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

//module.exports = router;
