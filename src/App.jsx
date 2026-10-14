import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import ConsultAstrologer from './pages/ConsultAstrologer/ConsultAstrologer'
import BookPandit from './pages/BookPandit/BookPandit'
import EPuja from './pages/EPuja/EPuja'
import SpiritualStore from './pages/SpiritualStore/SpiritualStore'
import Blogs from './pages/Blogs/Blogs'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import LegalPage from './pages/Legal/LegalPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="consult-astrologer" element={<ConsultAstrologer />} />
        <Route path="book-pandit" element={<BookPandit />} />
        <Route path="e-puja" element={<EPuja />} />
        <Route path="spiritual-store" element={<SpiritualStore />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="privacy-policy" element={<LegalPage doc="privacy" />} />
        <Route path="terms" element={<LegalPage doc="terms" />} />
        <Route path="refund-policy" element={<LegalPage doc="refund" />} />
        <Route path="cancellation-policy" element={<LegalPage doc="cancellation" />} />
        <Route path="cookie-policy" element={<LegalPage doc="cookie" />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
