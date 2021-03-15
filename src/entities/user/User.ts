import { IUser } from './model/IUser'
import { Either, left, right } from '@shared/Either'
import { IUserDTO } from './dtos/IUserDTO'
import { Name } from './types/Name'
import { NameError } from './errors/NameError'
import { BirthDate } from './types/BirthDate'
import { BirthDateError } from './errors/BirthDateError'
import { Email } from './types/Email'
import { EmailError } from './errors/EmailError'
import { Password } from './types/Password'
import { PasswordError } from './errors/PasswordError'

class User implements IUser {
    private readonly name: Name
    private readonly birth_date: BirthDate
    private readonly email: Email
    private readonly password: Password

    private constructor(name: Name, birth_date: BirthDate, email: Email, password: Password) {
        this.name = name
        this.birth_date = birth_date
        this.email = email
        this.password = password
        Object.freeze(this)
    }

    public getName(): string {
        return this.name.value
    }

    public getBirthDate(): string {
        return this.birth_date.value
    }

    public getEmail(): string {
        return this.email.value
    }

    public getPassword(): string {
        return this.password.value
    }

    static create(
        data: IUserDTO
    ): Either<NameError | BirthDateError | EmailError | PasswordError, User> {
        const { name, birth_date, email, password } = data

        const nameOrEror: Either<NameError, Name> = Name.create(name)
        const birthDateOrError: Either<BirthDateError, BirthDate> = BirthDate.create(birth_date)
        const emailOrError: Either<EmailError, Email> = Email.create(email)
        const passwordOrError: Either<PasswordError, Password> = Password.create(password)

        if (nameOrEror.isLeft()) {
            return left(new NameError(name))
        }

        if (birthDateOrError.isLeft()) {
            return left(new BirthDateError(birth_date))
        }

        if (emailOrError.isLeft()) {
            return left(new EmailError(email))
        }

        if (passwordOrError.isLeft()) {
            return left(new PasswordError(password))
        }

        const nameValue: Name = nameOrEror.value
        const birthDateValue: BirthDate = birthDateOrError.value
        const emailValue: Email = emailOrError.value
        const passwordValue: Password = passwordOrError.value

        return right(new User(nameValue, birthDateValue, emailValue, passwordValue))
    }
}

export { User }
