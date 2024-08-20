// import User from "../models/user.model.js";

// export const signup= (req,res) => {
//     const {fullname,email,password,confirmPassword} = req.body;
//     try {
//         if(password !== confirmPassword) {
//             // status 400 is used for invalid data
//             return res.status(400).json({error:"Password do not match"})
//         }
    
//         // if user is already exist in database to check this we are using below function
//         const user = User.findOne({email})
//         if(user) {
//             return res.status(400).json({error:"user is already exists"})
//         }
    
//         // if not exist then create new user
//         const newUser = new User({
//             fullname,
//             email,
//             password,
//         })
//         // save this created user
//         newUser.save();
//         // 201 code is for success status code
//         res.status(201).json({message:"user created successfully"})

//     } catch (error) {
//         console.log(error)
//         // 500 status code is for internal server error
//         res.status(500).json({errr:"Internal server error"})
//     }
// }


import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    
    try {
        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword, // Save the hashed password
        });

        // Save the user
        await newUser.save();

        // Send success response
        return res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.error(error);
        // Handle internal server error
        return res.status(500).json({ error: "Internal server error" });
    }
};
