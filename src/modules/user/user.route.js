const express = require("express");

const {
  getAddress,
  addAdress,
  getAddressById,
} = require("../../../controllers/address.controller");
const {
  getSkills,
  addSkills,
  getSkillsById,
} = require("../../../controllers/skills.controller");
const {
  getAllUsers,
  signup,
  login,
  accountDelete,
  getProfileById,
} = require("./user.controller");

const routerUser = express.Router();

routerUser.get("/", getAllUsers);
// .get("/address", getAddress)
// .get("/skills", getSkills);
routerUser.post("/signup", signup);
// .post("/addAddress/:id", addAdress)
// .post("/addSkills/:id", addSkills);
routerUser.post("/login", login);
routerUser.get("/profile/:id", getProfileById);
// .get("/getSkills", getSkillsById)
// .get("/getAddress", getAddressById);
routerUser.delete("/profile/deleteAccount/:id", accountDelete);

module.exports = routerUser;
