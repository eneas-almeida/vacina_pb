class BirthDateError extends Error {
    public readonly birth_date: string = 'BirthDateError'

    constructor(bith_date: string) {
        super(`A data de nascimento "${bith_date}" é inválida.`)
    }
}

export { BirthDateError }
