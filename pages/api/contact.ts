import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' })
  try {
    const { name, email, message } = req.body || {}
    if (!name || !email || !message) return res.status(400).json({ ok: false, error: 'Missing fields' })

    // Send to Discord webhook
    const webhookUrl = 'https://discord.com/api/webhooks/1439360643659468842/Zq8t0MXSJEov5zZSSWRDIPBpUKWlWJ21ID0sH6xto5SYZ0ymmyPl2sYcCs50gyS9dK4o'
    const content = `📬 Nowa wiadomość kontaktowa:\n\n**Imię:** ${name}\n**Email:** ${email}\n**Wiadomość:**\n${message}`
    const resp = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })

    if (!resp.ok) {
      const text = await resp.text().catch(() => '')
      return res.status(502).json({ ok: false, error: text || 'Webhook error' })
    }

    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || 'Server error' })
  }
}
