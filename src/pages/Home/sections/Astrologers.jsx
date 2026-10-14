import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDownloadModal } from '../../../components/DownloadModalContext'
import astroRajesh from '../../../assets/home/astro-rajesh.jpg'
import astroPriya from '../../../assets/home/astro-priya.jpg'
import astroVikram from '../../../assets/home/astro-vikram.jpg'
import icLeft from '../../../assets/home/ic-chev-left.svg'
import icRight from '../../../assets/home/ic-chev-right.svg'
import icStar from '../../../assets/home/ic-star-sm.svg'

const ASTROLOGERS = [
  { name: 'Pt. Rajesh Sharma', img: astroRajesh, rating: '4.9', reviews: '3,420', exp: '18 Years', langs: 'Hindi, English', tags: ['Vedic', 'Kundli'], price: '₹15/min' },
  { name: 'Acharya Priya Devi', img: astroPriya, rating: '4.8', reviews: '2,180', exp: '12 Years', langs: 'Hindi, Tamil', tags: ['Tarot', 'Numerology'], price: '₹20/min' },
  { name: 'Pt. Vikram Joshi', img: astroVikram, rating: '5', reviews: '4,760', exp: '22 Years', langs: 'English, Marathi', tags: ['Vastu', 'Jyotish'], price: '₹25/min' },
]

export default function Astrologers() {
  const { openDownload } = useDownloadModal()
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.hm-astro')
    const step = card ? card.offsetWidth + 24 : el.clientWidth
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="hm-section hm-astros">
      <div className="container">
        <div className="hm-row-head">
          <div className="hm-head hm-head--left">
            <span className="hm-pill">✦ Expert Guidance</span>
            <h2 className="hm-h2 hm-h2--md">
              Meet Our <span className="text-grad">Expert Astrologers</span>
            </h2>
          </div>
          <div className="hm-arrows">
            <button type="button" className="hm-arrow" onClick={() => scroll(-1)} disabled={!canPrev} aria-label="Previous astrologers">
              <img src={icLeft} alt="" />
            </button>
            <button
              type="button"
              className={`hm-arrow${!canNext && canPrev ? ' is-end' : ''}`}
              onClick={() => scroll(1)}
              aria-disabled={!canNext}
              aria-label="Next astrologers"
            >
              <img src={icRight} alt="" />
            </button>
          </div>
        </div>

        <div className="hm-astros__track" ref={trackRef} onScroll={update}>
          {ASTROLOGERS.map((a) => (
            <article key={a.name} className="hm-astro">
              <div className="hm-astro__media">
                <img src={a.img} alt={a.name} />
                <span className="hm-astro__shade" />
                <span className="hm-astro__online">
                  <i />
                  Online
                </span>
              </div>
              <div className="hm-astro__body">
                <h3>{a.name}</h3>
                <div className="hm-astro__rating">
                  <img src={icStar} alt="" />
                  <strong>{a.rating}</strong>
                  <span>({a.reviews})</span>
                </div>
                <dl className="hm-astro__info">
                  <div>
                    <dt>Experience</dt>
                    <dd>{a.exp}</dd>
                  </div>
                  <div>
                    <dt>Languages</dt>
                    <dd>{a.langs}</dd>
                  </div>
                </dl>
                <div className="hm-astro__tags">
                  {a.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="hm-astro__foot">
                  <div className="hm-astro__price">
                    <small>Starting at</small>
                    <strong>{a.price}</strong>
                  </div>
                  <div className="hm-astro__btns">
                    <Link to="/consult-astrologer" className="hm-astro__profile">
                      Profile
                    </Link>
                    <button type="button" className="hm-astro__consult" onClick={openDownload}>
                      Consult Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hm-center">
          <Link to="/consult-astrologer" className="hm-btn-line hm-btn-line--lg">
            View All Astrologers →
          </Link>
        </div>
      </div>
    </section>
  )
}
