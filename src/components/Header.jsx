import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useDownloadModal } from './DownloadModalContext'
import logo from '../assets/layout/logo.png'
import downloadIcon from '../assets/layout/download.svg'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/consult-astrologer', label: 'Consult Astrologer' },
  { to: '/book-pandit', label: 'Book Pandit' },
  { to: '/e-puja', label: 'E-Puja' },
  { to: '/spiritual-store', label: 'Spiritual Store' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { openDownload } = useDownloadModal()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="Vedrashi home">
          <img src={logo} alt="Vedrashi" />
        </Link>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <button type="button" className="header__cta header__cta--mobile" onClick={openDownload}>
            <img src={downloadIcon} alt="" width="16" height="16" />
            Download App
          </button>
        </nav>

        <div className="header__actions">
          <button type="button" className="header__cta" onClick={openDownload}>
            <img src={downloadIcon} alt="" width="16" height="16" />
            Download App
          </button>
          <button
            type="button"
            className={`header__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
