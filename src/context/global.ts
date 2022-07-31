import { createContext } from 'react'

const initialGlobalContext = {
  isFilterFormOpen: false,
  setIsFilterFormOpen: (value: boolean) => {
    initialGlobalContext.isFilterFormOpen = value
  },
}

export const GlobalContext = createContext(initialGlobalContext)
