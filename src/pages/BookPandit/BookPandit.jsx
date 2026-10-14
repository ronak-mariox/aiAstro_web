import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDownloadModal } from '../../components/DownloadModalContext'
import './BookPandit.css'

import heroBg from '../../assets/pandit/hero-bg.png'
import iconPin from '../../assets/pandit/icon-pin.svg'
import iconClock from '../../assets/pandit/icon-clock.svg'
import iconStar from '../../assets/pandit/icon-star.svg'
import ramesh from '../../assets/pandit/ramesh.png'
import mohan from '../../assets/pandit/mohan.png'
import suresh from '../../assets/pandit/suresh.png'
import naresh from '../../assets/pandit/naresh.png'

const CEREMONIES = ['All', 'Grih Pravesh', 'Vivah Puja', 'Satyanarayan', 'Rudrabhishek', 'Havan', 'Navgraha Puja']

const PANDITS = [
  { id: 1, name: 'Pt. Ramesh Acharya', speciality: 'Grih Pravesh', location: 'Delhi NCR', years: 20, rating: 4.9, reviews: 1240, tags: ['Grih Pravesh', 'Havan'], price: '₹1,100', online: true, image: ramesh },
  { id: 2, name: 'Pt. Mohan Mishra', speciality: 'Satyanarayan Katha', location: 'Mumbai', years: 15, rating: 4.8, reviews: 890, tags: ['Satyanarayan Katha', 'Rudrabhishek'], price: '₹900', online: true, image: mohan },
  { id: 3, name: 'Pt. Suresh Pandey', speciality: 'Vivah Puja', location: 'Varanasi', years: 28, rating: 5, reviews: 2310, tags: ['Vivah Puja', 'Saptapadi'], price: '₹2,100', online: true, image: suresh },
  { id: 4, name: 'Pt. Naresh Tripathi', speciality: 'Rudrabhishek', location: 'Jaipur', years: 18, rating: 4.7, reviews: 760, tags: ['Rudrabhishek', 'Shiva Puja'], price: '₹800', online: false, image: naresh },
]

export default function BookPandit() {
  const { openDownload } = useDownloadModal()
  const [ceremony, setCeremony] = useState('All')

  const results = useMemo(() => {
    if (ceremony === 'All') return PANDITS
    const c = ceremony.toLowerCase()
    return PANDITS.filter((p) => p.tags.some((t) => t.toLowerCase().includes(c)))
  }, [ceremony])

  return (
    <div className="bp">
      <section className="bp-hero">
        <img className="bp-hero__bg" src={heroBg} alt="" />
        <div className="bp-hero__inner">
          <span className="bp-hero__badge">✦ Pandit Services</span>
          <h1 className="bp-hero__title">
            Book a <span className="text-grad">Verified Pandit</span>
          </h1>
          <p className="bp-hero__sub">100+ verified pandits across India · All ceremonies covered</p>
        </div>
      </section>

      <section className="container bp-body">
        <div className="bp-chips" role="tablist" aria-label="Ceremonies">
          {CEREMONIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={ceremony === c}
              className={`bp-chip${ceremony === c ? ' is-active' : ''}`}
              onClick={() => setCeremony(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="bp-empty">
            <p className="bp-empty__title">No pandits available for {ceremony} right now</p>
            <p className="bp-empty__text">Check back soon or browse all ceremonies.</p>
            <button type="button" className="bp-empty__reset" onClick={() => setCeremony('All')}>
              Show all pandits
            </button>
          </div>
        ) : (
          <div className="bp-grid">
            {results.map((p) => (
              <article key={p.id} className="bp-card">
                <div className="bp-card__head">
                  <div className="bp-card__avatar-wrap">
                    <img className="bp-card__avatar" src={p.image} alt={p.name} />
                    {p.online && <span className="bp-card__online" aria-label="Online" />}
                  </div>
                  <h3 className="bp-card__name">{p.name}</h3>
                  <p className="bp-card__spec">{p.speciality}</p>
                </div>
                <div className="bp-card__body">
                  <ul className="bp-card__info">
                    <li>
                      <img src={iconPin} alt="" />
                      {p.location}
                    </li>
                    <li>
                      <img src={iconClock} alt="" />
                      {p.years} Years
                    </li>
                    <li className="bp-card__rating">
                      <img src={iconStar} alt="" />
                      <strong>{p.rating}</strong>
                      <span>({p.reviews})</span>
                    </li>
                  </ul>
                  <div className="bp-card__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="bp-card__tag">{t}</span>
                    ))}
                  </div>
                  <div className="bp-card__foot">
                    <div className="bp-card__price-row">
                      <span className="bp-card__from">Starting from</span>
                      <span className="bp-card__price">{p.price}</span>
                    </div>
                    <div className="bp-card__actions">
                      <Link to="/services/book-pandit" className="bp-card__details">
                        View Details
                      </Link>
                      <button
                        type="button"
                        className="bp-card__book"
                        disabled={!p.online}
                        onClick={openDownload}
                      >
                        {p.online ? 'Book Now' : 'Busy'}
                      </button>
                    </div>
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
