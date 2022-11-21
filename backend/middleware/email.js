const passwordValidator = require("password-validator");
const schema = new passwordValidator();

schema
  .has()
  .not()
  .spaces()
  .has(/[a-zA-Z][@][a-zA-Z]+[.][a-zA-Z]/g);

module.exports = (req, res, next) => {
  if (schema.validate(req.body.email)) {
    next();
  } else {
    res.status(400).json({
      error: "L'adresse email n'est pas valide",
    });
  }
};
