import { Either, left, right } from '@shared/Either'
import { NameError } from '../errors/NameError'

class Name {
    private readonly name: string

    private constructor(name: string) {
        this.name = name
        Object.freeze(this)
    }

    static create(name: string): Either<NameError, Name> {
        if (!this.validate(name)) {
            return left(new NameError(name))
        }

        return right(new Name(name))
    }

    get value(): string {
        return this.name
    }

    static validate(name: string): boolean {
        if (!name) {
            return false
        }

        if (name.length < 6) {
            return false
        }

        if (name.length > 24) {
            return false
        }

        const parts = name.split(' ')

        if (parts.length < 2) {
            return false
        }

        return true
    }
}

export { Name }
