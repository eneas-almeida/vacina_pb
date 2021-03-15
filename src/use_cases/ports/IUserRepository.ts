import { IUserDTO } from '@entities/user/dtos/IUserDTO'
import { IUser } from '@entities/user/model/IUser'

interface IUserRepository {
    findByEmail(email: string): Promise<IUserDTO | undefined>

    add({ name, birth_date, email, password }: IUserDTO): Promise<void>
}

export { IUserRepository }
