const express = require('express')
const { PrismaClient } = require("@prisma/client");

const app = express()

const prisma = new PrismaClient();

require('dotenv').config()
const PORT = process.env.PORT || 8080

console.log(`Node.js ${process.version}`)

app.use(express.json())

app.get('/', async (req, res) => {
    const notes = await prisma.notes.findMany(); 
    res.json(notes);
})


app.listen(PORT, () => {
    try {
        console.log(`Running on http://localhost:${PORT}`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})