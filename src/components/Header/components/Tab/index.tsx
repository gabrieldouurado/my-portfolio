import { ReactNode } from 'react'
import { ActiveTab, InactiveTab } from './styles'

interface TabProps {
  children: ReactNode
  activeTab?: boolean
}

export function Tab({ children, activeTab = false }: TabProps) {
  return (
    <>
      {activeTab ? (
        <ActiveTab>{children}</ActiveTab>
      ) : (
        <InactiveTab>{children}</InactiveTab>
      )}
    </>
  )
}
