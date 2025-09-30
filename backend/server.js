import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
  origin: 'https://gks-hub.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());


app.use("/api/users", authRoutes);
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});