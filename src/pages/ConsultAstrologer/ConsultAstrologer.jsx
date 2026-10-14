import { useMemo, useState } from 'react'
import { useDownloadModal } from '../../components/DownloadModalContext'
import './ConsultAstrologer.css'

import heroBg from '../../assets/consult/hero-bg.png'
import iconSearch from '../../assets/consult/icon-search.svg'
import iconChevron from '../../assets/consult/icon-chevron.svg'
import iconPhone from '../../assets/consult/icon-phone.svg'
import star from '../../assets/consult/star.svg'
import starEmpty from '../../assets/consult/star-empty.svg'
import rajesh from '../../assets/consult/rajesh.png'
import priya from '../../assets/consult/priya.png'
import vikram from '../../assets/consult/vikram.png'
import anand from '../../assets/consult/anand.png'
import kavita from '../../assets/consult/kavita.png'
import surya from '../../assets/consult/surya.png'

const CATEGORIES = ['All', 'Vedic', 'Tarot', 'Numerology', 'Vastu', 'Palmistry', 'Jyotish', 'Career', 'Love', 'Health']

const LANGUAGES = ['All', 'Hindi', 'English', 'Tamil', 'Marathi', 'Gujarati', 'Telugu', 'Sanskrit']

const ASTROLOGERS = [
  { id: 1, name: 'Pt. Rajesh Sharma', years: 18, languages: ['Hindi', 'English'], price: 15, sessions: '12,400', rating: 4.9, reviews: '3,420', online: true, image: rajesh, tags: ['Vedic', 'Kundli', 'Marriage'] },
  { id: 2, name: 'Acharya Priya Devi', years: 12, languages: ['Hindi', 'Tamil'], price: 20, sessions: '8,600', rating: 4.8, reviews: '2,180', online: true, image: priya, tags: ['Tarot', 'Numerology', 'Career'] },
  { id: 3, name: 'Pt. Vikram Joshi', years: 22, languages: ['English', 'Marathi'], price: 25, sessions: '19,200', rating: 5, reviews: '4,760', online: false, image: vikram, tags: ['Vastu', 'Jyotish', 'Business'] },
  { id: 4, name: 'Guru Anand Das', years: 15, languages: ['Hindi', 'Gujarati'], price: 12, sessions: '7,800', rating: 4.7, reviews: '1,890', online: true, image: anand, tags: ['Palmistry', 'Vedic', 'Health'] },
  { id: 5, name: 'Smt. Kavita Rao', years: 10, languages: ['Telugu', 'English'], price: 18, sessions: '9,100', rating: 4.9, reviews: '2,560', online: true, image: kavita, tags: ['Tarot', 'Meditation', 'Love'] },
  { id: 6, name: 'Pt. Surya Narayan', years: 25, languages: ['Hindi', 'Sanskrit'], price: 30, sessions: '21,500', rating: 4.8, reviews: '5,120', online: false, image: surya, tags: ['Vedic', 'Prasna', 'Spirituality'] },
]

function Stars({ rating }) {
  const filled = Math.floor(rating)
  return Array.from({ length: 5 }, (_, i) => (
    <img key={i} className="ca-card__star" src={i < filled ? star : starEmpty} alt="" />
  ))
}

export default function ConsultAstrologer() {
  const { openDownload } = useDownloadModal()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [language, setLanguage] = useState('All')
  const [onlineOnly, setOnlineOnly] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ASTROLOGERS.filter((a) => {
      if (onlineOnly && !a.online) return false
      if (category !== 'All' && !a.tags.includes(category)) return false
      if (language !== 'All' && !a.languages.includes(language)) return false
      if (q && !a.name.toLowerCase().includes(q) && !a.tags.some((t) => t.toLowerCase().includes(q))) return false
      return true
    })
  }, [query, category, language, onlineOnly])

  const reset = () => {
    setQuery('')
    setCategory('All')
    setLanguage('All')
    setOnlineOnly(false)
  }

  return (
    <div className="ca">
      <section className="ca-hero">
        <img className="ca-hero__bg" src={heroBg} alt="" />
        <div className="ca-hero__inner">
          <span className="ca-hero__badge">✦ Expert Guidance</span>
          <h1 className="ca-hero__title">
            Consult an <span className="text-grad">Astrologer</span>
          </h1>
          <p className="ca-hero__sub">500+ verified astrologers · Available 24/7 · First consultation ₹1</p>
        </div>
      </section>

      <section className="container ca-body">
        <div className="ca-filters">
          <label className="ca-search">
            <img className="ca-search__icon" src={iconSearch} alt="" />
            <input
              type="search"
              className="ca-search__input"
              placeholder="Search by name or expertise..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search astrologers"
            />
          </label>
          <div className="ca-select">
            <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Filter by language">
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <span className="ca-select__chevron">
              <img src={iconChevron} alt="" />
            </span>
          </div>
          <button
            type="button"
            className={`ca-toggle${onlineOnly ? ' is-active' : ''}`}
            aria-pressed={onlineOnly}
            onClick={() => setOnlineOnly((v) => !v)}
          >
            <span className="ca-toggle__dot" />
            Online Only
          </button>
        </div>

        <div className="ca-chips" role="tablist" aria-label="Categories">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              className={`ca-chip${category === c ? ' is-active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="ca-empty">
            <p className="ca-empty__title">No astrologers match your filters</p>
            <p className="ca-empty__text">Try a different search term or category.</p>
            <button type="button" className="ca-empty__reset" onClick={reset}>Clear filters</button>
          </div>
        ) : (
          <div className="ca-grid">
            {results.map((a) => (
              <article key={a.id} className="ca-card">
                <div className="ca-card__media">
                  <img className="ca-card__img" src={a.image} alt={a.name} />
                  <div className="ca-card__shade" />
                  <span className={`ca-card__status${a.online ? ' is-online' : ' is-busy'}`}>
                    <span className="ca-card__status-dot" />
                    {a.online ? 'Online' : 'Busy'}
                  </span>
                  <div className="ca-card__tags">
                    {a.tags.map((t) => (
                      <span key={t} className="ca-card__tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="ca-card__body">
                  <div className="ca-card__top">
                    <div>
                      <h3 className="ca-card__name">{a.name}</h3>
                      <p className="ca-card__meta">{a.years} Years · {a.languages.join(', ')}</p>
                    </div>
                    <div className="ca-card__price-wrap">
                      <p className="ca-card__price">₹{a.price}/min</p>
                      <p className="ca-card__meta">{a.sessions} sessions</p>
                    </div>
                  </div>
                  <div className="ca-card__rating">
                    <Stars rating={a.rating} />
                    <span className="ca-card__score">{a.rating}</span>
                    <span className="ca-card__reviews">({a.reviews})</span>
                  </div>
                  <div className="ca-card__actions">
                    <button
                      type="button"
                      className="ca-card__consult"
                      disabled={!a.online}
                      onClick={openDownload}
                    >
                      <img src={iconPhone} alt="" />
                      Consult Now
                    </button>
                    <button type="button" className="ca-card__profile" onClick={openDownload}>
                      Profile
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
