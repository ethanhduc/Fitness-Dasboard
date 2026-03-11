import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/genai"

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);