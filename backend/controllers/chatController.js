const { GoogleGenAI } = require("@google/genai");
const Workout = require("../models/workoutModel");

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const sendMessage = async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Please provide a message' });
    }

    const transformedHistory = history.map(msg => ({ // Transform frontend format to Gemini format
      role: msg.sender === 'user' ? 'user' : 'model', // if sender is 'user', role is 'user', else 'model'
      parts: [{ text: msg.text }] // Gemini expects an array of parts, each with a text property
    }));

    const workouts = await Workout.find({});
    
    console.log('Workouts fetched:', workouts); // Debug: check if workouts are there

    const systemInstruction = `
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

        User's recent workouts: ${JSON.stringify(workouts)}`;
    
    console.log('System instruction:', systemInstruction); // Debug: check what's being sent

    const chat = await ai.chats.create({
      model: "gemini-2.5-flash",
      systemInstruction: systemInstruction,
      history: transformedHistory 
    });

    const response = await chat.sendMessage({ content: message });
    res.status(200).json({ response: response.text });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  sendMessage
}