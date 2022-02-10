import express from "express";
import cors from "cors";
import {engine} from "express-handlebars";
import path from "path";
import session from "express-session";
import dotenv from "dotenv";
import passport from "passport";
import routerApiProductos from "./routes/productos.js";
import routerApiCarrito from "./routes/carrito.js";
import authRouter from './routes/auth.js';
import homeRouter from './routes/home.js';
import "./db/mongo.js";

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Configuración de motor de plantillas
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: path.resolve() + "/src/views/layouts",
    partialsDir: path.resolve() + "/src/views/partials",
  })
);
app.set("views", "./src/views");
app.set("view engine", ".hbs");
app.use(express.static("/src/views"));
app.use("/images", express.static("./public/img"));

//Configuración de sessiones con passport
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: Number(process.env.SESSION_EXPIRE),
    },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());


//Configuración de rutas
app.use("/api/productos", routerApiProductos);
app.use("/api/carrito", routerApiCarrito);
app.use("/auth", authRouter);
app.use("/", homeRouter);

//Server start
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
