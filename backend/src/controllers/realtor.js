const Realtor = require("../mongo/schemas/realtor");

const getAll = async (req, res) => {
  try {
    const queryStrings = req.query || {};
    const allRealtors = await Realtor.find(queryStrings);
    res.status(200).json(allRealtors);
  } catch (error) {
    console.log("Error in realtor.js getAll");
    return res.status(500).json(error.message);
  }
};

const getId = async (req, res) => {
  try {
    const realtor = await Realtor.findById(req.params.id);
    if (realtor) {
      res.status(200).json(realtor);
    } else {
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const create = async (req, res) => {
  try {
    const newRealtor = new Realtor(req.body);
    await newRealtor.save();
    if (newRealtor) {
      res.status(201).json(newRealtor);
    } else {
      res.status(400).json();
    }
    
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const patchedRealtor = await Realtor.findByIdAndUpdate(id, body, {
    new: true, upsert:false});
    if (patchedRealtor) {
      res.status(200).json(patchedRealtor);
    } else {
      res.status(404).json()
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const remove = async (req, res) => {

  try {
    const { id } = req.params;
    const realtorDelete = await Realtor.findByIdAndDelete(id);
    if (realtorDelete) {
      res.status(201).json();
    } else {
      res.status(404).json();
    }
    
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAll,
  getId,
  create,
  update,
  remove,
};
