import { useDownloadModal } from '../../../components/DownloadModalContext'
import SectionHead from './SectionHead'
import panditRamesh from '../../../assets/home/pandit-ramesh.jpg'
import panditMohan from '../../../assets/home/pandit-mohan.jpg'
import panditSuresh from '../../../assets/home/pandit-suresh.jpg'
import panditNaresh from '../../../assets/home/pandit-naresh.jpg'
import icPin from '../../../assets/home/ic-pin.svg'
import icClock from '../../../assets/home/ic-clock.svg'
import icStar from '../../../assets/home/ic-star-pandit.svg'

const PANDITS = [
  { name: 'Pt. Ramesh Acharya', img: panditRamesh, spec: 'Grih Pravesh & Havan', city: 'Delhi NCR', exp: '20 Years Experience', rating: '4.9', reviews: '1240', langs: ['Hindi', 'Sanskrit'] },
  { name: 'Pt. Mohan Mishra', img: panditMohan, spec: 'Satyanarayan Katha', city: 'Mumbai', exp: '15 Years Experience', rating: '4.8', reviews: '890', langs: ['Hindi', 'Marathi'] },
  { name: 'Pt. Suresh Pandey', img: panditSuresh, spec: 'Vivah Puja & Ceremony', city: 'Varanasi', exp: '28 Years Experience', rating: '5', reviews: '2310', langs: ['Hindi', 'Bhojpuri'] },
  { name: 'Pt. Naresh Tripathi', img: panditNaresh, spec: 'Rudrabhishek & Shiva Puja', city: 'Jaipur', exp: '18 Years Experience', rating: '4.7', reviews: '760', langs: ['Hindi', 'Rajasthani'] },
]

export default function Pandits() {
  const { openDownload } = useDownloadModal()

  return (
    <section className="hm-section hm-pandits">
      <div className="container">
        <SectionHead
          pill="Pandit Services"
          lead="Book"
          grad="Verified Pandits"
          sub="Trained, verified, and experienced pandits available across India for all sacred ceremonies."
        />
        <div className="hm-pandits__grid">
          {PANDITS.map((p) => (
            <article key={p.name} className="hm-pandit">
              <div className="hm-pandit__top">
                <span className="hm-pandit__avatar">
                  <img src={p.img} alt={p.name} />
                </span>
                <h3>{p.name}</h3>
                <p>{p.spec}</p>
              </div>
              <div className="hm-pandit__body">
                <span className="hm-pandit__line">
                  <img src={icPin} alt="" />
                  {p.city}
                </span>
                <span className="hm-pandit__line">
                  <img src={icClock} alt="" />
                  {p.exp}
                </span>
                <span className="hm-pandit__line hm-pandit__line--rating">
                  <img src={icStar} alt="" />
                  <strong>{p.rating}</strong>
                  <small>({p.reviews})</small>
                </span>
                <div className="hm-pandit__langs">
                  {p.langs.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
                <button type="button" className="hm-pandit__btn" onClick={openDownload}>
                  Get Consultation
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
