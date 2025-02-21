import {Router, RouterOptions} from "express";
import { authController } from "../controllers/auth.Controller";

class AuthRoutes {
    //objeto tipo router
    public router: Router;

    //inicializa
    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        
        this.router.post('/', authController.iniciarSesion);
        this.router.get('/', authController.saludar);
    }
}
const authRoutes = new AuthRoutes();
export default authRoutes.router;