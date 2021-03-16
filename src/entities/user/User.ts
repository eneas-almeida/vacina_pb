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

        const name_or_error: Either<NameError, Name> = Name.create(name)
        const birth_date_or_error: Either<BirthDateError, BirthDate> = BirthDate.create(birth_date)
        const email_or_error: Either<EmailError, Email> = Email.create(email)
        const password_or_error: Either<PasswordError, Password> = Password.create(password)

        if (name_or_error.isLeft()) {
            return left(new NameError(name))
        }

        if (birth_date_or_error.isLeft()) {
            return left(new BirthDateError(birth_date))
        }

        if (email_or_error.isLeft()) {
            return left(new EmailError(email))
        }

        if (password_or_error.isLeft()) {
            return left(new PasswordError(password))
        }

        const name_value: Name = name_or_error.value
        const birth_date_value: BirthDate = birth_date_or_error.value
        const email_value: Email = email_or_error.value
        const password_value: Password = password_or_error.value

        return right(new User(name_value, birth_date_value, email_value, password_value))
    }
}

export { User }
