const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce");
const multer = require("../middleware/multer-config");
const secuAuth = require("../middleware/security-auth");

router.get("/", auth, sauceCtrl.getAllSauce);
router.post("/", auth, multer, sauceCtrl.createSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.put("/:id", auth, secuAuth, multer, sauceCtrl.updateSauce);
router.delete("/:id", auth, secuAuth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, sauceCtrl.likeSauce);

module.exports = router;
