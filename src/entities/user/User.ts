import { IUser } from './model/IUser'
import { Either, left, right } from '@shared/Either'
import { ICreateUserDTO } from './dtos/ICreateUserDTO'
import { EmailError } from './errors/EmailError'
import { NameError } from './errors/NameError'
import { PasswordError } from './errors/PasswordError'
import { Email } from './types/Email'
import { Name } from './types/Name'
import { Password } from './types/Password'

class User implements IUser {
    private readonly _name: Name
    private readonly _email: Email
    private readonly _password: Password

    private constructor(name: Name, email: Email, password: Password) {
        this._name = name
        this._email = email
        this._password = password
        Object.freeze(this)
    }

    getName(): string {
        return this._name.value
    }

    getEmail(): string {
        return this._email.value
    }

    getPassword(): string {
        return this._password.value
    }

    static create(data: ICreateUserDTO): Either<NameError | EmailError | PasswordError, User> {
        const { name, email, password } = data

        const nameOrEror: Either<NameError, Name> = Name.create(name)
        const emailOrError: Either<EmailError, Email> = Email.create(email)
        const passwordOrError: Either<PasswordError, Password> = Password.create(password)

        if (nameOrEror.isLeft()) {
            return left(new NameError(name))
        }

        if (emailOrError.isLeft()) {
            return left(new EmailError(email))
        }

        if (passwordOrError.isLeft()) {
            return left(new PasswordError(password))
        }

        const nameValue: Name = nameOrEror.value
        const emailValue: Email = emailOrError.value
        const passwordValue: Password = passwordOrError.value

        return right(new User(nameValue, emailValue, passwordValue))
    }
}

export { User }
