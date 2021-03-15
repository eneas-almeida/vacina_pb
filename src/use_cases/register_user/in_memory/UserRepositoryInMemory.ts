import { IUserRepository } from 'use_cases/ports/IUserRepository'
import { IUserDTO } from '@entities/user/dtos/IUserDTO'

class UserRepositoryInMemory implements IUserRepository {
    private user_repository: IUserDTO[]

    constructor(repository: IUserDTO[]) {
        this.user_repository = repository
    }

    public async findByEmail(email: string): Promise<IUserDTO | undefined> {
        return this.user_repository.find((data) => data.email === email)
    }

    public async add(user_data: IUserDTO): Promise<void> {
        this.user_repository.push(user_data)
    }
}

export { UserRepositoryInMemory }
