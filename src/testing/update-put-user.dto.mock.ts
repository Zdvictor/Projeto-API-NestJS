import { Role } from "../enums/role.enum";
import { UpdatePutUserDTO } from "../user/dto/update-put-user.dto";


export const updatePutDTO: UpdatePutUserDTO = {

    birthAt: "2000/01/01",
    email: "victor@teste.com",
    name: "victor",
    password: "$2y$10$mPSDL2VLNWfKvVhkKjZJReHxcZI2juDyvIhdGNVFCx.OZWqwjueXm",
    role: Role.User

}