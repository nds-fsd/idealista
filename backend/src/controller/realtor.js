const Realtor = require("../mongo/schemas/realtor");

const getRealtor = async (req, res) => {
  const queryStrings = req.query || {}
  const allRealtors = await Realtor.find (queryStrings);
  try {
    res.status(200).json(allRealtors)
  } catch (error) {
    console.log('Hay una error.')
    return res.status(404).json({error: 'Realtor not found'})
  }
};

module.exports = {
    getRealtor
}

