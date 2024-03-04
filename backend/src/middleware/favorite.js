const Favorite = require("../mongo/schemas/favorite");
const User = require("../mongo/schemas/users");
const RealEstate = require("../mongo/schemas/realestate");

const createFavorite = async (req, res, next) => {
    const { userId, realestateId } = req.body;

    const favorite = await Favorite.findOne({ user: userId, realEstate: realestateId });

    if (favorite) {
        return res.status(403).json({ error: "Este inmueble ya está en la lista de favoritos de este usuario" })
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
        return res.status(404).json({ error: "Este usuario no existe" })
    }

    const realEstate = await RealEstate.findOne({ _id: realestateId });

    if (!realEstate) {
        return res.status(404).json({ error: "Este inmueble no existe" })

    }
    next();
}



module.exports = createFavorite;