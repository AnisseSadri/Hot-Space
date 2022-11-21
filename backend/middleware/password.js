const passwordValidator = require("password-validator");
const schema = new passwordValidator();

schema.is().min(5).is().max(100);

module.exports = (req, res, next) => {
  if (schema.validate(req.body.password)) {
    next();
  } else {
    res.status(400).json({
      error: "le mot de passe n'est pas assez fort",
    });
  }
};
