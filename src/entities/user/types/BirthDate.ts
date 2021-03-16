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
        const tester = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/gm

        if (!bith_date) {
            return false
        }

        if (bith_date.length !== 10) {
            return false
        }

        const [day, month, year] = bith_date.split('/')

        if (day.length > 2) {
            return false
        }

        if (month.length > 2) {
            return false
        }

        if (year.length > 4) {
            return false
        }

        if (!tester.test(bith_date)) {
            return false
        }

        return true
    }
}

export { BirthDate }
