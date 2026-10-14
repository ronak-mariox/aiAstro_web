import { useMemo, useState } from 'react'
import { useDownloadModal } from '../../components/DownloadModalContext'
import './SpiritualStore.css'

import heroBg from '../../assets/store/hero-bg.png'
import iconSearch from '../../assets/store/icon-search.svg'
import iconPhone from '../../assets/store/icon-phone.svg'
import iconStar from '../../assets/store/icon-star.svg'
import imgRudraksha from '../../assets/store/rudraksha.png'
import imgSapphire from '../../assets/store/sapphire.png'
import imgYantra from '../../assets/store/yantra.png'
import imgBook from '../../assets/store/book.png'
import imgRoseQuartz from '../../assets/store/rose-quartz.png'

const CATEGORIES = ['All', 'Rudraksha', 'Gemstone', 'Yantra', 'Puja Kit', 'Books', 'Crystals']

const PRODUCTS = [
  { name: '5 Mukhi Rudraksha Mala', category: 'Rudraksha', img: imgRudraksha, badge: 'Bestseller', rating: '4.8', reviews: 342, price: '₹1,299', mrp: '₹2,500', off: '48% off' },
  { name: 'Blue Sapphire (Neelam) - 3 Carat', category: 'Gemstone', img: imgSapphire, badge: 'Certified', rating: '4.9', reviews: 189, price: '₹4,999', mrp: '₹8,000', off: '38% off' },
  { name: 'Shree Yantra (Gold Plated)', category: 'Yantra', img: imgYantra, badge: 'Popular', rating: '5', reviews: 521, price: '₹899', mrp: '₹1,500', off: '40% off' },
  { name: 'Navgraha Puja Complete Kit', category: 'Puja Kit', img: imgYantra, badge: 'Complete', rating: '4.7', reviews: 278, price: '₹599', mrp: '₹999', off: '40% off' },
  { name: 'Brihat Parashara Hora Shastra', category: 'Books', img: imgBook, badge: 'Classic', rating: '4.8', reviews: 156, price: '₹349', mrp: '₹600', off: '42% off' },
  { name: 'Rose Quartz Crystal Sphere', category: 'Crystals', img: imgRoseQuartz, badge: 'New', rating: '4.6', reviews: 412, price: '₹749', mrp: '₹1,200', off: '38% off' },
  { name: '11 Mukhi Rudraksha', category: 'Rudraksha', img: imgRudraksha, badge: 'Rare', rating: '4.9', reviews: 98, price: '₹2,199', mrp: '₹3,500', off: '37% off' },
  { name: 'Yellow Sapphire (Pukhraj) - 4 Carat', category: 'Gemstone', img: imgSapphire, badge: 'Premium', rating: '4.8', reviews: 67, price: '₹6,999', mrp: '₹12,000', off: '42% off', outOfStock: true },
]

function ProductCard({ product, onBuy }) {
  const { outOfStock } = product
  return (
    <article className={`ss-card${outOfStock ? ' is-oos' : ''}`}>
      <div className="ss-card__media">
        <img className="ss-card__img" src={product.img} alt={product.name} />
        <span className="ss-card__badge">{product.badge}</span>
        {outOfStock && (
          <div className="ss-card__oos">
            <span>Out of Stock</span>
          </div>
        )}
      </div>
      <div className="ss-card__body">
        <p className="ss-card__cat">{product.category}</p>
        <h3 className="ss-card__name">{product.name}</h3>
        <div className="ss-card__rating">
          <img src={iconStar} alt="" />
          <span className="ss-card__rating-val">{product.rating}</span>
          <span className="ss-card__rating-count">({product.reviews})</span>
        </div>
        <div className="ss-card__price">
          <strong>{product.price}</strong>
          <s>{product.mrp}</s>
          <span>{product.off}</span>
        </div>
        <button type="button" className="ss-card__btn" onClick={onBuy} disabled={outOfStock}>
          {outOfStock ? 'Out of Stock' : 'Buy on App'}
        </button>
      </div>
    </article>
  )
}

export default function SpiritualStore() {
  const { openDownload } = useDownloadModal()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PRODUCTS.filter(
      (p) =>
        (active === 'All' || p.category === active) &&
        (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)),
    )
  }, [query, active])

  const reset = () => {
    setQuery('')
    setActive('All')
  }

  return (
    <div className="ss">
      <section className="ss-hero">
        <img className="ss-hero__bg" src={heroBg} alt="" />
        <div className="ss-hero__inner">
          <span className="ss-hero__pill">✦ Sacred Products</span>
          <h1 className="ss-hero__title">
            Spiritual <span className="text-grad">Store</span>
          </h1>
          <p className="ss-hero__text">Authentic · Energized · Certified · Delivered across India</p>
        </div>
      </section>

      <section className="container ss-main">
        <div className="ss-toolbar">
          <label className="ss-search">
            <img src={iconSearch} alt="" className="ss-search__icon" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
            />
          </label>
          <button type="button" className="ss-shop" onClick={openDownload}>
            <img src={iconPhone} alt="" />
            Shop on App
          </button>
        </div>

        <div className="ss-chips" role="tablist" aria-label="Product categories">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              className={`ss-chip${active === c ? ' is-active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length > 0 ? (
          <div className="ss-grid">
            {visible.map((p) => (
              <ProductCard key={p.name} product={p} onBuy={openDownload} />
            ))}
          </div>
        ) : (
          <div className="ss-empty">
            <p className="ss-empty__title">No products found</p>
            <p className="ss-empty__text">Try a different search term or category.</p>
            <button type="button" className="ss-empty__btn" onClick={reset}>Clear filters</button>
          </div>
        )}
      </section>
    </div>
  )
}
