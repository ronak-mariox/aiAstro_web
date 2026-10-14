import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import phoneIcon from '../assets/modal/phone.svg'
import closeIcon from '../assets/modal/close.svg'
import arrowIcon from '../assets/modal/arrow.svg'
import verifyIcon from '../assets/modal/verify.svg'
import successIcon from '../assets/modal/success.svg'
import './DownloadAppModal.css'
import { leadsApi } from '../api'

const OTP_LEN = 6
const RESEND_SECONDS = 30

const HEADINGS = {
  1: { title: 'Enter Your Number', sub: () => 'To talk to astrologer, get the Vedrashi app' },
  2: { title: 'Verify OTP', sub: (p) => `OTP sent to +91 ${p}` },
  3: {
    title: (sent) => (sent ? 'Download Sent! 🎉' : 'Number Verified! 🎉'),
    sub: (_p, sent) => (sent ? 'App download link sent via SMS' : 'Download the app from your store below'),
  },
}

function StepIndicator({ step }) {
  return (
    <ol className="dm-steps" aria-label={`Step ${step} of 3`}>
      {[1, 2, 3].map((n) => {
        const state = n < step ? 'done' : n === step ? 'active' : 'todo'
        return (
          <li key={n} className="dm-steps__item">
            <span className={`dm-steps__dot dm-steps__dot--${state}`} aria-current={n === step ? 'step' : undefined}>
              {state === 'done' ? '✓' : n}
            </span>
            {n < 3 && <span className={`dm-steps__line${n < step ? ' dm-steps__line--done' : ''}`} />}
          </li>
        )
      })}
    </ol>
  )
}

export default function DownloadAppModal({ onClose }) {
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(Array(OTP_LEN).fill(''))
  const [seconds, setSeconds] = useState(RESEND_SECONDS)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  // From the verify call: whether the link SMS went out, and the store links (Settings → General).
  const [result, setResult] = useState({ linkSent: false, links: {} })
  const otpRefs = useRef([])
  const phoneRef = useRef(null)

  const phoneValid = phone.length === 10
  const otpComplete = otp.every((d) => d !== '')

  // Lock body scroll + Escape to close
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  // Resend countdown on step 2
  useEffect(() => {
    if (step !== 2 || seconds <= 0) return undefined
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [step, seconds])

  // Focus management per step
  useEffect(() => {
    if (step === 1) phoneRef.current?.focus()
    if (step === 2) otpRefs.current[0]?.focus()
  }, [step])

  // Saves the number as a lead in the admin panel and texts it an OTP.
  const requestOtp = async () => {
    setBusy(true)
    setError('')
    try {
      const res = await leadsApi.requestAppOtp(phone)
      setOtp(Array(OTP_LEN).fill(''))
      setSeconds(res.resendInSeconds || RESEND_SECONDS)
      return true
    } catch (err) {
      setError(err.fields?.phone || err.message)
      return false
    } finally {
      setBusy(false)
    }
  }

  const sendOtp = async (e) => {
    e.preventDefault()
    if (!phoneValid || busy) return
    if (await requestOtp()) setStep(2)
  }

  const verifyOtp = async (e) => {
    e.preventDefault()
    if (!otpComplete || busy) return
    setBusy(true)
    setError('')
    try {
      const res = await leadsApi.verifyAppOtp(phone, otp.join(''))
      setResult({ linkSent: Boolean(res.linkSent), links: res.links || {} })
      setStep(3)
    } catch (err) {
      setError(err.fields?.code || err.message)
    } finally {
      setBusy(false)
    }
  }

  const setOtpAt = (i, val) => {
    setOtp((prev) => {
      const next = [...prev]
      next[i] = val
      return next
    })
  }

  const onOtpChange = (i, e) => {
    const digits = e.target.value.replace(/\D/g, '')
    if (!digits) {
      setOtpAt(i, '')
      return
    }
    if (digits.length > 1) {
      fillFrom(i, digits)
      return
    }
    setOtpAt(i, digits)
    if (i < OTP_LEN - 1) otpRefs.current[i + 1]?.focus()
  }

  const fillFrom = (start, digits) => {
    setOtp((prev) => {
      const next = [...prev]
      for (let k = 0; k < digits.length && start + k < OTP_LEN; k++) next[start + k] = digits[k]
      return next
    })
    const last = Math.min(start + digits.length, OTP_LEN - 1)
    otpRefs.current[last]?.focus()
  }

  const onOtpKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) {
      e.preventDefault()
      setOtpAt(i - 1, '')
      otpRefs.current[i - 1]?.focus()
    } else if (e.key === 'ArrowLeft' && i > 0) {
      otpRefs.current[i - 1]?.focus()
    } else if (e.key === 'ArrowRight' && i < OTP_LEN - 1) {
      otpRefs.current[i + 1]?.focus()
    }
  }

  const onOtpPaste = (i, e) => {
    const digits = e.clipboardData.getData('text').replace(/\D/g, '')
    if (!digits) return
    e.preventDefault()
    fillFrom(i, digits)
  }

  const resend = async () => {
    if (busy) return
    if (await requestOtp()) otpRefs.current[0]?.focus()
  }

  const changeNumber = () => {
    setOtp(Array(OTP_LEN).fill(''))
    setError('')
    setStep(1)
  }

  const head = HEADINGS[step]

  return (
    <div className="dm-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="dm-dialog" role="dialog" aria-modal="true" aria-labelledby="dm-title">
        <div className="dm-head">
          <button type="button" className="dm-close" onClick={onClose} aria-label="Close">
            <img src={closeIcon} alt="" />
          </button>
          <div className="dm-head__icon">
            <img src={phoneIcon} alt="" />
          </div>
          <StepIndicator step={step} />
          <h2 id="dm-title" className="dm-head__title">
            {typeof head.title === 'function' ? head.title(result.linkSent) : head.title}
          </h2>
          <p className="dm-head__sub">{head.sub(phone, result.linkSent)}</p>
        </div>

        {step === 1 && (
          <form className="dm-body" onSubmit={sendOtp} noValidate>
            <label className="dm-label" htmlFor="dm-phone">Mobile Number</label>
            <div className="dm-phone">
              <span className="dm-phone__code">🇮🇳 +91</span>
              <input
                id="dm-phone"
                ref={phoneRef}
                className="dm-phone__input"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="98765 43210"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              />
            </div>
            <div className="dm-note dm-note--amber">
              📲 You&apos;ll receive an OTP + app download link on this number. Standard SMS rates apply.
            </div>
            {error && <p className="dm-error" role="alert">{error}</p>}
            <button type="submit" className="dm-btn" disabled={!phoneValid || busy}>
              {busy ? 'Sending…' : 'Send OTP'} <img src={arrowIcon} alt="" />
            </button>
            <p className="dm-fine">
              By continuing, you agree to our{' '}
              <Link to="/terms" onClick={onClose}>Terms</Link> &amp;{' '}
              <Link to="/privacy-policy" onClick={onClose}>Privacy Policy</Link>
            </p>
          </form>
        )}

        {step === 2 && (
          <form className="dm-body" onSubmit={verifyOtp} noValidate>
            <p className="dm-label dm-label--center" id="dm-otp-label">Enter {OTP_LEN}-digit OTP</p>
            <div className="dm-otp" role="group" aria-labelledby="dm-otp-label">
              {otp.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => (otpRefs.current[i] = el)}
                  className={`dm-otp__box${d ? ' dm-otp__box--filled' : ''}`}
                  type="text"
                  inputMode="numeric"
                  autoComplete={i === 0 ? 'one-time-code' : 'off'}
                  aria-label={`Digit ${i + 1}`}
                  maxLength={OTP_LEN}
                  value={d}
                  onChange={(e) => onOtpChange(i, e)}
                  onKeyDown={(e) => onOtpKeyDown(i, e)}
                  onPaste={(e) => onOtpPaste(i, e)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            <div className="dm-note dm-note--green">
              <p>OTP sent to <strong>+91 {phone}</strong></p>
              <button type="button" className="dm-link" onClick={changeNumber}>Change number?</button>
            </div>
            {error && <p className="dm-error" role="alert">{error}</p>}
            <button type="submit" className="dm-btn dm-btn--gap20" disabled={!otpComplete || busy}>
              {busy ? 'Verifying…' : 'Verify OTP'} <img src={verifyIcon} alt="" />
            </button>
            <p className="dm-fine dm-fine--gap20">
              {seconds > 0 ? (
                <>Resend OTP in <strong className="dm-red">{seconds}s</strong></>
              ) : (
                <button type="button" className="dm-link dm-link--semibold" onClick={resend}>Resend OTP</button>
              )}
            </p>
          </form>
        )}

        {step === 3 && (
          <div className="dm-body">
            <div className="dm-success">
              <img src={successIcon} alt="" />
            </div>
            <h3 className="dm-verified">Number Verified! 🎉</h3>
            {result.linkSent ? (
              <>
                <p className="dm-verified__sub">App download link sent to <strong>+91 {phone}</strong></p>
                <div className="dm-sms">
                  <p className="dm-sms__title">📲 SMS Sent!</p>
                  <p className="dm-sms__text">Open the SMS and tap the link to download the Vedrashi app.</p>
                </div>
              </>
            ) : (
              <p className="dm-verified__sub">Thanks! Get the Vedrashi app from your store:</p>
            )}
            <div className="dm-stores">
              {result.links.ios && (
                <a className="dm-store" href={result.links.ios} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">🍎</span> App Store
                </a>
              )}
              {result.links.android && (
                <a className="dm-store" href={result.links.android} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">🤖</span> Play Store
                </a>
              )}
            </div>
            <button type="button" className="dm-btn dm-btn--done" onClick={onClose}>Done</button>
            <p className="dm-fine dm-fine--flush">
              First consultation at just <strong className="dm-red">₹1</strong> on the app!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
