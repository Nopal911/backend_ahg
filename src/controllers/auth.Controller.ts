import {Request, Response} from "express";
import validator from "validator";
import model from '../models/authModelo';


class AuthController {
    /*public async iniciarSesion(req: Request, res: Response) {
        const {email, password} = req.body;
        return res.json({ message : "Autenticacion correcta",
            email: email,
            password: password });
    }*/

    public async saludar(req: Request, res: Response) {
        const {nombre, correo, edad}= req.query;
        return res.json ({
            nombre, correo, edad
        })
    }

    public async iniciarSesion(req: Request, res: Response) {
        
       
        try {
            const {email, password }= req.body;
     
            // verificar que los datos no esten vacios
            if (validator.isEmpty(email.trim()) ||
                validator.isEmpty(password.trim())) {
            return res
                .status(400)
                .json({ message: "Los campos son requeridos", code: 1 });
            }

            const lstUsers = await model.getuserByEmail(email);
if (lstUsers.length <= 0) {
  return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto", code: 1 });
}
  return res.json({ message: "Autenticación correcta", code: 0 });

     
     
        } catch (error: any) {
            return res.status(500).json({ message : `${error.message}` });
        }
        
        
    }

    

}
export const authController = new AuthController();