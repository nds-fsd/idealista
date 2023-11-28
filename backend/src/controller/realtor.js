const Realtor = require("../mongo/schemas/realtor");

const getRealtor = async (req, res) => {
  const queryStrings = req.query || {};
  try {
    const allRealtors = await Realtor.find(queryStrings);
    res.status(200).json(allRealtors)
  } catch (error) {
    console.log('Hay una error.')
    return res.status(404).json({error: 'Realtor not found'})
  }
};

const getRealtorId = async (req,res) => {
 
  try {
  const allRealtors = await Realtor.findById(req.params.id);
  res.status(200).json(allRealtors);
    
  } catch (error) {
    res.status(404).json({error:"ID not found"})
    
  }
};

const postRealtor = async (req,res) => {
  const body = req.body;
  console.log ("Datos recibidos en postRealtor", body);
  try {
    const data ={
      realtorName: body.realtorName,
      realtorPhone: body.realtorPhone,
      realtorEmail: body.realtorEmail,
      realtorLocation: body.realtorLocation,
      realtorRanking: body.realtorRanking,
    }
    const newRealtor = new Realtor(data);
    await newRealtor.save();
    console.log("Datos Realtor guardados");
    res.status(200).json(newRealtor);
    
  } catch (error) {
    res.status(404).json({error:"The data is essential"})
  }



}

// Filip solo faltaría hacer un UPDATE, PATCH Y DELETE//




module.exports = {
    getRealtor,
    getRealtorId,
    postRealtor,
}

