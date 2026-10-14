import { Link } from 'react-router-dom'
import SectionHead from './SectionHead'
import svcAstro from '../../../assets/home/svc-astro.jpg'
import svcVoice from '../../../assets/home/svc-voice.jpg'
import svcEpujaOverlay from '../../../assets/home/svc-epuja-overlay.jpg'
import svcPandit from '../../../assets/home/svc-pandit.jpg'
import svcProducts from '../../../assets/home/svc-products.jpg'
import icPhone from '../../../assets/home/svc-ic-phone.svg'
import icMic from '../../../assets/home/svc-ic-mic.svg'
import icBook from '../../../assets/home/svc-ic-book.svg'
import icBag from '../../../assets/home/svc-ic-bag.svg'

const SERVICES = [
  {
    title: 'Talk To Astrologer',
    desc: 'Instant voice call with certified Vedic astrologers for personalized guidance',
    to: '/services/talk-to-astrologer',
    img: svcAstro,
    icon: icPhone,
    color: '#c8102e',
    overlay:
      'linear-gradient(155.78deg, rgba(200,16,46,0.6) 0%, rgba(164,13,38,0.55) 25%, rgba(120,10,28,0.5) 50%, rgba(67,5,15,0.45) 75%, rgba(0,0,0,0.4) 100%)',
  },
  {
    title: 'E-Puja',
    desc: 'Book divine rituals and receive blessings through trusted online puja services.',
    to: '/services/e-puja',
    img: svcVoice,
    extra: svcEpujaOverlay,
    icon: icMic,
    color: '#e85d04',
    overlay:
      'linear-gradient(155.78deg, rgba(232,93,4,0.6) 0%, rgba(190,76,3,0.55) 25%, rgba(139,56,2,0.5) 50%, rgba(77,31,1,0.45) 75%, rgba(0,0,0,0.4) 100%)',
  },
  {
    title: 'Book Pandit',
    desc: 'Verified pandits for puja, havan, grih pravesh, and all auspicious ceremonies',
    to: '/services/book-pandit',
    img: svcPandit,
    icon: icBook,
    color: '#06d6a0',
    overlay:
      'linear-gradient(155.78deg, rgba(6,214,160,0.6) 0%, rgba(5,175,131,0.55) 25%, rgba(4,128,96,0.5) 50%, rgba(2,71,53,0.45) 75%, rgba(0,0,0,0.4) 100%)',
  },
  {
    title: 'Spiritual Products',
    desc: 'Authentic rudraksha, gemstones, yantras, and consecrated spiritual items',
    to: '/services/spiritual-products',
    img: svcProducts,
    icon: icBag,
    color: '#ffd700',
    overlay:
      'linear-gradient(155.78deg, rgba(255,215,0,0.6) 0%, rgba(209,176,0,0.55) 25%, rgba(153,129,0,0.5) 50%, rgba(85,72,0,0.45) 75%, rgba(0,0,0,0.4) 100%)',
  },
]

export default function Services() {
  return (
    <section className="hm-section hm-services">
      <div className="container">
        <SectionHead
          pill="Our Services"
          lead="Explore Our"
          grad="Services"
          sub="From ancient Vedic wisdom to modern spiritual guidance — every service crafted for your highest good."
        />
        <div className="hm-services__grid">
          {SERVICES.map((s) => (
            <Link key={s.title} to={s.to} className="hm-svc">
              <div className="hm-svc__media">
                <img className="hm-svc__img" src={s.img} alt={s.title} />
                <span className="hm-svc__overlay" style={{ backgroundImage: s.overlay }}>
                  {s.extra && (
                    <span className="hm-svc__extra">
                      <img src={s.extra} alt="" />
                    </span>
                  )}
                </span>
                <span className="hm-svc__icon">
                  <img src={s.icon} alt="" />
                </span>
              </div>
              <div className="hm-svc__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="hm-svc__more" style={{ color: s.color }}>
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
