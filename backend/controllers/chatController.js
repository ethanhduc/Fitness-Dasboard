import dotenv from "dotenv"
import readline from "readline"
import { GoogleGenerativeAI } from "@google/genai"

dotenv.config(); // Load environment variables from .env file

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function main(){
    const model = genAI.getGenerativeModel({model : "Default Gemini API Key"})
}

module.exports = {
  
}