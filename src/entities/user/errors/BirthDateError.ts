class BirthDateError extends Error {
    public readonly data_nascimento: string = 'DataNascimentoError'

    constructor(bith_date: string) {
        super(`A data de nascimento "${bith_date}" é inválido.`)
    }
}

export { BirthDateError }
