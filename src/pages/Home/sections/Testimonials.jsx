import SectionHead from './SectionHead'
import userPriya from '../../../assets/home/user-priya.jpg'
import userSunita from '../../../assets/home/user-sunita.jpg'
import userKavitha from '../../../assets/home/user-kavitha.jpg'
import userMeera from '../../../assets/home/user-meera.jpg'
import userAnanya from '../../../assets/home/user-ananya.jpg'
import userRiya from '../../../assets/home/user-riya.jpg'
import icStar20 from '../../../assets/home/ic-star-20.svg'
import icStar16 from '../../../assets/home/ic-star-16.svg'
import icQuote from '../../../assets/home/ic-quote.svg'

const REVIEWS = [
  { name: 'Priya Sharma', city: 'Delhi', img: userPriya, text: "Vedrashi completely transformed my perspective on my career struggles. Pt. Rajesh's reading was incredibly accurate — I followed his remedies and landed my dream job within 3 months!" },
  { name: 'Sunita Devi', city: 'Bangalore', img: userSunita, text: 'The tarot reading session helped me make the most important decision of my life. The astrologer was patient, empathetic, and surprisingly accurate about my past.' },
  { name: 'Kavitha Rao', city: 'Chennai', img: userKavitha, text: "I've tried many astrology platforms but Vedrashi stands out for genuine, verified experts. The numerology session revealed patterns in my life I never understood before." },
  { name: 'Meera Iyer', city: 'Mumbai', img: userMeera, text: 'I was skeptical at first, but the kundli analysis was so precise it gave me chills. The pandit they connected me with for my grih pravesh puja was professional and knowledgeable.' },
  { name: 'Ananya Singh', city: 'Ahmedabad', img: userAnanya, text: 'Book pandit service is absolutely seamless. The pandit arrived on time for our satyanarayan katha, performed the puja with full vidhi, and was deeply knowledgeable.' },
  { name: 'Riya Kapoor', city: 'Pune', img: userRiya, text: 'The vastu consultation for my new office was worth every rupee. Within two months of implementing the changes, our business revenue improved significantly.' },
]

const FIVE = [0, 1, 2, 3, 4]

export default function Testimonials() {
  return (
    <section className="hm-section hm-reviews">
      <div className="container">
        <SectionHead pill="Real Reviews" lead="What Our" grad="Users Say" />
        <div className="hm-reviews__summary">
          <span className="hm-reviews__stars">
            {FIVE.map((i) => (
              <img key={i} src={icStar20} alt="" />
            ))}
          </span>
          <strong>4.9/5</strong>
          <span>from 50,000+ reviews</span>
        </div>

        <div className="hm-reviews__grid">
          {REVIEWS.map((r) => (
            <article key={r.name} className="hm-review">
              <img className="hm-review__quote" src={icQuote} alt="" />
              <span className="hm-review__stars">
                {FIVE.map((i) => (
                  <img key={i} src={icStar16} alt="" />
                ))}
              </span>
              <p>&quot;{r.text}&quot;</p>
              <div className="hm-review__foot">
                <img className="hm-review__avatar" src={r.img} alt={r.name} />
                <span className="hm-review__who">
                  <strong>{r.name}</strong>
                  <small>{r.city}</small>
                </span>
                <span className="hm-review__verified">
                  <i />
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
