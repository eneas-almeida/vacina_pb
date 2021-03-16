interface IUser {
    getName(): string

    getBirthDate(): Date

    getEmail(): string

    getPassword(): string

    getIsRiskGroup(): boolean
}

export { IUser }
