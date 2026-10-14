import { useState } from 'react'
import SectionHead from './SectionHead'
import { leadsApi } from '../../../api'
import delhi from '../../../assets/home/contact-delhi.jpg'
import icMail from '../../../assets/home/ct-mail.svg'
import icPhone from '../../../assets/home/ct-phone.svg'
import icPin from '../../../assets/home/ct-pin.svg'
import icPinSm from '../../../assets/home/ct-pin-sm.svg'
import icSelect from '../../../assets/home/ct-select.svg'
import icSend from '../../../assets/home/ct-send.svg'

const INFO = [
  { icon: icMail, label: 'Email Us', value: 'support@vedrashi.com', href: 'mailto:support@vedrashi.com' },
  { icon: icPhone, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 9 AM – 9 PM', href: 'tel:+919876543210' },
  { icon: icPin, label: 'Office', value: '42 Spiritual Hub, Hauz Khas', sub: 'New Delhi, India 110016' },
]

const SERVICES = ['Talk To Astrologer', 'E-Puja', 'Book Pandit', 'Spiritual Products', 'Other']

const EMPTY = { name: '', phone: '', email: '', service: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setError('')
    setSending(true)
    try {
      await leadsApi.inquiry(form)
      setSubmitted(true)
    } catch (err) {
      setError(Object.values(err.fields || {})[0] || err.message)
    } finally {
      setSending(false)
    }
  }

  const reset = () => {
    setForm(EMPTY)
    setError('')
    setSubmitted(false)
  }

  return (
    <section className="hm-section hm-contact">
      <div className="container">
        <SectionHead pill="Get In Touch" lead="Contact" grad="Us" />
        <div className="hm-contact__grid">
          <div className="hm-contact__side">
            <div className="hm-contact__info">
              <h3>Reach Us Directly</h3>
              <ul>
                {INFO.map((it) => (
                  <li key={it.label}>
                    <span className="hm-contact__icon">
                      <img src={it.icon} alt="" />
                    </span>
                    <span className="hm-contact__txt">
                      <small>{it.label}</small>
                      {it.href ? <a href={it.href}>{it.value}</a> : <strong>{it.value}</strong>}
                      {it.sub && <em>{it.sub}</em>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hm-contact__map">
              <img src={delhi} alt="New Delhi, India" />
              <span className="hm-contact__map-shade" />
              <span className="hm-contact__pin">
                <span className="hm-contact__pin-dot">
                  <img src={icPinSm} alt="" />
                </span>
                <span className="hm-contact__pin-label">New Delhi, India</span>
              </span>
            </div>
          </div>

          <div className="hm-form">
            {submitted ? (
              <div className="hm-form__done" role="status">
                <span className="hm-form__done-icon">✓</span>
                <h3>Thank you, {form.name.split(' ')[0] || 'friend'}!</h3>
                <p>Your inquiry has been received. Our team will reach out to you within 24 hours.</p>
                <button type="button" className="hm-btn-line" onClick={reset}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h3>Send us a message</h3>
                <div className="hm-form__row">
                  <label className="hm-field">
                    <span>Full Name *</span>
                    <input type="text" required placeholder="Priya Sharma" value={form.name} onChange={set('name')} />
                  </label>
                  <label className="hm-field">
                    <span>Phone *</span>
                    <input type="tel" required placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
                  </label>
                </div>
                <label className="hm-field">
                  <span>Email *</span>
                  <input type="email" required placeholder="priya@example.com" value={form.email} onChange={set('email')} />
                </label>
                <label className="hm-field">
                  <span>Service Interested In</span>
                  <span className="hm-field__select">
                    <select value={form.service} onChange={set('service')}>
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <img src={icSelect} alt="" />
                  </span>
                </label>
                <label className="hm-field">
                  <span>Message</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your query or specific area of life you'd like guidance on..."
                    value={form.message}
                    onChange={set('message')}
                  />
                </label>
                {error && <p className="hm-form__error" role="alert">{error}</p>}
                <button type="submit" className="hm-form__submit" disabled={sending}>
                  <img src={icSend} alt="" />
                  {sending ? 'Sending…' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
