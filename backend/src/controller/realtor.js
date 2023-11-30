const Realtor = require("../mongo/schemas/realtor");

const getRealtor = async (req, res) => {
  const queryStrings = req.query || {};
  try {
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
    res.status(200).json(allRealtors);
  } catch (error) {
    res.status(404).json({ error: "ID not found" });
  }
};

const postRealtor = async (req, res) => {
  console.log("Datos recibidos en postRealtor", body);
  try {
    const body = req.body;
    const data = {
      realtorName: body.realtorName,
      realtorPhone: body.realtorPhone,
      realtorEmail: body.realtorEmail,
      realtorLocation: body.realtorLocation,
      realtorRanking: body.realtorRanking,
    };
    const newRealtor = new Realtor(data);
    await newRealtor.save();
    console.log("Datos Realtor guardados");
    res.status(200).json(newRealtor);
  } catch (error) {
    res.status(404).json({ error: "Failed to update realtor" });
  }
};

const patchRealtor = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const patchedRealtor = await Realtor.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.status(200).json(patchedRealtor);
  } catch (error) {
    res.status(404).json({ error: "Failed to patch realtor" });
  }
};

const deleteRealtor = async (req, res) => {
  try {
    const { id } = req.params;
    await Realtor.findByIdAndDelete(id);
    res.status(200).json({ message: "Realtor deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "Failed to delete realtor" });
  }
};

module.exports = {
  getRealtor,
  getRealtorId,
  postRealtor,
  patchRealtor,
  deleteRealtor,
};
