import PermissionRepository from "../repositories/permissionRepository";
import { injectable, inject } from "tsyringe";
import { Permission } from "../models/permission"

@injectable()
export default class PermissionService {
    constructor(@inject(PermissionRepository) private permissionRepository: PermissionRepository) {}

    async getAllPermission
}