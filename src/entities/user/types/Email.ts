import { Either, left, right } from '../../../shared/Either'
import { EmailError } from '../errors/EmailError'

class Email {
    private readonly _email: string

    private constructor(email: string) {
        this._email = email
        Object.freeze(this)
    }

    static create(email: string): Either<EmailError, Email> {
        if (!this.validate(email)) {
            return left(new EmailError(email))
        }

        return right(new Email(email))
    }

    get value(): string {
        return this._email
    }

    static validate(email: string): boolean {
        const tester = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

        if (!email) {
            return false
        }

        if (email.length > 256) {
            return false
        }

        if (!tester.test(email)) {
            return false
        }

        const [account, address] = email.split('@')

        if (account.length > 64) {
            return false
        }

        const domainParts = address.split('.')

        if (
            domainParts.some(function (part) {
                return part.length > 63
            })
        ) {
            return false
        }

        return true
    }
}

export { Email }
