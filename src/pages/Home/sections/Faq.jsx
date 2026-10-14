import { useState } from 'react'
import SectionHead from './SectionHead'
import icChevOpen from '../../../assets/home/faq-chev-open.svg'
import icChev from '../../../assets/home/faq-chev.svg'

const FAQS = [
  { q: 'How do I connect with an astrologer on Vedrashi?', a: "Simply browse our verified astrologer profiles, choose one based on expertise and rating, then click 'Consult Now' to start an instant call or chat session. No appointment needed — many experts are available 24/7." },
  { q: 'Are all astrologers on Vedrashi verified?', a: 'Yes. Every astrologer and pandit goes through a multi-step verification covering identity, credentials, experience and a live assessment before they are listed on Vedrashi.' },
  { q: 'What is the cost of a consultation?', a: 'Consultations start from ₹15/min and vary by expert, experience and service. The per-minute rate is always shown on the profile before you connect, and you are only charged for the time you use.' },
  { q: 'How do I book a pandit for a puja or ceremony?', a: 'Go to Book Pandit, pick the ceremony, choose your preferred date, city and language, and confirm. A verified pandit is assigned and all samagri details are shared with you in advance.' },
  { q: 'Is my personal data and consultation secure?', a: 'Absolutely. All data is protected with 256-bit SSL encryption, consultations are completely private, and we never share your personal details with third parties.' },
  { q: 'Can I get a free Kundli report?', a: 'Yes. You can generate a free basic Kundli on the Vedrashi app using your birth date, time and place. Detailed reports and personalised analysis are available from our astrologers.' },
  { q: 'What languages are consultations available in?', a: 'Consultations are available in Hindi, English, Tamil, Telugu, Marathi, Bengali, Gujarati and several other regional languages. Filter experts by language to find the right fit.' },
  { q: 'How accurate are the astrological predictions?', a: 'Our experts follow authentic Vedic principles and accurate birth details make a big difference. With a 4.9/5 average rating from 50,000+ reviews, users consistently find the guidance insightful.' },
  { q: 'Can I get a refund if I am unsatisfied?', a: 'If you face a technical issue or are genuinely unsatisfied with a session, contact support within 24 hours. Eligible refunds are credited back to your Vedrashi wallet as per our refund policy.' },
  { q: 'Do you offer corporate or bulk consultation packages?', a: 'Yes. We offer customised packages for corporate wellness programs, events and bulk puja bookings. Reach out through the contact form below and our team will get in touch.' },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="hm-section hm-faq">
      <div className="container hm-faq__inner">
        <SectionHead pill="Got Questions?" lead="Frequently Asked" grad="Questions" size="md" />
        <div className="hm-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`hm-faq__item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="hm-faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <img src={isOpen ? icChevOpen : icChev} alt="" />
                </button>
                {isOpen && (
                  <div className="hm-faq__a">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
