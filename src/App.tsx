import React, { useState } from 'react'
import { GlobalContext } from './context/global'
import Main from './pages/Main'

const App = () => {
  const [isFilterFormOpen, setIsFilterFormOpen] = useState(false)
  return (
    <GlobalContext.Provider value={{ isFilterFormOpen, setIsFilterFormOpen }}>
      <Main />
    </GlobalContext.Provider>
  )
}

export default App
