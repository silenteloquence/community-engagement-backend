import jwt from 'jsonwebtoken'

export default function authMiddleware(req) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');
  if (!token) return {};
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return { user };
  } catch {
    return {};
  }
}
