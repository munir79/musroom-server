

export const checkIsAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    throw new Error(403, 'Forbidden - Admins only');
  }
  next();
};
