import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

import heroStars from '../../assets/contact/hero-stars.jpg'
import cardPhone from '../../assets/contact/card-phone.svg'
import cardMail from '../../assets/contact/card-mail.svg'
import cardWhatsapp from '../../assets/contact/card-whatsapp.svg'
import reachMail from '../../assets/contact/reach-mail.svg'
import reachPhone from '../../assets/contact/reach-phone.svg'
import reachPin from '../../assets/contact/reach-pin.svg'
import reachClock from '../../assets/contact/reach-clock.svg'
import mapPhoto from '../../assets/contact/map-photo.jpg'
import mapPin from '../../assets/contact/map-pin.svg'
import chevron from '../../assets/contact/chevron.svg'
import sendIcon from '../../assets/contact/send.svg'
import successCheck from '../../assets/contact/success-check.svg'

const PHONE = '+91 98765 43210'
const PHONE_RAW = '+919876543210'
const EMAIL = 'support@vedrashi.com'

const contactCards = [
  { key: 'call', label: 'Call Us', value: PHONE, note: 'Mon–Sat, 9 AM – 9 PM', icon: cardPhone, tone: 'red', href: `tel:${PHONE_RAW}` },
  { key: 'email', label: 'Email Us', value: EMAIL, note: 'Reply within 24 hours', icon: cardMail, tone: 'orange', href: `mailto:${EMAIL}` },
  { key: 'wa', label: 'WhatsApp', value: PHONE, note: 'Quick chat support', icon: cardWhatsapp, tone: 'green', href: 'https://wa.me/919876543210', external: true },
]

const reachItems = [
  { label: 'Email Us', value: EMAIL, icon: reachMail, href: `mailto:${EMAIL}` },
  { label: 'Call Us', value: PHONE, note: 'Mon–Sat, 9 AM – 9 PM', icon: reachPhone, href: `tel:${PHONE_RAW}` },
  { label: 'Office', value: '42 Spiritual Hub, Hauz Khas', note: 'New Delhi, India 110016', icon: reachPin },
  { label: 'Working Hours', value: 'Mon – Sat: 9 AM – 9 PM', note: 'Sunday: 10 AM – 6 PM', icon: reachClock },
]

const socials = [
  { label: 'Facebook', glyph: '📘', href: 'https://facebook.com' },
  { label: 'Instagram', glyph: '📸', href: 'https://instagram.com' },
  { label: 'YouTube', glyph: '▶️', href: 'https://youtube.com' },
  { label: 'X', glyph: '𝕏', href: 'https://x.com' },
  { label: 'WhatsApp', glyph: '💬', href: 'https://wa.me/919876543210' },
]

const services = ['Talk to Astrologer', 'Book Pandit', 'E-Puja', 'Spiritual Products', 'Kundli & Horoscope', 'Other']

const faqs = [
  {
    q: 'How quickly will I get a response?',
    a: 'Our support team replies to all form submissions and emails within 24 hours. For urgent queries, call or WhatsApp us between 9 AM and 9 PM, Monday to Saturday.',
  },
  {
    q: 'Can I book a consultation directly?',
    a: 'Yes. You can browse verified astrologers on our Consult Astrologer page and start a chat or call instantly through the Vedrashi app — no need to contact support first.',
  },
  {
    q: 'Is my personal information safe?',
    a: 'Absolutely. Your details and consultations are kept strictly confidential, stored securely and never shared with third parties. See our Privacy Policy for details.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes. If a service is not delivered as promised, you can request a refund within 7 days. Approved refunds are processed to the original payment method in 5–7 working days.',
  },
]

const emptyForm = { name: '', phone: '', email: '', service: '', message: '' }

function validate(f) {
  const e = {}
  if (!f.name.trim()) e.name = 'Please enter your full name.'
  if (!f.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (f.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number.'
  if (!f.email.trim()) e.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (!f.message.trim()) e.message = 'Please enter your message.'
  return e
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSent(true)
  }

  const reset = () => {
    setForm(emptyForm)
    setErrors({})
    setSent(false)
  }

  const fieldClass = (name) => `ct-input${errors[name] ? ' is-error' : ''}`

  return (
    <div className="ct">
      {/* Hero */}
      <section className="ct-hero">
        <img className="ct-hero__bg" src={heroStars} alt="" />
        <div className="ct-hero__inner">
          <span className="ct-hero__pill">✦ Get In Touch</span>
          <h1 className="ct-hero__title">
            Contact <span className="text-grad">Us</span>
          </h1>
          <p className="ct-hero__sub">We&apos;re here to guide you. Reach out anytime.</p>
        </div>
      </section>

      <div className="container ct-main">
        {/* Contact cards */}
        <div className="ct-cards">
          {contactCards.map((c) => (
            <a
              key={c.key}
              className="ct-card"
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className={`ct-card__icon ct-card__icon--${c.tone}`}>
                <img src={c.icon} alt="" />
              </span>
              <span className="ct-card__text">
                <span className="ct-card__label">{c.label}</span>
                <span className="ct-card__value">{c.value}</span>
                <span className="ct-card__note">{c.note}</span>
              </span>
            </a>
          ))}
        </div>

        {/* Two columns */}
        <div className="ct-grid">
          <aside className="ct-left">
            <div className="ct-reach">
              <h3 className="ct-reach__title">Reach Us Directly</h3>
              <ul className="ct-reach__list">
                {reachItems.map((r) => {
                  const body = (
                    <>
                      <span className="ct-reach__icon">
                        <img src={r.icon} alt="" />
                      </span>
                      <span className="ct-reach__text">
                        <span className="ct-reach__label">{r.label}</span>
                        <span className="ct-reach__value">{r.value}</span>
                        {r.note && <span className="ct-reach__note">{r.note}</span>}
                      </span>
                    </>
                  )
                  return (
                    <li key={r.label}>
                      {r.href ? (
                        <a className="ct-reach__item" href={r.href}>{body}</a>
                      ) : (
                        <div className="ct-reach__item">{body}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            <a
              className="ct-map"
              href="https://maps.google.com/?q=Hauz+Khas,+New+Delhi+110016"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open office location in Google Maps"
            >
              <img className="ct-map__img" src={mapPhoto} alt="New Delhi, India" />
              <span className="ct-map__shade" />
              <span className="ct-map__center">
                <span className="ct-map__pin">
                  <img src={mapPin} alt="" />
                </span>
                <span className="ct-map__city">New Delhi, India</span>
              </span>
              <span className="ct-map__addr">42 Spiritual Hub, Hauz Khas</span>
            </a>

            <div className="ct-follow">
              <p className="ct-follow__title">Follow Us</p>
              <div className="ct-follow__row">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    className="ct-follow__btn"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    {s.glyph}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="ct-right">
            {sent ? (
              <div className="ct-success" role="status">
                <span className="ct-success__icon">
                  <img src={successCheck} alt="" />
                </span>
                <h3 className="ct-success__title">Message Sent! 🙏</h3>
                <p className="ct-success__sub">Thank you for reaching out.</p>
                <p className="ct-success__note">
                  Our team will get back to you within <strong>24 hours</strong>. For urgent queries, please call us directly.
                </p>
                <div className="ct-success__actions">
                  <button type="button" className="ct-btn-outline" onClick={reset}>
                    Send Another
                  </button>
                  <Link to="/consult-astrologer" className="ct-btn-grad">
                    Talk to Expert
                  </Link>
                </div>
              </div>
            ) : (
              <form className="ct-form" onSubmit={onSubmit} noValidate>
                <h3 className="ct-form__title">Send Us a Message</h3>
                <p className="ct-form__sub">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

                <div className="ct-form__row">
                  <div className="ct-field">
                    <label htmlFor="ct-name">Full Name *</label>
                    <input id="ct-name" name="name" type="text" className={fieldClass('name')} placeholder="Priya Sharma" value={form.name} onChange={onChange} autoComplete="name" />
                    {errors.name && <span className="ct-error">{errors.name}</span>}
                  </div>
                  <div className="ct-field">
                    <label htmlFor="ct-phone">Phone *</label>
                    <input id="ct-phone" name="phone" type="tel" className={fieldClass('phone')} placeholder="+91 98765 43210" value={form.phone} onChange={onChange} autoComplete="tel" />
                    {errors.phone && <span className="ct-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-email">Email *</label>
                  <input id="ct-email" name="email" type="email" className={fieldClass('email')} placeholder="priya@example.com" value={form.email} onChange={onChange} autoComplete="email" />
                  {errors.email && <span className="ct-error">{errors.email}</span>}
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-service">Service Interested In</label>
                  <div className="ct-select">
                    <select id="ct-service" name="service" className="ct-input" value={form.service} onChange={onChange}>
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <img className="ct-select__chev" src={chevron} alt="" />
                  </div>
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-message">Message *</label>
                  <textarea id="ct-message" name="message" rows={5} className={`${fieldClass('message')} ct-textarea`} placeholder="Tell us about your query or specific area of life you'd like guidance on..." value={form.message} onChange={onChange} />
                  {errors.message && <span className="ct-error">{errors.message}</span>}
                </div>

                <button type="submit" className="ct-submit">
                  <img src={sendIcon} alt="" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ */}
        <section className="ct-faq">
          <h2 className="ct-faq__title">Frequently Asked Questions</h2>
          <div className="ct-faq__list">
            {faqs.map((f, i) => {
              const open = openFaq === i
              return (
                <div key={f.q} className={`ct-faq__item${open ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="ct-faq__q"
                    aria-expanded={open}
                    aria-controls={`ct-faq-${i}`}
                    onClick={() => setOpenFaq(open ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="ct-faq__sign" aria-hidden="true">{open ? '−' : '+'}</span>
                  </button>
                  {open && (
                    <p id={`ct-faq-${i}`} className="ct-faq__a">{f.a}</p>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
