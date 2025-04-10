/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const AppContext = createContext({
    active: false,
    setActive: () => {},
    color: '#fa5454',
    setColor: () => {}
})

export function AppProvider({ children }) {
    const [active, setActive] = useState(false)
    const [color, setColor] = useState('#fa5454')
    
  return (
    <AppContext.Provider value={{
        active, setActive,
        color, setColor
    }}>
      {children}
    </AppContext.Provider>
  )
}