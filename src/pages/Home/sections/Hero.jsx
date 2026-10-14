import { Link } from 'react-router-dom'
import { useDownloadModal } from '../../../components/DownloadModalContext'
import heroBg from '../../../assets/home/hero-bg.jpg'
import avPandit from '../../../assets/home/av-pandit.png'
import avJyotish from '../../../assets/home/av-jyotish.png'
import avKundli from '../../../assets/home/av-kundli.png'
import avEpuja from '../../../assets/home/av-epuja.png'
import logoSprite from '../../../assets/home/logo-sprite.png'
import icSparkle from '../../../assets/home/ic-sparkle.svg'
import icPhone from '../../../assets/home/ic-phone-white.svg'
import icCalendar from '../../../assets/home/ic-calendar-red.svg'
import icShield from '../../../assets/home/ic-shield.svg'
import icUsers from '../../../assets/home/ic-users.svg'
import icStar from '../../../assets/home/ic-star.svg'

const STATS = [
  { value: '50,000+', label: 'Happy Users' },
  { value: '500+', label: 'Verified Astrologers' },
  { value: '100+', label: 'Pandit Partners' },
  { value: '4.9/5', label: 'Average Rating' },
]

const TRUST = [
  { icon: icShield, label: '100% Secure' },
  { icon: icUsers, label: 'Verified Experts' },
  { icon: icStar, label: '4.9 Rating' },
]

// Satellite avatars around the orbit. Positions are the Figma coordinates
// (relative to the 384px orbit box); img crop values come from the design.
const SATELLITES = [
  { key: 'epuja', src: avEpuja, alt: 'E-Puja', pos: { left: 144.4, top: -47.1 }, tilt: true, img: { w: 84, h: 84, round: true, crop: { left: '-8.83%', top: '-7.29%', width: '117.7%', height: '117.7%' } } },
  { key: 'pandit', src: avPandit, alt: 'Pandit Ji', pos: { left: 346.3, top: 142.5 }, img: { w: 83, h: 85, crop: { left: '-22.87%', top: '-1.23%', width: '151.83%', height: '102.47%' } } },
  { key: 'jyotish', src: avJyotish, alt: 'Jyotish', pos: { left: 134.6, top: 341.8 }, tilt: true, img: { w: 82, h: 82, crop: { left: '-4.51%', top: '-3.07%', width: '109.02%', height: '109.02%' } } },
  { key: 'kundli', src: avKundli, alt: 'Kundli Match', pos: { left: -50.51, top: 140.87 }, img: { w: 85, h: 86, crop: { left: '-35.82%', top: '0', width: '171.64%', height: '133.93%' } } },
]

export default function Hero() {
  const { openDownload } = useDownloadModal()

  return (
    <section className="hm-hero">
      <img className="hm-hero__bg" src={heroBg} alt="" aria-hidden="true" />
      <div className="hm-hero__glows" aria-hidden="true">
        <span className="hm-glow hm-glow--1" />
        <span className="hm-glow hm-glow--2" />
        <span className="hm-glow hm-glow--3" />
      </div>

      <div className="container hm-hero__inner">
        <div className="hm-hero__copy">
          <span className="hm-hero__badge">
            <img src={icSparkle} alt="" />
            India&apos;s #1 Spiritual Platform
          </span>
          <h1 className="hm-hero__title">
            India&apos;s Most
            <br />
            <span className="hm-hero__grad">Trusted</span> Astrology Platform
          </h1>
          <p className="hm-hero__text">
            Connect with experienced astrologers, book pandit services, explore spiritual products, and discover
            personalized guidance for every stage of life.
          </p>

          <ul className="hm-hero__stats">
            {STATS.map((s) => (
              <li key={s.label} className="hm-hero__stat">
                <span className="hm-hero__stat-value">{s.value}</span>
                <span className="hm-hero__stat-label">{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="hm-hero__ctas">
            <button type="button" className="hm-btn-primary" onClick={openDownload}>
              <img src={icPhone} alt="" />
              Talk To Astrologer
            </button>
            <Link to="/book-pandit" className="hm-btn-outline">
              <img src={icCalendar} alt="" />
              Book Pandit
            </Link>
          </div>

          <ul className="hm-hero__trust">
            {TRUST.map((t) => (
              <li key={t.label}>
                <img src={t.icon} alt="" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="hm-hero__visual">
          <div className="hm-orbit">
            <span className="hm-orbit__ring hm-orbit__ring--1" />
            <span className="hm-orbit__ring hm-orbit__ring--2" />
            <span className="hm-orbit__ring hm-orbit__ring--3" />

            <div className="hm-orbit__core">
              <span className="hm-orbit__logo">
                <img src={logoSprite} alt="Vedrashi" />
              </span>
              <span className="hm-orbit__name">Vedrashi</span>
              <span className="hm-orbit__tag">Sacred Guidance</span>
            </div>

            {SATELLITES.map((s, i) => (
              <span
                key={s.key}
                className={`hm-sat${s.tilt ? ' hm-sat--tilt' : ''}`}
                style={{ left: s.pos.left, top: s.pos.top, animationDelay: `${i * -1.5}s` }}
              >
                <span
                  className={`hm-sat__img${s.img.round ? ' hm-sat__img--round' : ''}`}
                  style={{ width: s.img.w, height: s.img.h }}
                >
                  <img src={s.src} alt={s.alt} style={s.img.crop} />
                </span>
              </span>
            ))}

            <div className="hm-orbit__live">
              <span className="hm-orbit__live-icon">🌟</span>
              <span>
                <strong>Live Session</strong>
                <small>247 users online</small>
              </span>
            </div>

            <div className="hm-orbit__rating">
              <span className="hm-orbit__rating-top">
                <img src={icStar} alt="" />
                4.9/5
              </span>
              <small>50,000+ reviews</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
