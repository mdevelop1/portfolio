export async function submitContact(data: { name: string; email: string; message: string }) {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    return !!json.ok
  } catch (e) {
    return false
  }
}
