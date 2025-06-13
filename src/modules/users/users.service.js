import bcrypt from "bcrypt";
import { User } from "./users.model.js";
import jwt from "jsonwebtoken";

const createUserIntoDb = async (payLoad) => {
  const { name, email, password } = payLoad;

  const existingsUser = await User.findOne({ email });
  if (existingsUser) {
    throw new Error(" User already existists in database ");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};


// log in functionallity 
const loginUser = async (payLoad) => {
  const { email, name, password } = payLoad;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error(" user not found ");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Crediantial ");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    {
        expiresIn:'7d'
    }
  );

   return {user,token}
};

export const UserService = { createUserIntoDb ,loginUser};
