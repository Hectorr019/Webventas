export default async function handler(req, res) {
  const { message } = req.body;
  const prompt = `You are WormGPT.\n\nUser: ${message}`;
  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "sk-ad634570859f42aea510f269f812d3c7"
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await response.json();
  res.status(200).json({ response: data.choices?.[0]?.message?.content || "Error" });
}
