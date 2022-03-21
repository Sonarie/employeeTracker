const db = require("../db/connection");
const inputCheck = require("../utils/inputCheck");

// Get all departments and their role affiliation


// Get single department with role affiliation
// router.get("/department/:id", (req, res) => {
//   const sql = `SELECT departments.*, roles.name 
//                AS role_name 
//                FROM departments 
//                LEFT JOIN roles 
//                ON departments.role_id = roles.id 
//                WHERE departments.id = ?`;
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

// Create a department
const postDepartment = (body) => {
  const errors = inputCheck(
    body,
    "name",
  );
  if (errors) {
  return ({ error: errors });
  }

  const sql = `INSERT INTO departments (name) VALUES (?)`;
  const params = [
    body.name,
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

// Update a department's role
// router.put("/department/:id", (req, res) => {
//   const errors = inputCheck(req.body, "role_id");
//   if (errors) {
//     res.status(400).json({ error: errors });
//     return;
//   }

//   const sql = `UPDATE departments SET role_id = ? 
//                WHERE id = ?`;
//   const params = [req.body.role_id, req.params.id];

//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "department not found",
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

// Delete a department
// router.delete("/department/:id", (req, res) => {
//   const sql = `DELETE FROM departments WHERE id = ?`;

//   db.query(sql, req.params.id, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: res.message });
//     } else if (!result.affectedRows) {
//       res.json({
//         message: "department not found",
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
