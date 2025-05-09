'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import FooterComponent from './components/FooterComponent'

export default function LayoutWrapper({ children }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  const isAuth = pathname.startsWith('/auth')

  return (
    <>
      {!isAdmin && !isAuth && <Navbar />}
      {children}
      {!isAdmin && !isAuth && <FooterComponent />}
    </>
  )
}
