var express = require("express");
var router = express.Router();
var skillroute = require("../controllers/skills");
/* GET users listing. */
router.get("/", skillroute.index);
router.post("/", skillroute.create);
router.get("/:id", skillroute.show);
router.delete("/:id", skillroute.delete);
router.put("/:id/edit", skillroute.update);
