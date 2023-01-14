import express from 'express'

export default function makeApp() {
    const app = express()

    app.use(express.static('dist'))

    app.use(express.json())

    app.get("/test", (req, res) => {
        res.status(200).send({ message: "It's working" })
        return
    })
    return app
}