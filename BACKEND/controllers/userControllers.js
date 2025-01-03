import User from "../Models/userMode.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // pass the forntent emain into userexist
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("user alredy exist");
    }
    // password encrypting
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });
    if (user) {
      res
        .status(200)
        .json({ _id: user._id, name: user.name, email: user.email });
    } else {
      res.status(400);
      throw new Error("invalid user data");
    }
  } catch (err) {
    next(err);
  }
};

// user authentication function
const authUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      // jwt token creation
      let token = jwt.sign({ userId: user._id }, "12345", {
        expiresIn: "1d",
      });

      res.cookie("jwt", token, {
        httpOnly: true, // after login jwt in stored in te frontends cookies as https only cookie , so request after login will be attactched with the jwt token stored in the cookies
        secure: false, 
        sameSite: "strict", //privent csrf attack
        maxage: 60 * 60 * 1000, //1 day inn milliseconds 
      });
      res
        .status(200)
        .json({ _id: user._id, name: user.name, email: user.email });
    } else {
      res.status(400);
      throw new Error("invalid email and password");
    }
  } catch (err) {
    next(err);
  }
};

export { registerUser, authUser };