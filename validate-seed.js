
export default function handler(req, res) {
  const { seed } = req.query;
  const validSeed = "Breaking-Json-Valid-Head-Jon-Pls-Senior";
  res.status(200).json({ valid: seed === validSeed });
}
