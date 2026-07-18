import React, { createContext, useContext } from "react"

type PositionContextType = {
  onPositionChange: (position: [number, number]) => void
}

const PositionContext = createContext<PositionContextType | undefined>(
  undefined,
)

export const PositionProvider: React.FC<{
  onPositionChange: (position: [number, number]) => void
  children: React.ReactNode
}> = ({ onPositionChange, children }) => {
  return (
    <PositionContext.Provider value={{ onPositionChange }}>
      {children}
    </PositionContext.Provider>
  )
}

export const usePosition = () => {
  const context = useContext(PositionContext)
  if (!context) {
    throw new Error("usePosition must be used within a PositionProvider")
  }
  return context
}
