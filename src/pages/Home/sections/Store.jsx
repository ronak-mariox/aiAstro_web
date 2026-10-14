import { Link } from 'react-router-dom'
import { useDownloadModal } from '../../../components/DownloadModalContext'
import prodRudraksha from '../../../assets/home/prod-rudraksha.jpg'
import prodSapphire from '../../../assets/home/prod-sapphire.jpg'
import prodYantra from '../../../assets/home/prod-yantra.jpg'
import prodBook from '../../../assets/home/prod-book.jpg'
import prodQuartz from '../../../assets/home/prod-quartz.jpg'
import icStar from '../../../assets/home/ic-star-xs.svg'

const PRODUCTS = [
  { cat: 'Rudraksha', name: '5 Mukhi Rudraksha', img: prodRudraksha, rating: '4.8', reviews: '342', price: '₹1,299', mrp: '₹2,500', badge: 'Bestseller' },
  { cat: 'Gemstone', name: 'Blue Sapphire (Neelam)', img: prodSapphire, rating: '4.9', reviews: '189', price: '₹4,999', mrp: '₹8,000', badge: 'Certified' },
  { cat: 'Yantra', name: 'Shree Yantra (Gold)', img: prodYantra, rating: '5', reviews: '521', price: '₹899', mrp: '₹1,500', badge: 'Popular' },
  { cat: 'Puja Kit', name: 'Navgraha Puja Kit', img: prodYantra, rating: '4.7', reviews: '278', price: '₹599', mrp: '₹999', badge: 'Complete' },
  { cat: 'Spiritual Book', name: 'Brihat Parashara Hora', img: prodBook, rating: '4.8', reviews: '156', price: '₹349', mrp: '₹600', badge: 'Classic' },
  { cat: 'Crystal', name: 'Rose Quartz Crystal', img: prodQuartz, rating: '4.6', reviews: '412', price: '₹749', mrp: '₹1,200', badge: 'New' },
]

export default function Store() {
  const { openDownload } = useDownloadModal()

  return (
    <section className="hm-section hm-store">
      <div className="container">
        <div className="hm-row-head">
          <div className="hm-head hm-head--left">
            <span className="hm-pill">✦ Sacred Products</span>
            <h2 className="hm-h2 hm-h2--md">
              Spiritual <span className="text-grad">Store</span>
            </h2>
          </div>
          <Link to="/spiritual-store" className="hm-btn-line">
            Explore Store →
          </Link>
        </div>

        <div className="hm-store__grid">
          {PRODUCTS.map((p) => (
            <button key={p.name} type="button" className="hm-prod" onClick={openDownload}>
              <span className="hm-prod__media">
                <img src={p.img} alt={p.name} />
                <span className="hm-prod__badge">{p.badge}</span>
              </span>
              <span className="hm-prod__body">
                <span className="hm-prod__cat">{p.cat}</span>
                <span className="hm-prod__name">{p.name}</span>
                <span className="hm-prod__rating">
                  <img src={icStar} alt="" />
                  <strong>{p.rating}</strong>
                  <small>({p.reviews})</small>
                </span>
                <span className="hm-prod__price">
                  <strong>{p.price}</strong>
                  <s>{p.mrp}</s>
                </span>
                <span className="hm-prod__buy">Buy on App</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
