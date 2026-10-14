import heroTalk from '../../assets/services/hero-talk-to-astrologer.png'
import heroPandit from '../../assets/services/hero-book-pandit.png'
import heroProducts from '../../assets/services/hero-spiritual-products.png'
import heroEPuja from '../../assets/services/hero-e-puja.jpg'

/*
 * Per-slug theme values are applied as CSS custom properties on the page root
 * (see ServiceDetail.css for how each one is consumed).
 */
const THEME_RED = {
  '--sd-overlay':
    'linear-gradient(165deg, rgba(200,16,46,0.867) 0%, rgba(158,13,36,0.825) 25%, rgba(111,9,25,0.784) 50%, rgba(58,5,13,0.742) 75%, rgba(0,0,0,0.7) 100%)',
  '--sd-badge-bg': 'rgba(200,16,46,0.03)',
  '--sd-badge-border': 'rgba(200,16,46,0.19)',
  '--sd-badge-text': '#c8102e',
  '--sd-step-bg': 'linear-gradient(135deg, #c8102e 0%, #ffd700 100%)',
  '--sd-line': 'rgba(200,16,46,0.25)',
  '--sd-line-end': 'rgba(200,16,46,0)',
  '--sd-cta-bg': 'linear-gradient(90deg, #c8102e 0%, #ffd700 100%)',
  '--sd-accent': '#c8102e',
  '--sd-popular-border': '#c8102e',
  '--sd-popular-bg': 'linear-gradient(143deg, rgba(200,16,46,0.063) 0%, rgba(255,215,0,0.063) 100%)',
}

const THEME_PANDIT = {
  ...THEME_RED,
  '--sd-overlay': 'linear-gradient(165deg, rgba(214,120,6,0.867) 0%, rgba(0,0,0,0.7) 100%)',
  '--sd-badge-bg': 'rgba(6,214,160,0.03)',
  '--sd-badge-border': 'rgba(6,214,160,0.19)',
  '--sd-step-bg': 'linear-gradient(135deg, rgb(203,27,44) 0%, rgb(254,212,1) 100%)',
  '--sd-line': 'rgba(6,214,160,0.25)',
  '--sd-line-end': 'rgba(6,214,160,0)',
  '--sd-popular-bg': 'linear-gradient(143deg, rgba(6,214,160,0.063) 0%, rgba(255,215,0,0.063) 100%)',
}

const THEME_GOLD = {
  '--sd-overlay':
    'linear-gradient(165deg, rgba(255,215,0,0.867) 0%, rgba(201,169,0,0.825) 25%, rgba(141,119,0,0.784) 50%, rgba(75,63,0,0.742) 75%, rgba(0,0,0,0.7) 100%)',
  '--sd-badge-bg': 'rgba(255,215,0,0.03)',
  '--sd-badge-border': 'rgba(255,215,0,0.19)',
  '--sd-badge-text': '#314158',
  '--sd-step-bg': '#ffd700',
  '--sd-line': 'rgba(255,215,0,0.25)',
  '--sd-line-end': 'rgba(255,215,0,0)',
  '--sd-cta-bg': '#ffd700',
  '--sd-accent': '#314158',
  '--sd-popular-border': '#314158',
  '--sd-popular-bg': 'rgba(255,215,0,0.06)',
}

const THEME_EPUJA = {
  '--sd-overlay': 'none',
  '--sd-badge-bg': 'rgba(6,214,160,0.03)',
  '--sd-badge-border': 'rgba(6,214,160,0.19)',
  '--sd-badge-text': '#06d6a0',
  '--sd-step-bg': 'linear-gradient(135deg, rgb(201,18,45) 0%, rgb(255,215,0) 100%)',
  '--sd-line': 'rgba(6,214,160,0.25)',
  '--sd-line-end': 'rgba(6,214,160,0)',
  '--sd-cta-bg': 'linear-gradient(90deg, #c9152e 0%, #ffd601 100%)',
  '--sd-accent': '#1a1a1a',
  '--sd-popular-border': 'rgba(26,26,26,0.08)',
  '--sd-popular-bg': 'linear-gradient(143deg, rgba(255,255,255,0.063) 0%, rgba(255,215,0,0.063) 100%)',
}

const PANDIT_CONTENT = {
  about:
    "Finding a knowledgeable, reliable pandit for sacred ceremonies shouldn't be difficult or anxiety-inducing. Vedrashi's Pandit Network connects you with background-verified, tradition-trained priests across 150+ Indian cities. From simple daily pujas to elaborate wedding ceremonies, our pandits bring authenticity, punctuality, and devotion to every ritual.",
  cardTitle: 'Book Pandit',
  ctaLabel: 'Book a Pandit Now',
  steps: [
    { title: 'Select Your Ceremony', text: 'Choose from 50+ ceremony types — Grih Pravesh, Vivah, Satyanarayan, Rudrabhishek, and more.' },
    { title: 'Choose Your Pandit', text: 'Browse profiles with photos, reviews, experience, and specializations. Filter by city and language.' },
    { title: 'Book & Confirm', text: "Select your date and time. Get instant booking confirmation with your pandit's contact number." },
    { title: 'Ceremony Day', text: 'Your pandit arrives on time with all required samagri. You just prepare the space and family.' },
  ],
  features: [
    { icon: '✅', title: 'Background Verified', text: 'Every pandit is identity-verified, reference-checked, and rated by previous users.' },
    { icon: '🎓', title: 'Tradition Trained', text: 'Our pandits come from legitimate Vedic institutions and guru-shishya lineages.' },
    { icon: '📦', title: 'Samagri Option', text: 'Request the pandit to bring all puja materials. No need to run last-minute errands.' },
    { icon: '🕐', title: 'Muhurat Planning', text: 'Our pandits help select the most auspicious date and time for your ceremony.' },
    { icon: '🌍', title: 'Pan-India Network', text: 'Available in 150+ cities including all metros, tier-2 cities, and pilgrimage towns.' },
    { icon: '💬', title: 'Ceremony Explanation', text: 'Our pandits explain each ritual as they perform it, so the ceremony is meaningful for all.' },
  ],
  plans: [
    { name: 'Small Puja', price: 'From ₹500', text: 'Simple pujas like Ganesh Puja, Lakshmi Puja, daily rituals.' },
    { name: 'Major Ceremony', price: '₹1,100–₹2,500', text: 'Grih Pravesh, Satyanarayan, Havan, Rudrabhishek.', popular: true },
    { name: 'Wedding Package', price: '₹5,000+', text: 'Full wedding ceremonies including multi-day rituals and all vidhi.' },
  ],
  reviews: [
    { rating: 5, text: '"Our Grih Pravesh was performed so beautifully. The pandit explained every step. Our home truly feels blessed."', name: 'Anjali Verma', city: 'Delhi' },
    { rating: 5, text: '"Punctual, knowledgeable, and wonderfully prepared. Made our Satyanarayan Katha a memorable experience."', name: 'Suresh Naik', city: 'Mumbai' },
    { rating: 5, text: '"Finding a good pandit in a new city was my biggest worry. Vedrashi solved it completely."', name: 'Preethi Rao', city: 'Hyderabad' },
  ],
  faqs: [
    { q: 'What ceremonies can I book?', a: 'You can book 50+ ceremonies including Grih Pravesh, Vivah, Satyanarayan Katha, Rudrabhishek, Havan, Namkaran, Mundan and daily pujas like Ganesh and Lakshmi Puja.' },
    { q: 'Do pandits bring their own puja materials?', a: 'Yes — choose the Samagri Option while booking and your pandit will bring every item required for the ceremony, so you have nothing to arrange.' },
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 3–5 days ahead, and 2–4 weeks ahead for weddings or festival dates. Same-day bookings are possible subject to availability.' },
    { q: 'Are pandits available outside India?', a: 'Our in-person network covers 150+ Indian cities. For families abroad, ceremonies can be performed on your behalf and streamed live through E-Puja on the Vedrashi app.' },
  ],
  ctaText: 'Download the Vedrashi app and access Book Pandit anytime, anywhere. Your first session starts at just ₹1.',
}

export const SERVICES = {
  'talk-to-astrologer': {
    theme: THEME_RED,
    hero: heroTalk,
    icon: '📞',
    title: 'Talk To Astrologer',
    subtitle: "Instant voice guidance from India's top Vedic experts",
    about:
      "Connect instantly with India's most trusted Vedic astrologers via voice call. Get personalized guidance on love, career, health, marriage, and life decisions — from the comfort of your home. Our 500+ verified astrologers are available 24/7, speaking Hindi, English, Tamil, Telugu, Marathi, and more.",
    cardTitle: 'Talk To Astrologer',
    ctaLabel: 'Talk to Astrologer Now',
    steps: [
      { title: 'Choose Your Astrologer', text: 'Browse profiles, read reviews, check expertise and availability. Filter by language, specialty, or budget.' },
      { title: 'Add Balance & Connect', text: "Add wallet balance starting ₹100. Click 'Call Now' and connect within seconds — no waiting rooms." },
      { title: 'Your Consultation', text: 'Discuss your concerns openly. Share your birth details for an accurate Kundli-based reading.' },
      { title: 'Follow-Up Guidance', text: 'Receive remedies, gemstone suggestions, and mantras via in-app chat after your call.' },
    ],
    features: [
      { icon: '⚡', title: 'Instant Connection', text: 'Connect with an available astrologer within 30 seconds. No appointments needed.' },
      { icon: '🔒', title: '100% Private', text: 'All calls are encrypted and private. Your conversation stays between you and your astrologer.' },
      { icon: '✅', title: 'Verified Experts', text: 'Every astrologer passes a rigorous 3-round vetting including test consultations and background checks.' },
      { icon: '💰', title: 'Pay Per Minute', text: 'No session fees. Pay only for the time you use. Starting from just ₹10/minute.' },
      { icon: '🌍', title: 'Any Language', text: 'Consult in Hindi, English, Tamil, Telugu, Marathi, Gujarati, Bengali, and more.' },
      { icon: '⭐', title: 'Rated 4.9/5', text: 'Over 50,000 verified reviews from satisfied users across India.' },
    ],
    plans: [
      { name: 'Starter', price: '₹10/min', text: 'New astrologers building reviews. Great for basic queries.' },
      { name: 'Expert', price: '₹15–25/min', text: 'Verified experts with 5+ years and 1000+ reviews.', popular: true },
      { name: 'Senior', price: '₹30–50/min', text: 'Master astrologers with 15+ years and 5000+ reviews.' },
    ],
    reviews: [
      { rating: 5, text: '"I was skeptical at first but my consultation with Pt. Rajesh changed my perspective entirely. His predictions about my career shift were spot on!"', name: 'Priya Mehta', city: 'Mumbai' },
      { rating: 5, text: '"Consulted about my marriage and the insights were incredibly accurate. The remedies suggested have really helped."', name: 'Suresh Kumar', city: 'Bengaluru' },
      { rating: 4, text: '"Quick connection, knowledgeable astrologer, and very affordable. Will definitely consult again."', name: 'Ananya Singh', city: 'Delhi' },
    ],
    faqs: [
      { q: 'What information do I need for a consultation?', a: 'Keep your date, exact time and place of birth handy. These details let the astrologer prepare an accurate Kundli-based reading for you.' },
      { q: 'How do I know if an astrologer is genuine?', a: 'Every astrologer on Vedrashi clears a 3-round vetting with test consultations and background checks. You can also read verified reviews and ratings on each profile.' },
      { q: "What if I'm not satisfied with my consultation?", a: 'Reach out to our support team from the app within 24 hours. We review every complaint and offer a wallet refund where the consultation did not meet our standards.' },
      { q: 'Is my personal information safe?', a: 'Yes. All calls are encrypted and your birth details and conversations are never shared with anyone outside your consultation.' },
    ],
    ctaText: 'Download the Vedrashi app and access Talk To Astrologer anytime, anywhere. Your first session starts at just ₹1.',
  },

  'book-pandit': {
    theme: THEME_PANDIT,
    hero: heroPandit,
    icon: '🪔',
    title: 'Book Pandit',
    subtitle: 'Authentic Vedic ceremonies performed by verified priests',
    ...PANDIT_CONTENT,
  },

  'spiritual-products': {
    theme: THEME_GOLD,
    hero: heroProducts,
    icon: '💎',
    title: 'Spiritual Products',
    subtitle: 'Authentic, energized, and certified sacred items',
    about:
      "Vedrashi's Spiritual Store is India's most trusted marketplace for authentic spiritual products. Every item is carefully sourced, quality-verified, and where applicable — energized through proper Vedic rituals. From Nepal-origin Rudraksha beads to certified gemstones from Sri Lanka, we ensure you receive only the genuine article.",
    cardTitle: 'Spiritual Products',
    ctaLabel: 'Shop Spiritual Store',
    steps: [
      { title: 'Browse & Select', text: 'Explore our curated catalog of Rudraksha, gemstones, yantras, puja kits, and spiritual books.' },
      { title: 'Get Expert Advice', text: 'Not sure what you need? Chat with our free astrology assistant for personalized product recommendations.' },
      { title: 'Secure Payment', text: 'Pay via UPI, card, or wallet. All transactions secured by industry-standard encryption.' },
      { title: 'Energized & Delivered', text: 'Items are energized (prana pratishtha) before dispatch and delivered in 5-7 days across India.' },
    ],
    features: [
      { icon: '📜', title: 'Authenticity Certificate', text: 'Lab certificates for all gemstones. Origin certificates for Rudraksha beads.' },
      { icon: '🕉️', title: 'Vedic Energization', text: 'Yantras, malas, and spiritual items are energized by qualified pandits before shipping.' },
      { icon: '🔬', title: 'Lab Tested', text: 'All gemstones are tested by GIA or IGI certified laboratories for authenticity.' },
      { icon: '↩️', title: '7-Day Returns', text: 'Sealed products can be returned within 7 days. No questions asked for defective items.' },
      { icon: '🚚', title: 'Free Delivery', text: 'Free pan-India delivery on orders above ₹999.' },
      { icon: '📞', title: 'Expert Guidance', text: 'Free consultation on gemstone selection based on your birth chart.' },
    ],
    plans: [
      { name: 'Spiritual Essentials', price: '₹99–₹999', text: 'Puja kits, incense, diyas, small yantras, and spiritual books.' },
      { name: 'Rudraksha & Crystals', price: '₹299–₹3,999', text: 'Authentic Rudraksha malas, crystal spheres, and healing stones.', popular: true },
      { name: 'Certified Gemstones', price: '₹1,999–₹50,000+', text: 'GIA-certified precious stones for astrological benefits.' },
    ],
    reviews: [
      { rating: 5, text: '"The 5 Mukhi Rudraksha mala I ordered comes with a proper certificate and the packaging was beautiful. Quality is unquestionable."', name: 'Mohan Lal', city: 'Jaipur' },
      { rating: 5, text: '"Ordered a Yellow Sapphire based on their free astrology consultation. Delivery was fast and the stone came with GIA certification."', name: 'Pallavi Sharma', city: 'Bengaluru' },
      { rating: 4, text: '"The Shree Yantra is beautifully crafted. You can feel it was made with intention and care."', name: 'Arjun Das', city: 'Kolkata' },
    ],
    faqs: [
      { q: 'How do I know if a Rudraksha is genuine?', a: 'Every Rudraksha ships with an origin certificate from an accredited lab, confirming its mukhi count and Nepal or Indonesia origin.' },
      { q: "Can I wear any gemstone without an astrologer's advice?", a: "We don't recommend it. Gemstones act strongly on planetary energies, so use our free consultation to pick a stone that suits your birth chart." },
      { q: 'Are the yantras energized?', a: 'Yes. Yantras, malas and other sacred items are energized through prana pratishtha by qualified pandits before dispatch.' },
      { q: 'Do you ship internationally?', a: 'We currently deliver across India, with free shipping above ₹999. International shipping to select countries is available on request through the app.' },
    ],
    ctaText: 'Download the Vedrashi app and access Spiritual Products anytime, anywhere. Your first session starts at just ₹1.',
  },

  'e-puja': {
    theme: THEME_EPUJA,
    hero: heroEPuja,
    heroPosition: '50% 18%',
    icon: '🪔',
    hideIcon: true,
    title: 'Book E-Puja',
    subtitle: 'Authentic Vedic ceremonies performed by verified priests',
    ...PANDIT_CONTENT,
  },
}
