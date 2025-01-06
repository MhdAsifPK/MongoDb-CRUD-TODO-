import User from "../Models/userMode.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../middlewares/asyncHandler.js";

const registerUser = asyncHandler(async (req, res, next) => {
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
})

// user authentication function
const authUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // jwt token creation
    let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
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
})

// logout

const logOut = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expiresIn: new Date(0),
  });
  res.status(200).json({ message: "logged out successfully" });
};

export { registerUser, authUser, logOut };
