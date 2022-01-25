import Web3 from 'web3'
import Planetary from './Planetary.json'

let web3 = new Web3("https://rinkeby.infura.io/v3/28696900a2cf490eb160741dc63e4707")

const contractAddress = "0x368F82000694ee89a49E6c05F886b08401e0cd10"
const contract = new web3.eth.Contract(Planetary.abi, contractAddress)

export { web3, contract, contractAddress }
