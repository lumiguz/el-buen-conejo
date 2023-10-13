import React from 'react'
import { usuarios } from '../utils/database'

const AppContext = React.createContext()

export const useMyContext = () => {
  return React.useContext(AppContext)
}

const AppContextProvider = ({ children }) => {

    const user = JSON.parse(localStorage.getItem('logedAccount'))
    const { email } = user
    const allInformation = usuarios.filter(usuario => usuario.email === email)
  
    console.log(allInformation[0])

  return (
    <AppContext.Provider value={allInformation[0]}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider