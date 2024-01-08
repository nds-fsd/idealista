
const authLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (email === "") {
        return res.status(400).json({ message: "Email is empty" });
    }

    if (password === "") {
        return res.status(400).json({ message: "Password is empty" });
    }

    next();
};

module.exports = authLogin;
