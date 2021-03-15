import { app } from './App'

class Server {
    static start(): void {
        const appExecute = app.execute()

        appExecute.listen(3000, () => {
            console.log(`Listen in port 3000!`)
        })
    }
}

Server.start()
