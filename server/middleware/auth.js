const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SECRET_KEY = 'my_secret_key';

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ _id: decoded._id });
    
    //user doesn't exist
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    // console.log(req.token);
    // console.log(req.user); 

    next();
  } catch (error) {
    res.status(401).send({ error: 'authetication err' });
  }
};

module.exports = auth;
