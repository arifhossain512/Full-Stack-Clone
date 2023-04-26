import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
//
// import { Jwt } from "jsonwebtoken";
// const deleteUser = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).send("Yor are not authenticated");
//   Jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
//     if (payload.id !== user._id.toString()) {
//      return res.send(403).send("You can delete only your account");
//     }
//     await User.findByIdAndDelete(req.params.id);
//   });
// res.status(200).send("deleted");

// };