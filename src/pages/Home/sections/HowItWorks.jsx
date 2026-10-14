import SectionHead from './SectionHead'
import icSearch from '../../../assets/home/how-search.svg'
import icUser from '../../../assets/home/how-user.svg'
import icChat from '../../../assets/home/how-chat.svg'
import icSparkle from '../../../assets/home/how-sparkle.svg'

const STEPS = [
  { icon: icSearch, color: '#c8102e', badge: 'linear-gradient(135deg, #c8102e 0%, #ffd700 100%)', title: 'Browse Astrologers', desc: 'Explore our curated list of verified Vedic astrologers, pandits, and spiritual experts filtered by expertise, rating, and language.' },
  { icon: icUser, color: '#e85d04', badge: 'linear-gradient(135deg, #e85d04 0%, #ffd700 100%)', title: 'Choose Your Expert', desc: 'Read detailed profiles, user reviews, and success stories to find the perfect guide aligned with your spiritual needs.' },
  { icon: icChat, color: '#ffd700', badge: '#ffd700', title: 'Submit Inquiry', desc: 'Fill a quick form or connect directly via call or chat. Share your birth details for a personalized consultation.' },
  { icon: icSparkle, color: '#06d6a0', badge: 'linear-gradient(135deg, #06d6a0 0%, #ffd700 100%)', title: 'Get Consultation', desc: 'Receive deep, actionable insights and sacred remedies from your chosen expert in your preferred language.' },
]

export default function HowItWorks() {
  return (
    <section className="hm-section hm-how">
      <div className="container">
        <SectionHead pill="Simple Process" lead="How It" grad="Works" />
        <div className="hm-how__wrap">
        <span className="hm-how__line" aria-hidden="true" />
        <ol className="hm-how__grid">
          {STEPS.map((s, i) => (
            <li key={s.title} className="hm-how__step">
              <span className="hm-how__circle" style={{ borderColor: s.color }}>
                <img src={s.icon} alt="" />
                <span className="hm-how__num" style={{ background: s.badge }}>
                  {i + 1}
                </span>
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
