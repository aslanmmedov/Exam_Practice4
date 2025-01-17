const express = require('express');
const router = express.Router();

const {
    GetAllData,
    AddData,
    GetDataById,
    DeleteDataById,
} = require("../controlers/ClothController")

router.get("/",GetAllData)
router.get("/:id",GetDataById)
router.post("/",AddData)
router.delete("/:id",DeleteDataById);

module.exports = router;