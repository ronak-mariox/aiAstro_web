import { Link } from 'react-router-dom'
import blogSaturn from '../../../assets/home/blog-saturn.jpg'
import blogGuru from '../../../assets/home/blog-guru.jpg'
import blogMoon from '../../../assets/home/blog-moon.jpg'
import blogVastu from '../../../assets/home/blog-vastu.jpg'
import blogRudraksha from '../../../assets/home/blog-rudraksha.jpg'
import blogKundli from '../../../assets/home/blog-kundli.jpg'
import icArrow from '../../../assets/home/ic-arrow-right.svg'
import icClock from '../../../assets/home/ic-clock-xs.svg'

const ARTICLES = [
  { title: 'Saturn Transit 2025: How Shani will impact all 12 zodiac signs this year', img: blogSaturn, tag: 'Astrology Tips', color: '#c8102e', date: 'Jun 10, 2026', read: '8 min read' },
  { title: 'Guru Purnima 2026: Significance, rituals, and the right way to honor your guru', img: blogGuru, tag: 'Festival Guide', color: '#f77f00', date: 'Jun 8, 2026', read: '5 min read' },
  { title: 'Understanding your Moon sign: Why it matters more than your Sun sign', img: blogMoon, tag: 'Horoscope Insights', color: '#4cc9f0', date: 'Jun 5, 2026', read: '6 min read' },
  { title: 'Vastu tips for your home office: Directions and placements for maximum productivity', img: blogVastu, tag: 'Vastu Shastra', color: '#06d6a0', date: 'Jun 2, 2026', read: '7 min read' },
  { title: 'The power of Rudraksha: Which bead is right for your zodiac sign?', img: blogRudraksha, tag: 'Spiritual Content', color: '#c77dff', date: 'May 30, 2026', read: '9 min read' },
  { title: 'Kundli Matching: 8 Koots explained and what they mean for your marriage', img: blogKundli, tag: 'Vedic Astrology', color: '#ffd700', date: 'May 27, 2026', read: '10 min read' },
]

export default function Articles() {
  return (
    <section className="hm-section hm-articles">
      <div className="container">
        <div className="hm-row-head">
          <div className="hm-head hm-head--left">
            <span className="hm-pill">✦ Knowledge Hub</span>
            <h2 className="hm-h2 hm-h2--md">
              Latest <span className="text-grad">Articles</span>
            </h2>
          </div>
          <Link to="/blogs" className="hm-articles__all">
            View All Articles
            <img src={icArrow} alt="" />
          </Link>
        </div>

        <div className="hm-articles__grid">
          {ARTICLES.map((a) => (
            <Link key={a.title} to="/blogs" className="hm-article">
              <span className="hm-article__media">
                <img src={a.img} alt={a.title} />
                <span className="hm-article__tag" style={{ background: a.color }}>
                  {a.tag}
                </span>
              </span>
              <div className="hm-article__body">
                <h3>{a.title}</h3>
                <span className="hm-article__meta">
                  <span>{a.date}</span>
                  <span className="hm-article__read">
                    <img src={icClock} alt="" />
                    {a.read}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
