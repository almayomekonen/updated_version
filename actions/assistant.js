"use server";

import { getUserMemorySession, jobAssistant } from "@/lib/agent";
import { getSessionUser } from "@/lib/auth";
import { run } from "@openai/agents";

const MAX_MESSAGE_LENGTH = 1000;

export async function askAssistantAction(prevState, formData) {
  const user = await getSessionUser();
  if (!user) {
    return { answer: "", error: "כדי להשתמש בסוכן צריך קודם להתחבר." };
  }

  const message = String(formData.get("message")).trim();

  if (!message) {
    return { answer: "", error: "נא לכתוב הודעה." };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      answer: "",
      error: `ההודעה ארוכה מדי עד ${MAX_MESSAGE_LENGTH} תווים`,
    };
  }

  try {
    const memorySession = await getUserMemorySession(user.id);
    const result = await run(jobAssistant, message, { memorySession });
    return { answer: result.finalOutput, error: "" };
  } catch (error) {
    console.error(error);
    return {
      answer: "",
      error: "הסוכן לא הצליח לענות כרגע. נסה בעוד רגע.",
    };
  }
}
