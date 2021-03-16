import { IUserDTO } from '@entities/user/dtos/IUserDTO'

interface IUserRepository {
    findByEmail(email: string): Promise<IUserDTO | undefined>

    add(user_data: IUserDTO): Promise<void>

    removeByEmail(email: string): Promise<void>
}

export { IUserRepository }
