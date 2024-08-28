import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const SecureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            console.log("No token found in cookies");
            return res.status(401).json({ error: "No token, authentication denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decoded || !decoded.userId) {
            console.log("Invalid token or missing userId");
            return res.status(401).json({ error: "Invalid token" });
        }

        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
            console.log("No user found with this token");
            return res.status(401).json({ error: "No user found" });
        }

        req.user = user;
        req.user_id = user._id;  // Correctly set the user_id for further use

        next();
    } catch (error) {
        console.log("Error in SecureRoute middleware: ", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default SecureRoute;
