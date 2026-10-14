import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDownloadModal } from '../../components/DownloadModalContext'
import { SERVICES } from './serviceData'
import './ServiceDetail.css'

import iconBack from '../../assets/services/icon-back.svg'
import iconCheck from '../../assets/services/icon-check.svg'
import starFilled from '../../assets/services/star-filled.svg'
import starEmpty from '../../assets/services/star-empty.svg'

const CHECKS = ['Verified experts only', 'Secure & private', '24/7 available']

function SectionHead({ badge, title }) {
  return (
    <div className="sd-head">
      <span className="sd-head__badge">✦ {badge}</span>
      <h2 className="sd-head__title">{title}</h2>
    </div>
  )
}

// The "Most Popular" plan is highlighted by default; hovering (or tapping) another plan moves the highlight to it.
function Plans({ plans, onSelect }) {
  const popularIndex = Math.max(0, plans.findIndex((p) => p.popular))
  const [active, setActive] = useState(popularIndex)

  return (
    <div className="sd-plans" onMouseLeave={() => setActive(popularIndex)}>
      {plans.map((p, i) => {
        const isActive = active === i
        return (
          <div
            key={p.name}
            className={`sd-plan${p.popular ? ' sd-plan--popular' : ''}${isActive ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            {p.popular && <span className="sd-plan__tag">Most Popular</span>}
            <h3 className="sd-plan__name">{p.name}</h3>
            <p className="sd-plan__price">{p.price}</p>
            <p className="sd-plan__text">{p.text}</p>
            <button
              type="button"
              className={`sd-btn sd-plan__btn ${isActive ? 'sd-btn--fill' : 'sd-btn--outline'}`}
              onClick={onSelect}
            >
              Get Started
            </button>
          </div>
        )
      })}
    </div>
  )
}

function Faq({ items }) {
  const [open, setOpen] = useState(-1)
  return (
    <div className="sd-faq__list">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={`sd-faq__item${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="sd-faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="sd-faq__q-text">{f.q}</span>
              <span className="sd-faq__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="sd-faq__a">{f.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { openDownload } = useDownloadModal()
  const s = SERVICES[slug]

  if (!s) return <Navigate to="/" replace />

  return (
    <div className="sd" style={s.theme} key={slug}>
      {/* Hero */}
      <section className="sd-hero">
        <img
          className="sd-hero__img"
          src={s.hero}
          alt=""
          style={s.heroPosition ? { objectPosition: s.heroPosition } : undefined}
        />
        <div className="sd-hero__overlay" />
        <div className="sd-hero__content">
          <button type="button" className="sd-hero__back" onClick={() => navigate(-1)}>
            <img src={iconBack} alt="" />
            <span>Back</span>
          </button>
          <div className={`sd-hero__icon${s.hideIcon ? ' is-hidden' : ''}`} aria-hidden="true">{s.icon}</div>
          <h1 className="sd-hero__title">{s.title}</h1>
          <p className="sd-hero__sub">{s.subtitle}</p>
        </div>
      </section>

      <div className="sd-body">
        {/* About + side card */}
        <section className="sd-about">
          <div className="sd-about__text">
            <h2 className="sd-about__title">About This Service</h2>
            <p className="sd-about__desc">{s.about}</p>
          </div>
          <aside className="sd-side">
            <div className="sd-side__card">
              <p className="sd-side__eyebrow">Get started today</p>
              <h3 className="sd-side__title">{s.cardTitle}</h3>
              <p className="sd-side__desc">{s.subtitle}</p>
              <button type="button" className="sd-btn sd-btn--fill sd-side__btn" onClick={openDownload}>
                {s.ctaLabel}
              </button>
              <p className="sd-side__note">📲 Available on Vedrashi App · Download free</p>
              <ul className="sd-side__checks">
                {CHECKS.map((c) => (
                  <li key={c}>
                    <img src={iconCheck} alt="" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* How it works */}
        <section className="sd-section">
          <SectionHead badge="Process" title="How It Works" />
          <ol className="sd-steps">
            {s.steps.map((st, i) => (
              <li key={st.title} className="sd-step">
                <div className="sd-step__card">
                  <span className="sd-step__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="sd-step__title">{st.title}</h3>
                  <p className="sd-step__text">{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What you get */}
        <section className="sd-section">
          <SectionHead badge="Why Choose Us" title="What You Get" />
          <div className="sd-features">
            {s.features.map((f) => (
              <div key={f.title} className="sd-feature">
                <span className="sd-feature__icon" aria-hidden="true">{f.icon}</span>
                <div>
                  <h3 className="sd-feature__title">{f.title}</h3>
                  <p className="sd-feature__text">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="sd-section">
          <SectionHead badge="Pricing" title="Simple, Transparent Pricing" />
          <Plans plans={s.plans} onSelect={openDownload} />
        </section>

        {/* Reviews */}
        <section className="sd-section">
          <SectionHead badge="Reviews" title="What Our Users Say" />
          <div className="sd-reviews">
            {s.reviews.map((r) => (
              <figure key={r.name} className="sd-review">
                <div className="sd-review__stars" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <img key={i} src={i < r.rating ? starFilled : starEmpty} alt="" />
                  ))}
                </div>
                <blockquote className="sd-review__text">{r.text}</blockquote>
                <figcaption className="sd-review__who">
                  <span className="sd-review__name">{r.name}</span>
                  <span className="sd-review__city">{r.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="sd-section sd-faq">
          <SectionHead badge="FAQs" title="Frequently Asked Questions" />
          <Faq key={slug} items={s.faqs} />
        </section>

        {/* CTA */}
        <section className="sd-section">
          <div className="sd-cta">
            <div className="sd-cta__icon" aria-hidden="true">{s.icon}</div>
            <h2 className="sd-cta__title">Ready to Begin?</h2>
            <p className="sd-cta__text">{s.ctaText}</p>
            <button type="button" className="sd-btn sd-btn--fill sd-cta__btn" onClick={openDownload}>
              {s.ctaLabel}
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
