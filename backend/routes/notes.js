const express = require("express");
const {
  getNotes,
  addNote,
  editNote,
  deleteNote,
} = require("../controllers/noteController");
const { body } = require("express-validator");
const verifyToken = require("../middleware");

const router = express.Router();

router.get("/", verifyToken, getNotes);
router.post(
  "/addNote",
  verifyToken,
  [body("title").trim().notEmpty(), body("description").trim().notEmpty()],
  addNote
);

router.put("/editNote/:id", verifyToken, editNote);

router.delete("/deleteNote/:id", verifyToken, deleteNote);

module.exports = router;
