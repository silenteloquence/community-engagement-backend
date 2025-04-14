import jwt from 'jsonwebtoken';

export default function authMiddleware(req) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    throw new Error('Unauthorized: No token provided'); // 401
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return { user };
  } catch (err) {
    throw new Error('Unauthorized: Invalid token'); // 401
  }
}