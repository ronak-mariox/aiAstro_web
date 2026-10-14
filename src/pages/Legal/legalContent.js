// Structured content for the five legal documents (text extracted verbatim from Figma).
// Block types rendered by LegalPage.jsx:
//   lead       – intro paragraph (16px)
//   h2         – section heading
//   numbered   – numbered gradient-circle heading + paragraph (Terms)
//   p          – body paragraph
//   list       – items: { label?, text } — label → bold-label paragraph, otherwise red-dot bullet
//   bullets    – compact red-dot bullet list
//   checklist  – green ✓ list
//   eligibility– cards: { ok, title, note }
//   steps      – numbered pink-circle steps
//   table      – { head: [], rows: [[]] }
//   note       – small muted paragraph
//   tiers      – rows: { label, value, tone: 'green'|'amber'|'red' }
//   tip        – gold highlight box: { icon, label, text }
//   callout    – pink box with link: { pre, link: { text, to }, post }
//   cookieCards– cards: { title, badge, required, text, codes[], duration }
//   defs       – label/description rows
//   grid       – 2-col cards: { title, text }
// Optional `mt` (px) overrides a block's default top spacing.

export const LEGAL_NAV = [
  { key: 'privacy', label: 'Privacy Policy', to: '/privacy-policy' },
  { key: 'terms', label: 'Terms & Conditions', to: '/terms' },
  { key: 'refund', label: 'Refund Policy', to: '/refund-policy' },
  { key: 'cancellation', label: 'Cancellation Policy', to: '/cancellation-policy' },
  { key: 'cookie', label: 'Cookie Policy', to: '/cookie-policy' },
]

const UPDATED = 'Last updated: June 1, 2026'

export const LEGAL_DOCS = {
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your personal information',
    updated: UPDATED,
    sectionGap: 32,
    blocks: [
      {
        type: 'lead',
        text: 'At Vedrashi, your privacy is sacred to us — as sacred as the ancient wisdom we share. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you use our platform. By using Vedrashi, you agree to the practices described in this policy.',
      },
      { type: 'h2', text: 'Information We Collect' },
      {
        type: 'list',
        items: [
          { label: 'Personal Information:', text: 'When you register on Vedrashi, we collect your name, email address, phone number, date of birth, and birth details (time and place) necessary for astrological consultations.' },
          { label: 'Usage Data:', text: 'We automatically collect information about how you interact with our platform — pages visited, features used, time spent, and device information including IP address, browser type, and operating system.' },
          { label: 'Payment Information:', text: 'Payment transactions are processed through PCI-DSS compliant third-party gateways. We do not store your full card details on our servers.' },
          { label: 'Consultation Data:', text: 'With your consent, we may record or transcribe consultation sessions to maintain quality standards and resolve disputes.' },
          { label: 'Communications:', text: 'Messages, reviews, and feedback you submit through our platform are stored and may be used to improve our services.' },
        ],
      },
      { type: 'h2', text: 'How We Use Your Information' },
      {
        type: 'list',
        items: [
          { text: 'To provide, personalize, and improve our astrology, pandit booking, and spiritual services.' },
          { text: 'To process payments and send transaction confirmations and receipts.' },
          { text: 'To match you with the most suitable astrologers and pandits based on your preferences and requirements.' },
          { text: 'To send you horoscope updates, promotional content, and service notifications — you may opt out at any time.' },
          { text: 'To detect, investigate, and prevent fraudulent transactions and other illegal activities.' },
          { text: 'To comply with legal obligations and enforce our Terms & Conditions.' },
        ],
      },
      { type: 'h2', text: 'How We Share Your Information' },
      {
        type: 'list',
        items: [
          { label: 'With Astrologers and Pandits:', text: 'Your name, birth details, and consultation history are shared only with the expert you choose to consult.' },
          { label: 'Service Providers:', text: 'We work with trusted third-party vendors for payment processing, cloud hosting, analytics, and customer support. These partners are contractually bound to protect your data.' },
          { label: 'Legal Requirements:', text: 'We may disclose your information if required by law, court order, or governmental authority.' },
          { label: 'Business Transfers:', text: 'In the event of a merger, acquisition, or sale of assets, your data may be transferred to the successor entity with advance notice to you.' },
          { text: 'We do NOT sell, rent, or trade your personal information to third parties for their marketing purposes.' },
        ],
      },
      { type: 'h2', text: 'Data Security' },
      {
        type: 'list',
        items: [
          { text: 'We implement industry-standard security measures including SSL/TLS encryption for all data in transit, AES-256 encryption for sensitive data at rest, and regular security audits.' },
          { text: 'Access to personal data is restricted to authorized employees and contractors on a need-to-know basis.' },
          { text: 'We maintain detailed access logs and conduct regular penetration testing to identify and address vulnerabilities.' },
          { text: 'Despite our best efforts, no method of electronic storage or transmission is 100% secure. We encourage you to use strong passwords and not share your account credentials.' },
        ],
      },
      { type: 'h2', text: 'Your Rights' },
      {
        type: 'list',
        items: [
          { label: 'Access:', text: 'You may request a copy of all personal data we hold about you at any time.' },
          { label: 'Correction:', text: 'You may update inaccurate or incomplete personal information through your account settings or by contacting us.' },
          { label: 'Deletion:', text: 'You may request deletion of your account and associated data, subject to legal retention requirements.' },
          { label: 'Portability:', text: 'You may request your data in a machine-readable format to transfer to another service.' },
          { label: 'Opt-Out:', text: 'You may opt out of marketing communications at any time via the unsubscribe link in any email or through account settings.' },
          { text: 'To exercise any of these rights, contact us at privacy@vedrashi.com. We will respond within 30 days.' },
        ],
      },
      { type: 'h2', text: 'Cookies' },
      {
        type: 'list',
        items: [
          { text: 'We use cookies and similar tracking technologies to enhance your experience on our platform. Essential cookies are required for basic functionality; analytics and marketing cookies are optional and may be disabled through your browser settings.' },
          { text: 'Please refer to our Cookie Policy for detailed information about the types of cookies we use and how to manage them.' },
        ],
      },
      { type: 'h2', text: "Children's Privacy" },
      {
        type: 'list',
        items: [
          { text: "Vedrashi's services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that a child under 18 has provided us with personal information, we will delete it immediately." },
        ],
      },
      { type: 'h2', text: 'Contact Us' },
      {
        type: 'list',
        items: [
          { text: 'For any privacy-related questions, concerns, or requests, please contact our Data Protection Officer at: privacy@vedrashi.com or write to us at: Vedrashi Privacy Team, 42 Spiritual Hub, Hauz Khas, New Delhi 110016, India.' },
        ],
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Please read these terms carefully before using Vedrashi',
    updated: UPDATED,
    blocks: [
      {
        type: 'lead',
        text: 'These Terms and Conditions ("Terms") govern your use of the Vedrashi platform, website, and mobile applications. By using Vedrashi, you enter into a legally binding agreement with Vedrashi Technologies Pvt. Ltd. ("Vedrashi", "we", "us", or "our").',
      },
      { type: 'numbered', num: 1, title: 'Acceptance of Terms', text: "By accessing or using Vedrashi's website, mobile application, or any of our services, you confirm that you are at least 18 years of age, have read and understood these Terms & Conditions, and agree to be bound by them. If you do not agree, please do not use our services." },
      { type: 'numbered', num: 2, title: 'Description of Services', text: 'Vedrashi provides a digital platform connecting users with verified astrologers, pandits, and spiritual advisors. Our services include voice, video, and chat consultations; pandit booking for ceremonies; spiritual product sales; free Kundli generation; and educational astrology content. We act as a marketplace facilitating connections between users and service providers.' },
      { type: 'numbered', num: 3, title: 'User Accounts', text: 'You must create an account to access most features. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You agree to provide accurate, current, and complete information and to update it promptly. Vedrashi reserves the right to suspend or terminate accounts that violate these terms, provide false information, or engage in fraudulent activity.' },
      { type: 'numbered', num: 4, title: 'Consultations and Appointments', text: 'All consultations on Vedrashi are for entertainment, guidance, and spiritual purposes only. They do not constitute medical, legal, financial, or psychological advice. You acknowledge that astrology and related practices are matters of personal belief and that outcomes cannot be guaranteed. Vedrashi does not verify the accuracy of any predictions made by astrologers on our platform.' },
      { type: 'numbered', num: 5, title: 'Payment Terms', text: 'Consultations are charged per minute or as flat fees as displayed before booking. Payment must be made in advance for all services. Prices are inclusive of applicable GST unless stated otherwise. We accept UPI, credit/debit cards, net banking, and popular wallets. All transactions are processed in Indian Rupees (INR).' },
      { type: 'numbered', num: 6, title: 'Prohibited Activities', text: 'Users must not: use the platform for illegal purposes; harass, abuse, or threaten astrologers or other users; attempt to circumvent the platform by arranging off-platform payments; share false or misleading information; use automated bots or scrapers on our platform; infringe on the intellectual property rights of Vedrashi or third parties; or attempt to gain unauthorized access to any part of our systems.' },
      { type: 'numbered', num: 7, title: 'Intellectual Property', text: 'All content on Vedrashi — including text, graphics, logos, icons, images, audio clips, and software — is the property of Vedrashi or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our express written consent.' },
      { type: 'numbered', num: 8, title: 'Limitation of Liability', text: 'To the maximum extent permitted by applicable law, Vedrashi shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability to you for any claim arising from these terms or our services shall not exceed the amount you paid us in the 30 days preceding the claim.' },
      { type: 'numbered', num: 9, title: 'Governing Law', text: 'These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.' },
      { type: 'numbered', num: 10, title: 'Changes to Terms', text: 'Vedrashi reserves the right to modify these terms at any time. We will notify you of significant changes via email or prominent notice on our platform. Your continued use of Vedrashi following such notification constitutes your acceptance of the revised terms.' },
    ],
  },

  refund: {
    title: 'Refund Policy',
    subtitle: 'Our fair and transparent refund guidelines',
    updated: UPDATED,
    blocks: [
      {
        type: 'lead',
        text: 'At Vedrashi, we stand behind every experience on our platform. If something goes wrong due to a technical issue or service failure on our end, we will make it right — promptly and without hassle. This policy explains exactly when and how refunds are processed.',
      },
      { type: 'h2', text: 'Refund Eligibility' },
      {
        type: 'eligibility',
        items: [
          { ok: true, title: "Technical failure on Vedrashi's side (connection drops, app crash, payment deducted but session not started)", note: '100% refund within 3-5 business days' },
          { ok: true, title: 'Astrologer cancels or fails to join the session within 5 minutes of scheduled start time', note: '100% refund + ₹50 platform credit' },
          { ok: true, title: 'Session quality was severely compromised (audio/video failure lasting more than 30% of session)', note: 'Prorated refund for the disrupted portion' },
          { ok: true, title: 'Accidental double payment for the same transaction', note: '100% refund of the duplicate charge' },
          { ok: false, title: 'User is dissatisfied with predictions or guidance provided (astrology outcomes cannot be guaranteed)', note: 'Not eligible — but contact us, we may offer a courtesy session' },
          { ok: false, title: 'User disconnects voluntarily or closes the app mid-session', note: 'Not eligible for the used portion; unused minutes refunded' },
          { ok: false, title: 'Refund requested more than 7 days after the session date', note: 'Not eligible unless exceptional circumstances apply' },
          { ok: false, title: 'Spiritual products that have been opened, used, or damaged', note: 'Not eligible — see product return policy below' },
        ],
      },
      { type: 'h2', text: 'How to Request a Refund' },
      {
        type: 'steps',
        items: [
          'Email us at refunds@vedrashi.com within 7 days of the session or purchase.',
          'Include your registered email/phone, transaction ID, session date, and a brief description of the issue.',
          'Our team will acknowledge your request within 24 hours.',
          'After verification (usually 2-3 business days), approved refunds are processed to your original payment method.',
          'Refund timelines: UPI/Wallets — 1-2 business days; Credit/Debit Cards — 5-7 business days; Net Banking — 3-5 business days.',
        ],
      },
      { type: 'h2', text: 'Product Returns' },
      { type: 'p', text: 'For spiritual products purchased from our store:' },
      {
        type: 'bullets',
        items: [
          'Sealed, unused products may be returned within 7 days of delivery for a full refund.',
          'Products must be in original packaging with all accessories and certificates.',
          'Return shipping costs are borne by the customer unless the product is defective or incorrectly shipped.',
          'Energized/consecrated products and gemstones are non-returnable once the seal is broken.',
          'Defective products will be replaced or fully refunded — no questions asked.',
        ],
      },
      {
        type: 'callout',
        pre: 'Have a refund request? ',
        link: { text: 'Contact our support team', to: '/contact' },
        post: ' — we typically respond within 24 hours and resolve most cases within 3 business days.',
      },
    ],
  },

  cancellation: {
    title: 'Cancellation Policy',
    subtitle: 'Guidelines for cancelling consultations and bookings',
    updated: UPDATED,
    blocks: [
      {
        type: 'lead',
        text: 'We understand that plans change. This policy outlines how cancellations work for consultations, pandit bookings, and product orders on Vedrashi — and what compensation applies in each case.',
      },
      { type: 'h2', text: 'Astrologer Consultation Cancellations' },
      {
        type: 'table',
        head: ['Cancellation Time', 'Refund', 'Platform Credit'],
        rows: [
          ['More than 30 minutes before session', '100% refund', 'None'],
          ['15–30 minutes before session', '75% refund', '10% bonus credit'],
          ['Less than 15 minutes before session', '50% refund', 'None'],
          ['After session has started', 'No refund for used time', 'Unused minutes refunded'],
          ['No-show (user does not join)', 'No refund', 'None'],
        ],
      },
      { type: 'note', text: 'To cancel a scheduled session, go to My Bookings → Select session → Cancel. Cancellations must be done through the platform to be eligible for refunds.' },
      { type: 'h2', text: 'Pandit Booking Cancellations' },
      {
        type: 'tiers',
        items: [
          { label: 'More than 72 hours before ceremony', value: '100% full refund', tone: 'green' },
          { label: '24–72 hours before ceremony', value: '70% refund (30% retained as preparation fee)', tone: 'amber' },
          { label: 'Less than 24 hours before ceremony', value: '50% refund', tone: 'red' },
          { label: 'Same day cancellation or no-show', value: 'No refund (pandit has already prepared and travelled)', tone: 'red' },
        ],
      },
      { type: 'tip', icon: '⭐', label: 'Rescheduling:', text: 'You may reschedule a pandit booking up to 48 hours before the ceremony date at no charge. Contact our support team to reschedule.' },
      { type: 'h2', text: 'Product Order Cancellations' },
      {
        type: 'list',
        mt: 20,
        items: [
          { text: 'Orders may be cancelled within 2 hours of placement for a full refund, provided the order has not been dispatched.' },
          { text: 'Once an order is dispatched (you receive a shipping confirmation), it can no longer be cancelled — but you may initiate a return after delivery.' },
          { text: 'Custom or personalized orders (engraved items, energized malas made to order) cannot be cancelled once production begins.' },
          { text: 'To cancel an order, go to My Orders → Select order → Cancel, or contact support@vedrashi.com with your order ID.' },
        ],
      },
      { type: 'h2', text: 'Astrologer / Pandit Initiated Cancellations' },
      { type: 'p', text: 'In the rare event that an astrologer or pandit cancels a confirmed booking:' },
      {
        type: 'checklist',
        items: [
          'You will receive 100% refund of all amounts paid.',
          'Vedrashi will add ₹100 platform credit as a goodwill gesture for the inconvenience.',
          'For pandit bookings, we will proactively find a replacement pandit of equal or higher experience at no extra charge.',
          'You will be notified immediately via SMS, email, and in-app notification.',
        ],
      },
      {
        type: 'callout',
        pre: 'Questions about a cancellation? ',
        link: { text: 'Reach our support team', to: '/contact' },
        post: " and we'll resolve it within 24 hours.",
      },
    ],
  },

  cookie: {
    title: 'Cookie Policy',
    subtitle: 'How and why Vedrashi uses cookies on our platform',
    updated: UPDATED,
    blocks: [
      {
        type: 'lead',
        text: 'Vedrashi uses cookies and similar tracking technologies to enhance your experience, remember your preferences, and understand how you interact with our platform. This Cookie Policy explains what cookies are, which ones we use, and how you can control them.',
      },
      { type: 'h2', text: 'What Are Cookies?' },
      { type: 'p', text: "Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They help websites recognise your device on return visits, remember your settings, and provide a more personalised experience. Cookies do not contain personally identifiable information by themselves — they function as unique identifiers tied to session data stored on the website's servers." },
      { type: 'h2', text: 'Types of Cookies We Use' },
      {
        type: 'cookieCards',
        items: [
          { title: 'Essential Cookies', badge: 'Required', required: true, text: 'These cookies are strictly necessary for the website to function. They enable core features like login sessions, shopping cart, and security. These cannot be disabled.', codes: ['session_id', 'auth_token', 'csrf_token', 'cart_items'], duration: 'Duration: Session or up to 30 days' },
          { title: 'Analytics Cookies', badge: 'Optional', text: 'These cookies help us understand how visitors interact with Vedrashi — which pages are popular, how users navigate, and where they drop off. This data helps us improve our platform.', codes: ['_ga (Google Analytics)', '_gid', 'amplitude_session', 'mixpanel_id'], duration: 'Duration: Up to 2 years' },
          { title: 'Functional Cookies', badge: 'Optional', text: 'These cookies remember your preferences and personalise your experience — such as your preferred language, zodiac sign, recently viewed astrologers, and notification settings.', codes: ['preferred_language', 'saved_rashi', 'notification_prefs', 'theme_mode'], duration: 'Duration: Up to 1 year' },
          { title: 'Marketing Cookies', badge: 'Optional', text: 'These cookies track your browsing habits to deliver relevant advertisements. They may be set by third-party advertising networks with our permission.', codes: ['_fbp (Facebook Pixel)', 'google_ads_id', 'retargeting_id'], duration: 'Duration: Up to 90 days' },
        ],
      },
      { type: 'h2', text: 'Third-Party Cookies' },
      { type: 'p', text: 'Some cookies on Vedrashi are set by trusted third-party services we use:' },
      {
        type: 'defs',
        items: [
          { label: 'Google Analytics', text: 'Website traffic analysis and user behaviour insights' },
          { label: 'Razorpay / PayU', text: 'Secure payment processing cookies' },
          { label: 'Facebook Pixel', text: 'Advertising attribution and retargeting' },
          { label: 'Intercom', text: 'Customer support chat widget' },
          { label: 'Amplitude', text: 'Product analytics and user journey tracking' },
        ],
      },
      { type: 'h2', text: 'How to Control Cookies' },
      { type: 'p', text: "You have full control over optional cookies. Here's how:" },
      {
        type: 'grid',
        items: [
          { title: 'Browser Settings', text: 'Most browsers allow you to block or delete cookies via Settings → Privacy. Note that blocking essential cookies will affect your ability to log in.' },
          { title: 'Cookie Banner', text: 'When you first visit Vedrashi, our cookie banner lets you accept all, reject optional, or customise your cookie preferences.' },
          { title: 'Google Analytics Opt-Out', text: 'Install the Google Analytics Opt-Out browser extension to prevent your data from being collected by Google Analytics across all websites.' },
          { title: 'Mobile Devices', text: 'On iOS: Settings → Privacy → Tracking. On Android: Settings → Privacy → Ads. You can reset your advertising ID or opt out of interest-based ads.' },
        ],
      },
      { type: 'h2', text: 'Updates to This Policy' },
      { type: 'p', text: 'We may update this Cookie Policy periodically to reflect changes in technology, regulation, or our practices. We will notify you of significant changes via a banner on our website. We encourage you to review this policy regularly. For questions about our use of cookies, contact us at privacy@vedrashi.com.' },
    ],
  },
}
