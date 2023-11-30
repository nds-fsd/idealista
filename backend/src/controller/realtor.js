const Realtor = require("../mongo/schemas/realtor");

const getRealtors = async (req, res) => {
  try {
    const queryStrings = req.query || {};
    const allRealtors = await Realtor.find(queryStrings);
    res.status(200).json(allRealtors);
  } catch (error) {
    console.log("Hay una error.");
    return res.status(404).json({ error: "Realtor not found." });
  }
};

const getRealtorId = async (req, res) => {
  try {
    const allRealtors = await Realtor.findById(req.params.id);
    if (allRealtors) {
      res.status(200).json(allRealtors);
    } else {
      res.status(404).json({ error: "ID not found" })
    }
    
  } catch (error) {
    res.status(500).json({ error: "Failed" });
  }
};

const postRealtor = async (req, res) => {
  console.log("Datos recibidos en postRealtor", req.body);
  try {
    const newRealtor = new Realtor(req.body);
    await newRealtor.save();
    console.log("Datos Realtor guardados");
    res.status(200).json(newRealtor);
  } catch (error) {
    res.status(404).json({ error: "Failed to create realtor" });
  }
};

const patchRealtor = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const patchedRealtor = await Realtor.findByIdAndUpdate(id, body, {
    new: true,
    });
    if (patchedRealtor) {
      res.status(200).json(patchedRealtor);
    } else {
      res.status(404).json({ error: "Error to patch realtor" })
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to patch realtor" });
  }
};

const deleteRealtor = async (req, res) => {

  try {
    const { id } = req.params;
    const realtorDelete = await Realtor.findByIdAndDelete(id);
    if (realtorDelete) {
      res.status(200).json({ message: "Realtor deleted successfully" });
    } else {
      res.status(404).json({ error: "Realtor not found" });
    }
    
  } catch (error) {
    res.status(500).json({ error: "Failed to delete realtor" });
  }
};

module.exports = {
  getRealtors,
  getRealtorId,
  postRealtor,
  patchRealtor,
  deleteRealtor,
};
