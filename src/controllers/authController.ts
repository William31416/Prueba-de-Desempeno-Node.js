import { container } from "tsyringe";
import { Request, Response } from "express";
import UserService from "../services/userService";
import AdminService from "../services/adminService";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { Admin } from "../models";

export default class AuthController {
    static  async login(req: Request, res: Response){
        try {
            const { email, password} = req.body;
            const userService = container.resolve(UserService)
            const adminService = container.resolve(AdminService);
            const user: User = await userService.checkUserCredentials (
                email,
                password
            );
            const admin: Admin = await adminService.checkAdminCredentials(
                email,
                password
            );
            const tokenUser = AuthController.generateToken({
                id:  user.id,
                username: user.email
            });
            const tokenAdmin = AuthController.generateToken({
                id: admin.id,
                adminname: admin.email 
            })
            res.status(200).json({ status: 200, tokenUser})
            res.status(200).json({ status: 200, tokenAdmin})
        }catch (error: any){
            res.status(401).json({ message: error.message })
        }
    }

    static generateTokenUser = (user: { id: number; username: string}) => {
        const token = jwt.sign(user, "secret", { expiresIn: "1h" });
        return token;
    };
}