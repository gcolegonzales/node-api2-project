const express = require("express")
const postRouter = require('./routers/postRouter')
const commentRouter = require('./routers/commentRouter')
const app = express()
app.use(express.json())
app.use('/api/posts', postRouter)
app.use('/api/posts/:id/comments', commentRouter)

const host = process.env.HOST || "0.0.0.0"
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.json({ 
        message: "Welcome to my API!",
        instructions: "/api/posts will point to posts!"
    })
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})