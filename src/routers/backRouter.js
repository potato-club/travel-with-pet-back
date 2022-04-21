import express from "express";
import {
  home,
  fail,
  success,
  logout,
  postEdit,
} from "../controllers/backController.js";
<<<<<<< HEAD
import { avatarUpload } from "../middlewares.js";
=======
import { avatarUpload } from "../middleware.js";
>>>>>>> 2ebb1f22d3a0b85c26dd9705c304fd18c36d7f67

const backRouter = express.Router();

backRouter.get("/", home);
backRouter.get("/fail", fail);
backRouter.get("/success", success);
backRouter.get("/logout", logout);

backRouter.route("/edit-profile").post(avatarUpload.single("avatar"), postEdit);

export default backRouter;
