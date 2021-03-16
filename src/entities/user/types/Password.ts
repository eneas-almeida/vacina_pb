import { Either, left, right } from '@shared/Either'
import { PasswordError } from '../errors/PasswordError'

class Password {
    private readonly password: string

    private constructor(password: string) {
        this.password = password
        Object.freeze(this)
    }

    static create(password: string): Either<PasswordError, Password> {
        if (!this.validate(password)) {
            return left(new PasswordError(password))
        }

        return right(new Password(password))
    }

    get value(): string {
        return this.password
    }

    static validate(password: string): boolean {
        const tester = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/

        if (!password) {
            return false
        }

        if (!password) {
            return false
        }

        if (password.length < 5) {
            return false
        }

        if (password.length > 10) {
            return false
        }

        if (!tester.test(password)) {
            return false
        }

        return true
    }
}

export { Password }
