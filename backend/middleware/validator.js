const passwordValidator = require("password-validator");
const schema = new passwordValidator();
const schema2 = new passwordValidator();

schema.is().min(5).is().max(100);
schema2
  .has()
  .not()
  .spaces()
  .has(/[a-zA-Z][@][a-zA-Z]+[.][a-zA-Z]/g);

module.exports = (req, res, next) => {
  if (schema2.validate(req.body.email) && schema.validate(req.body.password)) {
    next();
  } else {
    res.status(400).json({
      error: "L'adresse email ou le mot de passe n'est pas assez fort",
    });
  }
};
