const User = require("../mongo/schemas/user");

const getAll = async (req, res) => {

    try {
        const queryStrings = req.query || {};
        const allUsers = await User.find(queryStrings);
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error)
    }

};

const getById = async (req, res) => {
    try {
        const allUsers = await User.findById(req.params.id);
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error)
    }

};

const update = async (req, res) => {

    try {
        const allUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            upsert: true,
        }); res.status(200).json(allUsers);
    } catch (error) {
        console.log(error)
    }


};

const remove = async (req, res) => {
    try {
        const allUsers = await User.findByIdAndDelete(req.params.id, req.body);
        res.json(allUsers);
    } catch (error) {
        console.log(error)
    }

};

const create = async (req, res) => {

    const body = req.body;

    const data = {
        name: body.name,
        email: body.email,
        lasName: body.lastName,
        password: body.password,
        location: body.location,
    };
    const newUser = new User(data); //para crear una nueva instancia del user en la BD

    try {
        await newUser.save()  //aquí se guarda en mongo esa esa nueva instancia 
        res.json(newUser); //se devuelve la respuesta
    } catch (error) {
        console.log(error);
        res.status(500).json(error);

    }



}

module.exports = {
    getAll,
    getById,
    update,
    remove,
    create,
}