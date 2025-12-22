import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any) {
  if (req.method === "GET") return res.status(200).json({ ok: true, route: "/api/architect" });
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Missing GEMINI_API_KEY" });

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const problem = body?.problem;
    if (!problem || typeof problem !== "string") return res.status(400).json({ error: "Missing problem" });

    const systemInstruction = `You are the Neural Strategic Diagnostic Engine.
Your task is to identify high-level structural and behavioral constraints in digital products or business workflows.

Focus on:
- Cognitive load and decision friction.
- Alignment between human intent and system flow.
- Trust architecture and conversion barriers.

Output must use this exact four-section structure with these specific headers:
01 / Strategic Diagnosis: [Detailed analysis of core bottlenecks]
02 / Directional Solution: [High-level architectural recommendation]
03 / Execution Considerations: [Key hurdles or technical priorities]
04 / Potential Impact: [Expected outcome of implementation]

Maintain an objective, technical, and executive tone. Do not use generic marketing fluff. Do not list specific software tools unless requested.`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction,
    });

    const result = await model.generateContent(problem);
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (e: any) {
    console.error("API architect error:", e);
    return res.status(500).json({ error: "Architect request failed", details: e?.message || String(e) });
  }
}

