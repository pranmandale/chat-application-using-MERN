import jwt from 'jsonwebtoken';

// Function to create a token and save it in a cookie
const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d"
  });

  // Corrected to use res.cookie instead of res.cookies
  res.cookie("jwt", token, {
    httpOnly: true,  // Note the lowercase 'h'
    secure: true,    // This ensures the cookie is only sent over HTTPS
    sameSite: "strict" // This controls the browser's cookie policy
  });
}

export default createTokenAndSaveCookie;
