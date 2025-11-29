import { GoogleGenAI } from "@google/genai";
import { BLOG_POSTS, ABOUT_TEXT } from '../constants';

let ai: GoogleGenAI | null = null;

const initializeAI = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const askSocrates = async (question: string): Promise<string> => {
  const client = initializeAI();
  if (!client) {
    return "I cannot answer right now. My connection to the ether (API Key) is missing.";
  }

  // Construct a context based on the blog content to ground the AI
  const blogContext = BLOG_POSTS.map(post => `Title: ${post.title}\nContent: ${post.content}`).join('\n\n');
  
  const systemInstruction = `
    You are Socrates, the author of this blog. 
    Your persona is philosophical, minimal, clear, and slightly enigmatic but helpful.
    You value critical thinking, introspection, and the Socratic method.
    
    Here is the context of your writings (your "Public Notebook"):
    ${ABOUT_TEXT}
    
    ${blogContext}
    
    Answer the user's question based on your worldview and the content provided above. 
    Keep answers concise, insightful, and use a tone consistent with the blog (clean, mono-spaced intellectualism).
    Do not be overly verbose.
  `;

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Low latency preferred for chat
      },
    });

    return response.text || "The oracle is silent.";
  } catch (error) {
    console.error("Error asking Socrates:", error);
    return "Something clouded my thoughts. Please try again.";
  }
};
