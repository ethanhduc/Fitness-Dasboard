const { GoogleGenAI } = require("@google/genai");
const Workout = require("../models/workoutModel");

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const sendMessage = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Please provide a message' });
    }

    const safeHistory = Array.isArray(history) ? history : [];
    
    const workouts = await Workout.find({});

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      systemInstruction: `
        You are an expert personal fitness coach assistant built into a workout tracking app.
        The user's recent workouts are provided below. Use this data to give personalized, 
        specific advice. Keep responses concise and encouraging.

        When analyzing workouts, consider:
        - Volume and frequency trends
        - Signs of overtraining or undertraining
        - Muscle group balance
        - Progressive overload opportunities

        Always respond in a conversational, motivating tone. If the user asks something 
        unrelated to fitness, politely redirect them back to their training.

        User's recent workouts: ${JSON.stringify(workouts)}`,
      history: safeHistory
    });

    const response = await chat.sendMessage({ message });
    res.status(200).json({ response: response.text });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  sendMessage
}