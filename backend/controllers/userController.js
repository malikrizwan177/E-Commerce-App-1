import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


// Create Token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// User login route
const loginUser = async (req, res) => {};

// User register route
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Duplicate user check
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    
    // Email and strong password validation
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Password Hashing
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new userModel({
        name,
        email,
        password: hashedPass
    })

    const user = await newUser.save()

    const token = createToken(user._id)
    res.json({
        success: true,
        token
    })

  } catch (error) {
    console.log(error);
    res.json({
        success: false,
        message: error.message
    })
  }
};

// Admin login route
const loginAdmin = async (req, res) => {};

export { loginUser, registerUser, loginAdmin };
