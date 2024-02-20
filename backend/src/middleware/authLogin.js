const bcrypt = require('bcrypt');
const User = require('../mongo/schemas/users');

const authLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if (email === "") {
        return res.status(400).json({ message: "Email is empty" });
    }

    if (password === "") {
        return res.status(400).json({ message: "Password is empty" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        req.user = { _id: user._id }; // Attach user ID to req.user
        console.log('req.user:', req.user);
        console.log('req.user.id:', req.user.id);
    
        next();
    } catch (e) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = authLogin;
