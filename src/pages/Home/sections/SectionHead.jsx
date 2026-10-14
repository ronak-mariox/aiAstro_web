export default function SectionHead({ pill, lead, grad, size = 'lg', align = 'center', sub }) {
  return (
    <div className={`hm-head hm-head--${align}`}>
      <span className="hm-pill">✦ {pill}</span>
      <h2 className={`hm-h2 hm-h2--${size}`}>
        {lead} <span className="text-grad">{grad}</span>
      </h2>
      {sub && <p className="hm-head__sub">{sub}</p>}
    </div>
  )
}
