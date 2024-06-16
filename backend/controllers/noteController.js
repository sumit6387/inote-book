const Notes = require("../schema/Notes");

const getNotes = async (req, res) => {
  try {
    const user = req.user._id;
    let notes = await Notes.find({ user });
    return res.send({ status: true, data: notes });
  } catch (err) {
    console.log(err);
    return res.send({ status: false, msg: "Something went wrong!!" });
  }
};

const addNote = async (req, res) => {
  try {
    let payload = req.body;
    const user = req.user._id;
    let note = await Notes.create({ ...payload, user });
    return res.send({
      status: true,
      msg: "Note created successfully!!",
      data: note,
    });
  } catch (err) {
    return res.send({ status: false, msg: "Something went wrong!!" });
  }
};

const editNote = async (req, res) => {
  try {
    let payload = req.body;
    let id = req.params.id;
    console.log(id);
    const user = req.user._id;
    let note = await Notes.findOne({ _id: id, user });
    if (!note) {
      return res.send({ status: false, msg: "Note not found!!" });
    }
    let updatedNote = await Notes.findOneAndUpdate(
      { _id: id, user },
      { ...payload },
      { new: true }
    );
    return res.send({
      status: true,
      msg: "Note updated successfully!!",
      data: updatedNote,
    });
  } catch (err) {
    return res.send({ status: false, msg: "Something went wrong!!" });
  }
};
const deleteNote = async (req, res) => {
  try {
    let id = req.params.id;
    const user = req.user._id;
    let note = await Notes.findOne({ _id: id, user });
    if (!note) {
      return res.send({ status: false, msg: "Note not found!!" });
    }
    await Notes.deleteOne({ _id: id, user });
    return res.send({
      status: true,
      msg: "Note deleted successfully!!",
      data: note,
    });
  } catch (err) {
    console.log(err);
    return res.send({ status: false, msg: "Something went wrong!!" });
  }
};

module.exports = {
  getNotes,
  addNote,
  editNote,
  deleteNote,
};
