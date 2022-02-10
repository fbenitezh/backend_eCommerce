import { Router } from "express";
import passport from "../utils/passport.util.js";
import UserController from "../controllers/UserController.js";
import { checkAuthentication } from "../middlewares/auth.middleware.js";
import { upload } from "../utils/multer.util.js";

const router = new Router();
const userController = new UserController();

router.get("/login", userController.getLogin);

router.post("/login",passport.authenticate("login", { failureRedirect: "/auth/failLogin" }),userController.postLogin);

router.get("/failLogin", userController.getFailLogin);

router.get("/signup", userController.getsignUp);

router.post("/signup",upload.single('avatar'),passport.authenticate("signup", { failureRedirect: "/auth/failSignUp" }),userController.postSignUp);

router.get("/failSignUp", userController.getFailSignUp);

router.get("/logout", userController.logout);

router.get("/protected", checkAuthentication, (req, res) => {
  res.send("<h1>autenticado</h1>");
});

export default router;
