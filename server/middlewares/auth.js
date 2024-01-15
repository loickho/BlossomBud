const { userTable } = require('../models/users.models');
const { isValidObjectId } = require('mongoose');

const authMiddleware = async (req, res, next) => {
  try {
    const { uid } = req.session;
    if (!isValidObjectId(uid)) {
      throw new Error('Invalid user ID');
    }
    const user = await userTable.findOne({ _id: uid });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;
