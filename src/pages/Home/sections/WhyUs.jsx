import SectionHead from './SectionHead'
import icShield from '../../../assets/home/why-shield.svg'
import icLock from '../../../assets/home/why-lock.svg'
import icHeart from '../../../assets/home/why-heart.svg'
import icBolt from '../../../assets/home/why-bolt.svg'

const REASONS = [
  { icon: icShield, color: '#c8102e', tint: 'rgba(200,16,46,0.09)', stat: '500+', statLabel: 'Verified Professionals', title: 'Verified Experts', desc: 'All astrologers and pandits undergo rigorous background verification and credential checks before onboarding.' },
  { icon: icLock, color: '#4cc9f0', tint: 'rgba(76,201,240,0.09)', stat: '256-bit', statLabel: 'SSL Encryption', title: '100% Secure', desc: 'Your personal data and consultation details are encrypted and never shared with third parties.' },
  { icon: icHeart, color: '#ffd700', tint: 'rgba(255,215,0,0.09)', stat: '50,000+', statLabel: 'Happy Clients', title: 'Trusted By Thousands', desc: 'Over 50,000 satisfied users have found clarity, purpose, and peace through our platform.' },
  { icon: icBolt, color: '#06d6a0', tint: 'rgba(6,214,160,0.09)', stat: '24/7', statLabel: 'Available Always', title: 'Instant Support', desc: '24/7 customer support and instant connection to available astrologers with zero wait time.' },
]

export default function WhyUs() {
  return (
    <section className="hm-section hm-why">
      <div className="container">
        <SectionHead pill="Why Vedrashi" lead="Why" grad="Choose Us" size="md" />
        <div className="hm-why__grid">
          {REASONS.map((r) => (
            <article key={r.title} className="hm-why__card">
              <span className="hm-why__icon" style={{ background: r.tint }}>
                <img src={r.icon} alt="" />
              </span>
              <strong className="hm-why__stat" style={{ color: r.color }}>
                {r.stat}
              </strong>
              <small className="hm-why__stat-label">{r.statLabel}</small>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
