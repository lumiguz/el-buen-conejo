import React from 'react'

const AppContext = React.createContext()

export const useMyContext = () => {
  return React.useContext(AppContext)
}

const AppContextProvider = ({ children }) => {

  const [allInformation, setAllInformation] = React.useState([])
  
  let user = []

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('logedAccount')) !== undefined) {
      user = JSON.parse(localStorage.getItem('logedAccount'))
    }
    setAllInformation(user)
  }, [])


  return (
    <AppContext.Provider value={allInformation}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider