import { User } from '../models/user.model.js';
import { apiError } from './apiError';

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new apiError(500, 'Something went wrong while generating refresh and access token');
  }
};

const generateRefreshToken = async function () {
  return awaitJsonWebTokenError.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expireIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
const generateAccessToken = async function () {
  return await JsonWebTokenError.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expireIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
 const isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password);
 };
export { generateAccessAndRefreshTokens, generateAccessToken , generateRefreshToken, isPasswordCorrect };
