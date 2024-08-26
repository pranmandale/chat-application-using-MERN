import jwt from 'jsonwebtoken';
// import User from '../models/user.model';
import User from '../models/user.model.js'

const SecureRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({error: "No token, authentication denied"});
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        if(!decoded) {
            return res.status(401).json({error: "invalid token"})
        }

        const user = await User.findById(decoded.userId).select('-password');
        if(!user) {
            return res.status(401).json({error:"no user found"})
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("error in secureroute ", error)
        res.status(500).json({error: "Internal server error"})
    }
}

export default SecureRoute;