import { contractAddress, contractABI } from "./constants";

const createlotteryContract = web3 => { return new web3.eth.Contract(contractABI, contractAddress)}

export default createlotteryContract;

