import { createContext, useState, useEffect, useContext } from 'react'
import Web3 from 'web3'
import createlotteryContract from '../utils/lotteryContact'
export const appContext = createContext()

export const AppProvider = ({ children }) => {
  const [address, setAddress] = useState('')
  const [web3, setWeb3] = useState(null)
  const [Lotterycontract, setLotterycontract] = useState()
  const connectWallet = async () => {
    if( 
      typeof window.ethereum !== 'undefined' &&
      typeof window !== 'undefined'
    ){
      try{
        await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        const web3 = new Web3(window.ethereum)
        setWeb3(web3)
        const accounts = await web3.eth.getAccounts()
        setAddress(accounts[0])
        setLotterycontract(
          createlotteryContract(web3)
        )
        window.ethereum.on('accountsChanged', async () => {
          const accounts = await web3.eth.getAccounts()
          setAddress(accounts[0])
        })
      }catch(error){
        console.log(error)
      }
      
    }     else{
      alert('Please install MetaMask')
    }
    

  }

  return <appContext.Provider value={{connectWallet,address}}>{children}</appContext.Provider>
}

export const useAppContext = () => {
  return useContext(appContext)
}
