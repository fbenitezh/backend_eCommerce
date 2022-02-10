import { Router } from "express";
import CarritoController from "../controllers/carritoController.js";
import { checkAuthentication } from "../middlewares/auth.middleware.js";

const router = new Router();
const carritoController = new CarritoController();

router.post("/:id/productos", checkAuthentication, carritoController.addProductById);

router.post("/", checkAuthentication, carritoController.create);

router.delete("/:id/productos/:id_prod", checkAuthentication, carritoController.deleteByIdProducto);

router.delete("/:id", checkAuthentication, carritoController.delete);

router.get("/:id/productos", checkAuthentication, carritoController.getProducts);


export default router;
