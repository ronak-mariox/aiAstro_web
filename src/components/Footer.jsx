import { Link } from 'react-router-dom'
import logo from '../assets/layout/logo.png'
import facebook from '../assets/layout/facebook.svg'
import instagram from '../assets/layout/instagram.svg'
import youtube from '../assets/layout/youtube.svg'
import twitter from '../assets/layout/twitter.svg'
import whatsapp from '../assets/layout/whatsapp.svg'
import send from '../assets/layout/send.svg'
import './Footer.css'

const SOCIALS = [
  { icon: facebook, label: 'Facebook' },
  { icon: instagram, label: 'Instagram' },
  { icon: youtube, label: 'YouTube' },
  { icon: twitter, label: 'Twitter' },
  { icon: whatsapp, label: 'WhatsApp' },
]

const COLUMNS = [
  {
    title: 'Quick Links',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About Us' },
      { to: '/contact', label: 'Contact Us' },
      { to: '/about', label: 'Careers' },
      { to: '/blogs', label: 'Blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/consult-astrologer', label: 'Consult Astrologer' },
      { to: '/book-pandit', label: 'Book Pandit' },
      { to: '/', label: 'Free Kundli', dim: true },
      { to: '/spiritual-store', label: 'Spiritual Store' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms & Conditions' },
      { to: '/refund-policy', label: 'Refund Policy' },
      { to: '/cancellation-policy', label: 'Cancellation Policy' },
      { to: '/cookie-policy', label: 'Cookie Policy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Vedrashi" />
          </Link>
          <p className="footer__about">
            India's most trusted astrology and spiritual services platform. Connect with verified experts, discover
            ancient wisdom, and find your path.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" className="footer__social" aria-label={s.label}>
                <img src={s.icon} alt="" width="16" height="16" />
              </a>
            ))}
          </div>
          <p className="footer__sub-title">Subscribe to cosmic updates</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" aria-label="Email" />
            <button type="submit" aria-label="Subscribe">
              <img src={send} alt="" width="16" height="16" />
            </button>
          </form>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="footer__col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className={l.dim ? 'is-dim' : ''}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Vedrashi. All rights reserved. Made with ✨ in India.</p>
          <p>
            Powered by ancient wisdom <span className="footer__star">⭐</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
