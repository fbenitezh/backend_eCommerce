import { Router } from "express";
import ProductoController from "../controllers/productoController.js";
import { requiereAdmin } from "../middlewares/admin.js";
import { checkAuthentication } from "../middlewares/auth.middleware.js";

const router = new Router();
const productoController = new ProductoController();

router.get("/:id?", checkAuthentication, productoController.getProducts);

router.post("/", checkAuthentication, requiereAdmin, productoController.addProduct);

router.put("/:id", checkAuthentication, requiereAdmin, productoController.updateProduct);

router.delete("/:id", checkAuthentication, requiereAdmin, productoController.deleteProduct);

export default router;
