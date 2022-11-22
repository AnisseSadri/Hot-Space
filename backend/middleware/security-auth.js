const Sauce = require("../models/Sauce");

module.exports = (req, res, next) => {
  const sauceId = req.params.id;
  Sauce.findOne({ _id: sauceId })
    .then((sauce) => {
      const sauceUserId = sauce.userId;
      if (sauceUserId === req.auth.userId) {
        next();
      } else {
        res
          .status(400)
          .json({ error: "Vous n'êtes pas autorisé à modifier ce produit" });
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
