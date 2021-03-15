import { Either, left, right } from '../../../shared/Either'
import { BirthDateError } from '../errors/BirthDateError'

class BirthDate {
    private readonly birth_date: string

    private constructor(bith_date: string) {
        this.birth_date = bith_date
        Object.freeze(this)
    }

    static create(bith_date: string): Either<BirthDateError, BirthDate> {
        if (!this.validate(bith_date)) {
            return left(new BirthDateError(bith_date))
        }

        return right(new BirthDate(bith_date))
    }

    get value(): string {
        return this.birth_date
    }

    static validate(bith_date: string): boolean {
        return true
    }
}

export { BirthDate }
