import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDownloadModal } from '../../components/DownloadModalContext'
import './EPuja.css'

import heroBg from '../../assets/epuja/hero-bg.png'
import pujaIcon from '../../assets/epuja/puja-icon.png'
import iconFlame from '../../assets/epuja/icon-flame.svg'
import iconStar from '../../assets/epuja/icon-star.svg'
import iconClock from '../../assets/epuja/icon-clock.svg'
import iconUsers from '../../assets/epuja/icon-users.svg'
import iconCheck from '../../assets/epuja/icon-check.svg'
import imgGanesh from '../../assets/epuja/ganesh.png'
import imgLakshmi from '../../assets/epuja/lakshmi.png'
import imgRudrabhishek from '../../assets/epuja/rudrabhishek.png'
import imgNavgraha from '../../assets/epuja/navgraha.png'
import imgSatyanarayan from '../../assets/epuja/satyanarayan.png'
import imgKaalSarp from '../../assets/epuja/kaalsarp.png'
import imgGriha from '../../assets/epuja/griha.png'
import imgMangal from '../../assets/epuja/mangal.png'

const CATEGORIES = ['All', 'Prosperity', 'Health', 'Marriage', 'Planets', 'Housewarming']

const STATS = [
  { value: '50+', label: 'Pujas Available' },
  { value: '200+', label: 'Pandits' },
  { value: '25,000+', label: 'Happy Families' },
]

const PUJAS = [
  {
    title: 'Ganesh Puja', img: imgGanesh, badge: 'Most Booked', badgeColor: '#c8102e',
    rating: '4.9', reviews: '2,140', desc: 'Remove obstacles, invite new beginnings',
    duration: '45 mins', people: '1–10 people',
    benefits: ['Removes obstacles from life', 'Success in new ventures'],
    price: '₹501', categories: ['Prosperity'],
  },
  {
    title: 'Lakshmi Puja', img: imgLakshmi, badge: 'Popular', badgeColor: '#ffd700',
    rating: '4.8', reviews: '1,890', desc: 'Invoke wealth, prosperity & abundance',
    duration: '60 mins', people: '1–20 people',
    benefits: ['Financial abundance', 'Home harmony'],
    price: '₹751', categories: ['Prosperity'],
  },
  {
    title: 'Rudrabhishek', img: imgRudrabhishek, badge: 'Divine', badgeColor: '#7c3aed',
    rating: '5', reviews: '3,210', desc: "Lord Shiva's most powerful ritual",
    duration: '90 mins', people: '1–15 people',
    benefits: ['Health & wellbeing', 'Peace of mind'],
    price: '₹1,001', categories: ['Health'],
  },
  {
    title: 'Navgraha Shanti', img: imgNavgraha, badge: 'Recommended', badgeColor: '#06d6a0',
    rating: '4.9', reviews: '1,560', desc: 'Balance all 9 planetary energies',
    duration: '2 hours', people: '1–8 people',
    benefits: ['Reduces malefic planets', 'Career & business boost'],
    price: '₹1,501', categories: ['Planets'],
  },
  {
    title: 'Satyanarayan Katha', img: imgSatyanarayan, badge: 'Family Favourite', badgeColor: '#e85d04',
    rating: '4.8', reviews: '2,780', desc: 'Fulfillment of wishes & vrats',
    duration: '2.5 hours', people: 'Any',
    benefits: ['Wish fulfillment', 'Family harmony'],
    price: '₹851', categories: ['Prosperity', 'Housewarming'],
  },
  {
    title: 'Kaal Sarp Dosh Puja', img: imgKaalSarp, badge: 'Powerful', badgeColor: '#1a1a2e',
    rating: '4.7', reviews: '890', desc: 'Release from Kaal Sarp Dosh effects',
    duration: '3 hours', people: '1–5 people',
    benefits: ['Removes Kaal Sarp Dosh', 'Improves career & relationships'],
    price: '₹2,001', categories: ['Planets'],
  },
  {
    title: 'Griha Pravesh Puja', img: imgGriha, badge: 'Auspicious', badgeColor: '#c8102e',
    rating: '4.9', reviews: '1,340', desc: 'Sacred housewarming ceremony',
    duration: '2 hours', people: 'Family',
    benefits: ['Purifies new home', 'Vastu dosh removal'],
    price: '₹1,251', categories: ['Housewarming'],
  },
  {
    title: 'Mangal Dosh Puja', img: imgMangal, badge: 'Marriage', badgeColor: '#e91e63',
    rating: '4.8', reviews: '1,120', desc: 'Remedies for Mangal (Manglik) Dosh',
    duration: '90 mins', people: '1–4 people',
    benefits: ['Removes Mangal Dosh', 'Marriage obstacles cleared'],
    price: '₹1,101', categories: ['Marriage', 'Planets'],
  },
]

function PujaCard({ puja }) {
  return (
    <article className="ep-card">
      <div className="ep-card__media">
        <img className="ep-card__img" src={puja.img} alt={puja.title} />
        <div className="ep-card__shade" />
        <span className="ep-card__badge" style={{ background: puja.badgeColor }}>{puja.badge}</span>
        <div className="ep-card__rating">
          <img src={iconStar} alt="" />
          <span className="ep-card__rating-val">{puja.rating}</span>
          <span className="ep-card__rating-count">({puja.reviews})</span>
        </div>
      </div>
      <div className="ep-card__body">
        <h3 className="ep-card__title">{puja.title}</h3>
        <p className="ep-card__desc">{puja.desc}</p>
        <div className="ep-card__meta">
          <span><img src={iconClock} alt="" />{puja.duration}</span>
          <span><img src={iconUsers} alt="" />{puja.people}</span>
        </div>
        <ul className="ep-card__benefits">
          {puja.benefits.map((b) => (
            <li key={b}><img src={iconCheck} alt="" />{b}</li>
          ))}
        </ul>
        <div className="ep-card__foot">
          <div className="ep-card__price-row">
            <p className="ep-card__price">{puja.price}<span>onwards</span></p>
            <span className="ep-card__live">Live Online</span>
          </div>
          <Link to="/services/e-puja" className="ep-card__btn">📲 Book This Puja</Link>
        </div>
      </div>
    </article>
  )
}

export default function EPuja() {
  const { openDownload } = useDownloadModal()
  const [active, setActive] = useState('All')

  const visible = useMemo(
    () => (active === 'All' ? PUJAS : PUJAS.filter((p) => p.categories.includes(active))),
    [active],
  )

  return (
    <div className="ep">
      <section className="ep-hero">
        <img className="ep-hero__bg" src={heroBg} alt="" />
        <span className="ep-hero__glow ep-hero__glow--gold" />
        <span className="ep-hero__glow ep-hero__glow--red" />
        <div className="ep-hero__inner">
          <img className="ep-hero__icon" src={pujaIcon} alt="E-Puja" />
          <div className="ep-hero__content">
            <span className="ep-hero__live">
              <img src={iconFlame} alt="" />
              LIVE · 247 online now
            </span>
            <h1 className="ep-hero__title">
              Online <span className="ep-hero__accent">E-Puja</span> Services
            </h1>
            <p className="ep-hero__text">
              Authentic Vedic pujas performed live by verified pandits. Watch &amp; participate from anywhere in the world.
            </p>
            <div className="ep-hero__stats">
              {STATS.map((s) => (
                <div className="ep-hero__stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="ep-filter">
        <div className="ep-wrap ep-filter__inner" role="tablist" aria-label="Filter pujas">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              className={`ep-chip${active === c ? ' is-active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="ep-wrap ep-main">
        {visible.length > 0 ? (
          <div className="ep-grid">
            {visible.map((p) => <PujaCard key={p.title} puja={p} />)}
          </div>
        ) : (
          <p className="ep-empty">No pujas found in this category.</p>
        )}

        <div className="ep-cta">
          <img className="ep-cta__icon" src={pujaIcon} alt="" />
          <h2 className="ep-cta__title">Can&apos;t find your puja?</h2>
          <p className="ep-cta__text">
            50+ more pujas available on the Vedrashi app. Custom pujas, special occasions, and regional ceremonies — all covered.
          </p>
          <button type="button" className="ep-cta__btn" onClick={openDownload}>
            View All Pujas on App →
          </button>
        </div>
      </section>
    </div>
  )
}
