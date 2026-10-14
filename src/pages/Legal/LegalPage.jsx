import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import backArrow from '../../assets/legal/back-arrow.svg'
import { LEGAL_DOCS, LEGAL_NAV } from './legalContent'
import './LegalPage.css'

function Block({ block }) {
  const style = block.mt != null ? { marginTop: block.mt } : undefined

  switch (block.type) {
    case 'lead':
      return <p className="lg-lead" style={style}>{block.text}</p>

    case 'h2':
      return (
        <h2 className="lg-h2" style={style}>
          {block.text}
        </h2>
      )

    case 'numbered':
      return (
        <section className="lg-num" style={style}>
          <h2 className="lg-num__head">
            <span className="lg-num__badge">{block.num}</span>
            <span className="lg-num__title">{block.title}</span>
          </h2>
          <p className="lg-num__text">{block.text}</p>
        </section>
      )

    case 'p':
      return <p className="lg-p" style={style}>{block.text}</p>

    case 'note':
      return <p className="lg-note" style={style}>{block.text}</p>

    case 'list':
      return (
        <ul className="lg-list" style={style}>
          {block.items.map((it, i) =>
            it.label ? (
              <li key={i} className="lg-list__labeled">
                <strong>{it.label}</strong> {it.text}
              </li>
            ) : (
              <li key={i} className="lg-list__bullet">
                <span className="lg-dot" aria-hidden="true">•</span>
                <span>{it.text}</span>
              </li>
            ),
          )}
        </ul>
      )

    case 'bullets':
      return (
        <ul className="lg-bullets" style={style}>
          {block.items.map((t, i) => (
            <li key={i}>
              <span className="lg-dot" aria-hidden="true">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )

    case 'checklist':
      return (
        <ul className="lg-checks" style={style}>
          {block.items.map((t, i) => (
            <li key={i}>
              <span className="lg-checks__mark" aria-hidden="true">✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )

    case 'eligibility':
      return (
        <div className="lg-elig" style={style}>
          {block.items.map((it, i) => (
            <div key={i} className={`lg-elig__card ${it.ok ? 'is-ok' : 'is-no'}`}>
              <span className="lg-elig__icon" aria-label={it.ok ? 'Eligible' : 'Not eligible'}>
                {it.ok ? '✓' : '✗'}
              </span>
              <div>
                <p className="lg-elig__title">{it.title}</p>
                <p className="lg-elig__note">{it.note}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case 'steps':
      return (
        <ol className="lg-steps" style={style}>
          {block.items.map((t, i) => (
            <li key={i}>
              <span className="lg-steps__num">{i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      )

    case 'table':
      return (
        <div className="lg-table-wrap" style={style}>
          <table className="lg-table">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (c === 0 ? <th key={c} scope="row">{cell}</th> : <td key={c}>{cell}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'tiers':
      return (
        <div className="lg-tiers" style={style}>
          {block.items.map((it, i) => (
            <div key={i} className="lg-tiers__row">
              <span className="lg-tiers__label">{it.label}</span>
              <span className={`lg-tiers__value tone-${it.tone}`}>{it.value}</span>
            </div>
          ))}
        </div>
      )

    case 'tip':
      return (
        <p className="lg-tip" style={style}>
          {block.icon} <strong>{block.label}</strong> {block.text}
        </p>
      )

    case 'callout':
      return (
        <p className="lg-callout" style={style}>
          {block.pre}
          <Link to={block.link.to}>{block.link.text}</Link>
          {block.post}
        </p>
      )

    case 'cookieCards':
      return (
        <div className="lg-cookies" style={style}>
          {block.items.map((it) => (
            <article key={it.title} className="lg-cookie">
              <div className="lg-cookie__head">
                <h3>{it.title}</h3>
                <span className={`lg-cookie__badge ${it.required ? 'is-required' : ''}`}>{it.badge}</span>
              </div>
              <p className="lg-cookie__text">{it.text}</p>
              <div className="lg-cookie__codes">
                {it.codes.map((c) => (
                  <code key={c}>{c}</code>
                ))}
              </div>
              <p className="lg-cookie__dur">{it.duration}</p>
            </article>
          ))}
        </div>
      )

    case 'defs':
      return (
        <dl className="lg-defs" style={style}>
          {block.items.map((it) => (
            <div key={it.label} className="lg-defs__row">
              <dt>{it.label}</dt>
              <dd>{it.text}</dd>
            </div>
          ))}
        </dl>
      )

    case 'grid':
      return (
        <div className="lg-grid" style={style}>
          {block.items.map((it) => (
            <div key={it.title} className="lg-grid__card">
              <h4>{it.title}</h4>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      )

    default:
      return null
  }
}

export default function LegalPage({ doc = 'privacy' }) {
  const data = LEGAL_DOCS[doc] ?? LEGAL_DOCS.privacy

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [doc])

  return (
    <div className="lg-page">
      <section className="lg-hero">
        <div className="lg-hero__inner">
          <h1 className="lg-hero__title">{data.title}</h1>
          <p className="lg-hero__sub">{data.subtitle}</p>
          <p className="lg-hero__date">{data.updated}</p>
        </div>
      </section>

      <div className="lg-wrap">
        <aside className="lg-side">
          <div className="lg-side__card">
            <p className="lg-side__label">Legal Documents</p>
            <nav className="lg-nav" aria-label="Legal documents">
              {LEGAL_NAV.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.to}
                  className={({ isActive }) => `lg-nav__link${isActive ? ' is-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/contact" className="lg-nav__link lg-nav__link--contact">
                Contact Us →
              </Link>
            </nav>
            <div className="lg-side__help">
              <p>Questions?</p>
              <Link to="/contact">Contact Us →</Link>
            </div>
          </div>
        </aside>

        <article className={`lg-card lg-card--${doc}`}>
          <Link to="/" className="lg-back">
            <img src={backArrow} alt="" />
            Back to Home
          </Link>
          <div
            className="lg-body"
            style={data.sectionGap ? { '--lg-section-gap': `${data.sectionGap}px` } : undefined}
          >
            {data.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
