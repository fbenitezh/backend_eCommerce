import { Router } from "express";
import HomeController from "../controllers/HomeController.js";
import { checkAuthentication } from "../middlewares/auth.middleware.js";

const router = new Router();
const homeController = new HomeController();

router.get("/", checkAuthentication, homeController.index);
router.get("/home", checkAuthentication, homeController.index);

export default router;
