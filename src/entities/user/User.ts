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
import { IsRiskGroup } from './types/IsRiskGroup'
import { IsRiskGroupError } from './errors/IsRiskGroupError'

class User implements IUser {
    private readonly name: Name
    private readonly birth_date: BirthDate
    private readonly email: Email
    private readonly password: Password
    private readonly is_risk_group: IsRiskGroup

    private constructor(
        name: Name,
        birth_date: BirthDate,
        email: Email,
        password: Password,
        is_risk_group: IsRiskGroup
    ) {
        this.name = name
        this.birth_date = birth_date
        this.email = email
        this.password = password
        this.is_risk_group = is_risk_group

        Object.freeze(this)
    }

    getName(): string {
        return this.name.value
    }

    getBirthDate(): Date {
        return this.birth_date.value
    }

    getEmail(): string {
        return this.email.value
    }

    getPassword(): string {
        return this.password.value
    }

    getIsRiskGroup(): boolean {
        return this.is_risk_group.value
    }

    static create(
        data: IUserDTO
    ): Either<NameError | BirthDateError | EmailError | PasswordError, User> {
        const { name, birth_date, email, password, is_risk_group } = data

        const name_or_error: Either<NameError, Name> = Name.create(name)
        const birth_date_or_error: Either<BirthDateError, BirthDate> = BirthDate.create(birth_date)
        const email_or_error: Either<EmailError, Email> = Email.create(email)
        const password_or_error: Either<PasswordError, Password> = Password.create(password)
        const is_risk_or_error: Either<IsRiskGroupError, IsRiskGroup> = IsRiskGroup.create(is_risk_group)

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

        if (is_risk_or_error.isLeft()) {
            return left(new IsRiskGroupError(is_risk_group))
        }

        const name_value: Name = name_or_error.value
        const birth_date_value: BirthDate = birth_date_or_error.value
        const email_value: Email = email_or_error.value
        const password_value: Password = password_or_error.value
        const is_risk_value: IsRiskGroup = is_risk_or_error.value

        return right(new User(name_value, birth_date_value, email_value, password_value, is_risk_value))
    }
}

export { User }
