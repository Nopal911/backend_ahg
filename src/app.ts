import express, {Application} from "express";
import { Producto } from "./models/producto";
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';

class Server {
  private app: Application;

  //inicializa clase
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }

  //configuracion de modulos
  config(): void {
    // configuracion del puerto para el servidor
    this.app.set("port", 3000);

    //muestra las peticiones en consola
    this.app.use(morgan("dev"));

    //puertas de conexion de la API
    this.app.use(cors());

    //solo se permiten peticiones en formato JSON
    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({extended: false}));
  }

  //configurar rutas
  routes() {
    this.app.use("/", authRoutes);
  }
}

const server = new Server();

/*const app = express();
const port = 3000;

const productos: Producto[] = [
  { nombre: "Laptop", precio: 1200, cantidad: 5 },
  { nombre: "Mouse", precio: 25, cantidad: 20 },
  { nombre: "Teclado", precio: 50, cantidad: 15 },
  { nombre: "Monitor", precio: 300, cantidad: 8 },
  { nombre: "Auriculares", precio: 80, cantidad: 10 },
];

app.get("/", (req, res) => {
  productos.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}, cantidad: ${producto.cantidad ? "Sí" : "No"}`);
});

  res.json(productos);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});*/