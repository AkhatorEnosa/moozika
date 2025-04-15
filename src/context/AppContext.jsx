/* eslint-disable react/prop-types */import { createContext, useState } from 'react'

export const AppContext = createContext({
    active: false,
    setActive: () => {},
    color: '#fa5454',
    setColor: () => {}
})

export function AppProvider({ children }) {
    const [active, setActive] = useState(false)
    const [color, setColor] = useState('#fa5454')
    const colors = [
        '#fa5454',
        '#f8d94c',
        '#4cf8a1',
        '#4c9ef8',
        '#f84cf8'
    ]

    const prevColor = () => {
      const getColorIndex = colors.findIndex((x) => x === color)
      const newColorIndex = (getColorIndex - 1 + colors.length) % colors.length
      setColor(colors[newColorIndex])
    }

    const nextColor = () => {
      const getColorIndex = colors.findIndex((x) => x === color)
      const newColorIndex = (getColorIndex + 1) % colors.length
      setColor(colors[newColorIndex])
    }
    
  return (
    <AppContext.Provider value={{
        active, setActive,
        color, setColor,
        nextColor,
        prevColor
    }}>
      {children}
    </AppContext.Provider>
  )
}