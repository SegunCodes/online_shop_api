const express = require("express")
const cors = require("cors")
const proxy = require("express-http-proxy")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/customer", proxy('http://localhost:8000'))
app.use("/shopping", proxy('http://localhost:8003'))
app.use("/", proxy('http://localhost:8002')) //products


app.listen(5000, () => {
    console.log("Gateway is listening on port 5000")
})