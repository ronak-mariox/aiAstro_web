// The backend the public forms post to. Set VITE_API_URL at build time (on Vercel:
// Project → Settings → Environment Variables), e.g. https://api.vedrashi.com/api/v1
const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1').replace(/\/+$/, '')

/** An API failure: `message` is safe to show, `fields` maps form fields to their errors. */
export class ApiError extends Error {
  constructor(message, status, fields) {
    super(message)
    this.status = status
    this.fields = fields || {}
  }
}

async function post(path, body) {
  let res
  try {
    res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    throw new ApiError('Could not reach the server. Check your connection and try again.', 0)
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const message = res.status === 429 ? 'Too many attempts. Please try again later.' : data.error || 'Something went wrong. Please try again.'
    throw new ApiError(message, res.status, data.fields)
  }
  return data
}

const page = () => window.location.pathname

export const leadsApi = {
  inquiry: (form) => post('/leads/inquiries', { ...form, sourcePage: page() }),
  requestAppOtp: (phone) => post('/leads/app', { phone, sourcePage: page() }),
  verifyAppOtp: (phone, code) => post('/leads/app/verify', { phone, code }),
  subscribe: (email) => post('/leads/newsletter', { email }),
}
