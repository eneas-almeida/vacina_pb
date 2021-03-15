import { Either, left, right } from '@shared/Either'
import { PasswordError } from '../errors/PasswordError'

class Password {
    private readonly _password: string

    private constructor(password: string) {
        this._password = password
        Object.freeze(this)
    }

    static create(password: string): Either<PasswordError, Password> {
        if (!this.validate(password)) {
            return left(new PasswordError(password))
        }

        return right(new Password(password))
    }

    get value(): string {
        return this._password
    }

    static validate(password: string): boolean {
        const tester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

        if (!password) {
            return false
        }

        if (!tester.test(password)) {
            return false
        }

        return true
    }
}

export { Password }
