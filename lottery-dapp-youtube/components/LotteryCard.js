import style from '../styles/PotCard.module.css'
import truncateEthAddress from 'truncate-eth-address'
import { useAppContext } from '../context/context'
const LotteryCard = () => {
  // TODO: Get the data needed from context
  const {enterLottery} = useAppContext()
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        {/* TODO: Dynamically render the lotteryID */}
        Loterie <span className={style.textAccent}>#1</span>
      </div>
      <div className={style.pot}>
        {/* TODO: Dynamically render the lottery pot */}
          5ecdc99319c72b3528f227cc6876d41298ef1285
      </div>

      <div className={style.recentWinnerTitle}>Le Gagnant🏆 :</div>
      <div className={style.winner}>
        {/* TODO: Dynamically render the last winner */}
        {truncateEthAddress('0x1234567890123456789012345678901234567890')}
      </div>
      {/* TODO: Add onClick functionality to the buttons */}
      <div className={style.btn} onClick={enterLottery}>Enter</div>
      <div className={style.btn}>Pick Winner!</div>
    </div>
  )
}
export default LotteryCard
