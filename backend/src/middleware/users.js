const User = require("../mongo/schemas/users");

const validateRegister = async (req, res, next) => {
    const { email, password, name } = req.body;

    if (!name) {
        return res.status(400).json({ error: { name: "Tu nombre es requerido" } });
    }

    const validName = /^.{3,}$/

    if (!validName.test(name)) {
        return res.status(400).json({ name: "El nombre debe tener al menos 3 caracteres" })
    }

    if (!email) {
        return res.status(400).json({ error: { email: "Tu email es requerido" } });
    }

    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!emailFormat.test(email)) {
        return res.status(400).json({ email: "Este no es un email válido" })
    }

    if (!password) {
        return res.status(400).json({ error: { password: "Es requerida una contraseña" } });
    }
    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (!validatePassword.test(password)) {
        return res.status(400).json({ password: 'La contraseña debe tener al menos: 8 caracteres, una letra mayúscula, una letra minúscula y un número' })


    }

    const user = await User.findOne({ email: email });

    if (user)
        return res.status(403).json({ error: { email: "Este email ya está registrado" } });

    next();
};

module.exports = validateRegister;