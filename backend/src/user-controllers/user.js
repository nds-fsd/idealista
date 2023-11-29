const User = require("../mongo/schemas/user");

const getUsers = async (req, res) => {
    const queryStrings = req.query || {};
    const allUsers = await User.find(queryStrings);
    res.json(allUsers);
};

const getUser = async (req, res) => {
    const allUsers = await User.findById(req.params.id);
    res.json(allUsers);
};

const patchUser = async (req, res) => {
    const allUsers = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        upsert: true,
    });
    res.json(allUsers);
};

const deleteUser = async (req, res) => {
    const allUsers = await User.findByIdAndDelete(req.params.id, req.body);
    res.json(allUsers);
};

const createUser = async (req, res) => {
    const body = req.body;

    console.log(body);

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
    getUsers,
    getUser,
    patchUser,
    deleteUser,
    createUser,
}