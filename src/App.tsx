import React, { createContext, useState } from 'react'
import Main from './pages/Main'

const initialGlobalContext = {
  isFilterFormOpen: false,
  setIsFilterFormOpen: (value: boolean) => {
    initialGlobalContext.isFilterFormOpen = value
  },
}

export const GlobalContext = createContext(initialGlobalContext)

const App = () => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{ isFilterFormOpen, setIsFilterFormOpen }}>
      <Main />
    </GlobalContext.Provider>
  )
}

export default App
