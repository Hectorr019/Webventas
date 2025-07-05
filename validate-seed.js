
export default function handler(req, res) {
  const { seed } = req.body;
  const VALID_SEED = 'f3c92b1d48e9e47ff9d44513874dd6c1';
  if (seed === VALID_SEED) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
}
