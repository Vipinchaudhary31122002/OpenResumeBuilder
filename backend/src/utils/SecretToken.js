import { COOKIE_EXPIRE } from "../constants.js";

export const sendToken = (user, statusCode, res) => {
  try {
    const cookieExpireDays = Number(COOKIE_EXPIRE);
    if (isNaN(cookieExpireDays) || cookieExpireDays <= 0) {
      throw new Error("COOKIE_EXPIRE must be a positive number");
    }
    const token = user.getJWTToken();
    const cookieExpireTime = cookieExpireDays * 24 * 60 * 60 * 1000;
    const expirationDate = new Date(Date.now() + cookieExpireTime);
    const cookieOptions = {
      httpOnly: true,
      expires: expirationDate,
    };
    res
      .status(statusCode)
      .cookie("token", token, cookieOptions)
      .json({
        success: true,
        user: { userid: user._id, username: user.username },
        message: "token successfully delivered to client",
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error while sending token",
    });
  }
};
