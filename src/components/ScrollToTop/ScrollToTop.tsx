import { useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'

export default function ScrollToTop() {
  const { location } = useRouterState()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}
