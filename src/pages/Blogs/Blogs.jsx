import { useMemo, useState } from 'react'
import './Blogs.css'
import heroBg from '../../assets/blogs/hero-bg.jpg'
import searchIcon from '../../assets/blogs/search-icon.svg'
import clockIcon from '../../assets/blogs/clock-icon.svg'
import imgSaturn from '../../assets/blogs/img-saturn.jpg'
import imgGuru from '../../assets/blogs/img-guru.jpg'
import imgMoon from '../../assets/blogs/img-moon.jpg'
import imgVastu from '../../assets/blogs/img-vastu.jpg'
import imgRudraksha from '../../assets/blogs/img-rudraksha.jpg'
import imgKundli from '../../assets/blogs/img-kundli.jpg'
import avRajesh from '../../assets/blogs/av-rajesh.jpg'
import avPriya from '../../assets/blogs/av-priya.jpg'
import avVikram from '../../assets/blogs/av-vikram.jpg'
import avAnand from '../../assets/blogs/av-anand.jpg'
import avKavita from '../../assets/blogs/av-kavita.jpg'
import avSurya from '../../assets/blogs/av-surya.jpg'

const CATEGORIES = [
  'All',
  'Astrology Tips',
  'Festival Guide',
  'Horoscope Insights',
  'Vastu Shastra',
  'Spiritual Content',
  'Vedic Astrology',
]

const CATEGORY_COLORS = {
  'Astrology Tips': '#c8102e',
  'Festival Guide': '#f77f00',
  'Horoscope Insights': '#4cc9f0',
  'Vastu Shastra': '#06d6a0',
  'Spiritual Content': '#c77dff',
  'Vedic Astrology': '#ffd700',
}

const POSTS = [
  {
    id: 1,
    category: 'Astrology Tips',
    title: 'Saturn Transit 2025: How Shani will impact all 12 zodiac signs this year',
    excerpt:
      "Saturn's transit in 2025 brings major shifts across all 12 zodiac signs. Learn how Shani Dev's movement through Aquarius affects your career, relationships, and spiritual growth.",
    image: imgSaturn,
    author: 'Pt. Rajesh Sharma',
    avatar: avRajesh,
    read: '8 min',
  },
  {
    id: 2,
    category: 'Festival Guide',
    title: 'Guru Purnima 2026: Significance, rituals, and the right way to honor your guru',
    excerpt:
      'Guru Purnima is one of the most auspicious days in the Hindu calendar. Discover its deep significance, proper rituals, and how to truly honor the guru-shishya tradition.',
    image: imgGuru,
    author: 'Acharya Priya Devi',
    avatar: avPriya,
    read: '5 min',
  },
  {
    id: 3,
    category: 'Horoscope Insights',
    title: 'Understanding your Moon sign: Why it matters more than your Sun sign',
    excerpt:
      "In Western astrology, the Sun sign is everything. But in Vedic astrology, the Moon sign (Rashi) is considered far more significant. Here's why — and how to find yours.",
    image: imgMoon,
    author: 'Pt. Vikram Joshi',
    avatar: avVikram,
    read: '6 min',
  },
  {
    id: 4,
    category: 'Vastu Shastra',
    title: 'Vastu tips for your home office: Directions and placements for maximum productivity',
    excerpt:
      'With remote work becoming the norm, your home office Vastu matters more than ever. These science-backed ancient principles can dramatically improve your focus and success.',
    image: imgVastu,
    author: 'Guru Anand Das',
    avatar: avAnand,
    read: '7 min',
  },
  {
    id: 5,
    category: 'Spiritual Content',
    title: 'The power of Rudraksha: Which bead is right for your zodiac sign?',
    excerpt:
      'Rudraksha beads have been worn by sages and spiritual seekers for thousands of years. Each mukhi (face) carries specific energies. Find the right one for your zodiac sign and life goals.',
    image: imgRudraksha,
    author: 'Smt. Kavita Rao',
    avatar: avKavita,
    read: '9 min',
  },
  {
    id: 6,
    category: 'Vedic Astrology',
    title: 'Kundli Matching: 8 Koots explained and what they mean for your marriage',
    excerpt:
      'Kundli matching (Ashtakoot Milan) is the traditional Vedic method of assessing marriage compatibility. Understanding all 8 Koots can help you make a more informed decision about your life partner.',
    image: imgKundli,
    author: 'Pt. Surya Narayan',
    avatar: avSurya,
    read: '10 min',
  },
]

export default function Blogs() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return POSTS.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (!q) return true
      return [p.title, p.excerpt, p.author, p.category].some((t) => t.toLowerCase().includes(q))
    })
  }, [query, category])

  const reset = () => {
    setQuery('')
    setCategory('All')
  }

  return (
    <div className="bl">
      <section className="bl-hero">
        <img className="bl-hero__bg" src={heroBg} alt="" />
        <div className="bl-hero__inner">
          <span className="bl-badge">✦ Knowledge Hub</span>
          <h1 className="bl-hero__title">
            Vedic <span className="text-grad">Wisdom Blog</span>
          </h1>
          <p className="bl-hero__sub">Ancient knowledge. Modern clarity. Fresh every week.</p>
          <label className="bl-search">
            <img className="bl-search__icon" src={searchIcon} alt="" />
            <input
              type="search"
              className="bl-search__input"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search articles"
            />
          </label>
        </div>
      </section>

      <section className="container bl-body">
        <div className="bl-chips" role="tablist" aria-label="Blog categories">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              className={`bl-chip${category === c ? ' is-active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {posts.length > 0 ? (
          <div className="bl-grid">
            {posts.map((p) => (
              <article key={p.id} className="bl-card">
                <div className="bl-card__media">
                  <img className="bl-card__img" src={p.image} alt={p.title} />
                  <span className="bl-card__shade" />
                  <span className="bl-card__tag" style={{ background: CATEGORY_COLORS[p.category] }}>
                    {p.category}
                  </span>
                </div>
                <div className="bl-card__body">
                  <h3 className="bl-card__title">{p.title}</h3>
                  <p className="bl-card__excerpt">{p.excerpt}</p>
                  <div className="bl-card__meta">
                    <div className="bl-card__author">
                      <img className="bl-card__avatar" src={p.avatar} alt="" />
                      <span>{p.author}</span>
                    </div>
                    <div className="bl-card__read">
                      <img src={clockIcon} alt="" />
                      <span>{p.read}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bl-empty">
            <p className="bl-empty__title">No articles found</p>
            <p className="bl-empty__text">Try a different search term or category.</p>
            <button type="button" className="bl-empty__btn" onClick={reset}>
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
