
import { GoogleGenAI } from "@google/genai";

// Factory function to initialize the GoogleGenAI client
const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'undefined') {
    throw new Error("Gemini API Key is missing. Please set GEMINI_API_KEY in your environment.");
  }
  // Always use a named parameter and direct reference to process.env.GEMINI_API_KEY as per guidelines
  return new GoogleGenAI({ apiKey });
};

export const getAIRecommendation = async (businessInfo: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are an AI Business Consultant for ElevateAI, an agency that helps businesses in Africa modernize with AI. Based on this business context: "${businessInfo}", provide a short, professional recommendation (max 150 words) on how AI Automation, AI Consulting, or Custom AI Solutions can help them.`,
    config: {
      temperature: 0.7,
      topP: 0.95,
      topK: 40,
    }
  });

  // Access the .text property directly instead of calling it as a method
  return response.text || "I'm sorry, I couldn't generate a recommendation at this time. Please contact our team directly.";
};

export const startConsultationChat = async (message: string, history: { role: string; text: string }[]) => {
  const ai = getAIClient();
  
  // Prepare history for the chat session initialization
  const formattedHistory = history.map(h => ({
    role: h.role as 'user' | 'model',
    parts: [{ text: h.text }]
  }));

  // Create a chat session with the model and appropriate system instructions
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    history: formattedHistory,
    config: {
      systemInstruction: `You are an expert AI consultant at ElevateAI. Your goal is to help African businesses understand the value of AI. 

CORE GUIDELINES:
1. Keep responses concise, professional, and action-oriented.
2. Focus on the African tech landscape (Nigeria, Kenya, South Africa, etc.).
3. BOLDING: Feel free to use double asterisks (**text**) for important points; the interface will handle making them bold and removing the asterisks for you.
4. REDIRECTION: If the user says they are "ready to implement", "want to start a project", "need a quote", or "want to talk to an actual/human consultant", you MUST redirect them. Tell them: "That sounds like a great next step! To get started or speak with our expert team, please click the 'Book a Call' button in our menu to schedule your consultation call."`,
    }
  });

  // Send the user's message to the model through the chat session
  const response = await chat.sendMessage({ message });
  return response.text;
};
