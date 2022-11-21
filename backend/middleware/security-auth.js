const jwt = require("jsonwebtoken");
const Sauce = require("../models/Sauce");

module.exports = (req, res, next) => {
  const sauceId = req.params.id;
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const userId = decodedToken.userId;
  Sauce.findOne({ _id: sauceId })
    .then((sauce) => {
      const sauceUserId = sauce.userId;
      if (sauceUserId === userId) {
        next();
      } else {
        res
          .status(400)
          .json({ error: "Vous n'êtes pas autorisé à modifier ce produit" });
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
