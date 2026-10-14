import { useDownloadModal } from '../../../components/DownloadModalContext'
import icPhone from '../../../assets/home/app-phone.svg'
import icCalendar from '../../../assets/home/app-calendar.svg'
import icChart from '../../../assets/home/app-chart.svg'
import icWallet from '../../../assets/home/app-wallet.svg'
import icGplay from '../../../assets/home/app-gplay.svg'
import icApple from '../../../assets/home/app-apple.svg'

const FEATURES = [
  { icon: icPhone, label: 'Talk To Astrologer' },
  { icon: icCalendar, label: 'Book Pandit' },
  { icon: icChart, label: 'Track Consultations' },
  { icon: icWallet, label: 'Wallet Benefits' },
]

const STORES = [
  { icon: icGplay, small: 'Get it on', big: 'Google Play' },
  { icon: icApple, small: 'Download on the', big: 'App Store' },
]

const QUICK = ['📞', '📅', '🌙', '💎']

// Sparkle dots from the design (x, y in the 1441×724 section frame).
const DOTS = [
  [738, 233], [1390, 254], [1313, 495], [863, 699], [692, 527], [543, 122], [821, 602], [1044, 416],
  [578, 280], [966, 445], [419, 252], [825, 284], [876, 116], [1024, 547], [354, 372], [977, 183],
  [591, 194], [1307, 487], [729, 311], [791, 124], [1005, 329], [778, 644], [144, 629], [600, 399],
  [999, 57], [70, 595], [1080, 427], [88, 214], [607, 348], [1030, 31], [1377, 646], [164, 156],
  [599, 206], [53, 722], [39, 464], [1288, 511], [1094, 159], [100, 76], [765, 531], [529, 342],
]

export default function AppPromo() {
  const { openDownload } = useDownloadModal()

  return (
    <section className="hm-app">
      <div className="hm-app__fx" aria-hidden="true">
        {DOTS.map(([x, y]) => (
          <i key={`${x}-${y}`} style={{ left: `${(x / 1441) * 100}%`, top: `${(y / 724) * 100}%` }} />
        ))}
        <span className="hm-app__glow" />
      </div>

      <div className="container hm-app__inner">
        <div className="hm-app__copy">
          <span className="hm-pill">✦ Get The App</span>
          <h2 className="hm-h2 hm-h2--lg">
            Get The <span className="text-grad">Vedrashi App</span>
          </h2>
          <p className="hm-app__text">
            Your personal spiritual companion — available anytime, anywhere. Connect with astrologers, book pandits, and
            track your cosmic journey on the go.
          </p>
          <ul className="hm-app__features">
            {FEATURES.map((f) => (
              <li key={f.label}>
                <span className="hm-app__feat-icon">
                  <img src={f.icon} alt="" />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
          <div className="hm-app__stores">
            {STORES.map((s) => (
              <button key={s.big} type="button" className="hm-app__store" onClick={openDownload}>
                <img src={s.icon} alt="" />
                <span>
                  <small>{s.small}</small>
                  <strong>{s.big}</strong>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="hm-app__visual">
          <div className="hm-phone">
            <span className="hm-phone__glow" aria-hidden="true" />
            <div className="hm-phone__body">
              <div className="hm-phone__notch">
                <span />
              </div>
              <div className="hm-phone__screen">
                <div className="hm-phone__hello">
                  <span>
                    <small>Good morning,</small>
                    <strong>Priya ✨</strong>
                  </span>
                  <span className="hm-phone__avatar">PS</span>
                </div>
                <div className="hm-phone__wallet">
                  <small>Wallet Balance</small>
                  <strong>₹ 500</strong>
                  <small>Get ₹100 bonus on recharge</small>
                </div>
                <div className="hm-phone__quick">
                  {QUICK.map((q) => (
                    <span key={q}>{q}</span>
                  ))}
                </div>
                <div className="hm-phone__astro">
                  <span className="hm-phone__astro-av">🧘</span>
                  <span className="hm-phone__astro-info">
                    <strong>Pt. Rajesh</strong>
                    <small>⭐ 4.9 • Online Now</small>
                  </span>
                  <span className="hm-phone__call">Call</span>
                </div>
                <div className="hm-phone__lucky">
                  <strong>Today&apos;s Lucky Color</strong>
                  <small>Wear yellow today for prosperity 🌟</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
