const express = require("express");
const router = express.Router();

router.use("/api", require("./departmentRoutes"));
router.use(require("./roleRoutes"));
router.use(require("./employeeRoutes"));

module.exports = router;
