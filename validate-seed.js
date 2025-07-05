
export default function handler(req, res) {
  const { seed } = req.query;
  const validSeed = "my-128-bit-secure-seed";
  res.status(200).json({ valid: seed === validSeed });
}
