import { Link } from 'react-router-dom'
import './About.css'
import heroBg from '../../assets/about/hero-bg.jpg'
import cosmic from '../../assets/about/cosmic.jpg'
import iconUsers from '../../assets/about/icon-users.svg'
import iconStar from '../../assets/about/icon-star.svg'
import iconShield from '../../assets/about/icon-shield.svg'
import iconAward from '../../assets/about/icon-award.svg'
import iconGlobe from '../../assets/about/icon-globe.svg'
import iconHeart from '../../assets/about/icon-heart.svg'
import teamArjun from '../../assets/about/team-arjun.jpg'
import teamPriya from '../../assets/about/team-priya.jpg'
import teamVikram from '../../assets/about/team-vikram.jpg'
import teamKavya from '../../assets/about/team-kavya.jpg'

const STATS = [
  { icon: iconUsers, value: '50,000+', label: 'Happy Users' },
  { icon: iconStar, value: '500+', label: 'Verified Astrologers' },
  { icon: iconShield, value: '100+', label: 'Pandit Partners' },
  { icon: iconAward, value: '4.9/5', label: 'Average Rating' },
  { icon: iconGlobe, value: '150+', label: 'Cities Served' },
  { icon: iconHeart, value: '1M+', label: 'Consultations Done' },
]

const TIMELINE = [
  { year: '2019', text: 'Vedrashi founded in Bengaluru by Arjun Verma with 10 astrologers on the platform.' },
  { year: '2020', text: 'Expanded to 100+ astrologers. Launched free Kundli generation tool, used by 1 lakh users in year one.' },
  { year: '2021', text: 'Introduced Book Pandit service. Crossed 10,000 active users and ₹1 Cr in annual GMV.' },
  { year: '2022', text: 'Raised Series A funding. Expanded Pandit network to 50+ cities across India.' },
  { year: '2023', text: 'Launched Spiritual Store and mobile app. Crossed 25,000 monthly active users.' },
  { year: '2024', text: "Hit 50,000 users. 500+ astrologers. India's most-reviewed astrology platform on Play Store." },
  { year: '2026', text: 'Launching AI-powered Kundli insights, live astrology shows, and international expansion.' },
]

const TEAM = [
  { name: 'Arjun Verma', role: 'Founder & CEO', bio: '20+ years in Vedic tradition. IIT alumni turned spiritual entrepreneur.', img: teamArjun },
  { name: 'Priya Nair', role: 'Head of Astrology', bio: 'PhD in Sanskrit & Jyotish. Author of 3 books on Vedic astrology.', img: teamPriya },
  { name: 'Vikram Singh', role: 'CTO', bio: 'Former Google engineer. Building technology that serves dharma.', img: teamVikram },
  { name: 'Kavya Menon', role: 'Head of Pandit Network', bio: '15 years of experience in temple administration and Vedic rituals.', img: teamKavya },
]

export default function About() {
  return (
    <div className="ab">
      {/* Hero */}
      <section className="ab-hero">
        <img className="ab-hero__bg" src={heroBg} alt="" />
        <span className="ab-hero__glow" />
        <div className="ab-hero__inner">
          <span className="ab-badge">✦ Our Story</span>
          <h1 className="ab-hero__title">
            Bridging Ancient Wisdom with <span className="text-grad">Modern Lives</span>
          </h1>
          <p className="ab-hero__sub">
            Vedrashi was born from a simple belief: every person deserves access to authentic Vedic guidance — not
            just those who can afford it or know whom to call.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="ab-section ab-mission">
        <div className="ab-wrap ab-mission__grid">
          <div className="ab-mission__text">
            <span className="ab-badge">✦ Our Mission</span>
            <h2 className="ab-h2 ab-mission__title">Making Vedic Wisdom Accessible to Every Indian</h2>
            <p>
              India has a rich tradition of Vedic knowledge — astrology, Vastu, Ayurveda, and spiritual practices that
              have guided generations through life&apos;s challenges. But this wisdom has often been locked behind
              gatekeepers: geographic limitations, language barriers, and the challenge of finding trustworthy experts.
            </p>
            <p>
              Vedrashi removes all those barriers. We&apos;ve built a platform where anyone — in any city, speaking any
              language, at any hour — can connect instantly with verified, reviewed, and experienced Vedic experts.
            </p>
            <p>
              Our astrologers are vetted through rigorous testing. Our pandits are background-verified. Our products
              are authentic and energized. Everything on Vedrashi carries our commitment: real expertise, real
              results, real care.
            </p>
          </div>
          <div className="ab-mission__media">
            <img className="ab-mission__img" src={cosmic} alt="Silhouette under the Milky Way" />
            <div className="ab-since">
              <p className="ab-since__title">Since 2019</p>
              <p className="ab-since__text">Serving India&apos;s spiritual needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="ab-section ab-stats">
        <div className="ab-wrap">
          <h2 className="ab-h2 ab-h2--sm ab-center">Vedrashi by the Numbers</h2>
          <div className="ab-stats__grid">
            {STATS.map((s) => (
              <div key={s.label} className="ab-stat">
                <img className="ab-stat__icon" src={s.icon} alt="" />
                <p className="ab-stat__value">{s.value}</p>
                <p className="ab-stat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="ab-section ab-journey">
        <div className="ab-wrap ab-wrap--narrow">
          <div className="ab-center">
            <span className="ab-badge">✦ Our Journey</span>
            <h2 className="ab-h2">From Idea to India&apos;s Most Trusted</h2>
          </div>
          <ol className="ab-timeline">
            {TIMELINE.map((t, i) => (
              <li key={t.year} className="ab-tl">
                <div className="ab-tl__rail">
                  <span className="ab-tl__dot">{t.year.slice(2)}</span>
                  {i < TIMELINE.length - 1 && <span className="ab-tl__line" />}
                </div>
                <div className="ab-tl__body">
                  <p className="ab-tl__year">{t.year}</p>
                  <p className="ab-tl__text">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="ab-section ab-team">
        <div className="ab-wrap">
          <div className="ab-center">
            <span className="ab-badge">✦ The Team</span>
            <h2 className="ab-h2">People Behind Vedrashi</h2>
          </div>
          <div className="ab-team__grid">
            {TEAM.map((m) => (
              <div key={m.name} className="ab-member">
                <img className="ab-member__img" src={m.img} alt={m.name} />
                <h3 className="ab-member__name">{m.name}</h3>
                <p className="ab-member__role">{m.role}</p>
                <p className="ab-member__bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ab-cta">
        <div className="ab-cta__inner">
          <h2 className="ab-h2 ab-h2--sm">Begin Your Cosmic Journey</h2>
          <p className="ab-cta__text">
            Talk to an expert astrologer today and discover the guidance the stars have for you.
          </p>
          <div className="ab-cta__actions">
            <Link to="/consult-astrologer" className="ab-btn ab-btn--primary">
              Consult an Astrologer
            </Link>
            <Link to="/blogs" className="ab-btn ab-btn--outline">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
