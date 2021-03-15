import express, { Express } from 'express'

class App {
    execute(): Express {
        const app = express()

        return app
    }
}

const app = new App()

export { app }
