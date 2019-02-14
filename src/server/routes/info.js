export default function (req, res) {
  res.json({ name: 'hartcode-api', commit: process.env.COMMIT })
}
