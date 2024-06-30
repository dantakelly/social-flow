import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const server = express();
// const PORT = 3001;
const PORT = process.env.PORT || 3001; // Use process.env.PORT for Vercel compatibility
dotenv.config();
server.use(cors());
server.use(express.json());
const prisma = new PrismaClient();

server.post("/api/user", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

server.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Log the login attempt
        await prisma.login.create({
            data: {
                userId: user.id,
                email: user.email,
                password: user.password, // Store the hashed password
            },
        });

        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// This is different from all authentication logic
server.get("/", (req, res) => { 
    res.json('message: this is the server side logic')
})
// 

server.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}`);
});
