import './Home.css'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Astrologers from './sections/Astrologers'
import Pandits from './sections/Pandits'
import WhyUs from './sections/WhyUs'
import HowItWorks from './sections/HowItWorks'
import Store from './sections/Store'
import Testimonials from './sections/Testimonials'
import AppPromo from './sections/AppPromo'
import Articles from './sections/Articles'
import Faq from './sections/Faq'
import ContactSection from './sections/ContactSection'

export default function Home() {
  return (
    <div className="hm">
      <Hero />
      <Services />
      <Astrologers />
      <Pandits />
      <WhyUs />
      <HowItWorks />
      <Store />
      <Testimonials />
      <AppPromo />
      <Articles />
      <Faq />
      <ContactSection />
    </div>
  )
}
