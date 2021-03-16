import { IUserRepository } from 'use_cases/ports/IUserRepository'
import { IUserDTO } from '@entities/user/dtos/IUserDTO'

class UserRepositoryInMemory implements IUserRepository {
    private user_repository: IUserDTO[]

    constructor(users: IUserDTO[]) {
        this.user_repository = users
    }

    async findByEmail(email: string): Promise<IUserDTO | undefined> {
        return this.user_repository.find((data) => data.email === email)
    }

    async add(user_data: IUserDTO): Promise<void> {
        this.user_repository.push(user_data)
    }

    async removeByEmail(email: string): Promise<void> {
        const user_index = this.user_repository.findIndex((data) => data.email === email)

        if (user_index !== -1) {
            this.user_repository.splice(1, user_index)
        }
    }
}

export { UserRepositoryInMemory }
