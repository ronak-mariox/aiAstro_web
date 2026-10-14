import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { DownloadModalProvider } from './DownloadModalContext'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <DownloadModalProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </DownloadModalProvider>
  )
}
