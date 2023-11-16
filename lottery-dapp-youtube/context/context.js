import { createContext, useState, useEffect, useContext } from 'react'

export const appContext = createContext()

export const AppProvider = ({ children }) => {
  const [address, setAddress] = useState(null)
  const connectWallet = async () => {
    if( 
      typeof window.ethereum !== 'undefined' &&
      typeof window !== 'undefined'
    ){
      try{
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        setAddress(accounts[0])
      }catch(error){
        console.log(error)
      }
      
    }     else{
      alert('Please install MetaMask')
    }
    

  }

  return <appContext.Provider value={{}}>{children}</appContext.Provider>
}

export const useAppContext = () => {
  return useContext(appContext)
}
