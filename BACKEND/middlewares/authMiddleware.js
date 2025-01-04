import jwt from "jsonwebtoken";
import User from "../Models/userMode.js";

const protect = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    console.log(token);

    if (token) {
      try {
        // security key setup 

        // token verification using secret key only() store payload(token nte ullil ullathinte ) object in decoded , that means user id
        const decoded = jwt.verify(token, "12345");
        console.log(decoded);
        req.user = await User.findById(decoded.userId).select("-password");
        next();
      } catch (error) {
        res.status(401);
        throw new Error("not authorised ,Invalid token");
      }
    } else {
      res.status(401);
      throw new Error("not authorised ,no token");
    }
  } catch (error) {
    next(error);
  }
};

export { protect };
