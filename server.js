let express = require("express")
let cors = require("cors")


server = express()
server.use(express.json())
server.use(express.static("./static")) 

server.get("/messages", ( req, res ) => {
    res.send(poraki)
})
let poraki = [  ]
     let poraka1 = {
    sender: "Gorast",
    message: "Zdravo"
    }
     let poraka2 = {
    sender: "Leon",
    message: "So prajs?"
    }
poraki.push(poraka1)
poraki.push(poraka2)



server.listen(8080)