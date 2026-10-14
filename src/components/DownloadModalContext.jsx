import { createContext, useCallback, useContext, useState } from 'react'
import DownloadAppModal from './DownloadAppModal'

const DownloadModalContext = createContext({ openDownload: () => {} })

export function DownloadModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openDownload = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  return (
    <DownloadModalContext.Provider value={{ openDownload }}>
      {children}
      {open && <DownloadAppModal onClose={close} />}
    </DownloadModalContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDownloadModal = () => useContext(DownloadModalContext)
