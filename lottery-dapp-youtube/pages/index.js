import Table from '../components/Table'
import style from '../styles/Home.module.css'
import Header from '../components/Header'
import LotteryCard from '../components/LotteryCard'
export default function Home() {
  return (
    <div className={style.wrapper}>
      {/* TODO: Header */}
      <Header/>
      {/* TODO: LotteryCard */}
      <LotteryCard/>
      {/* TODO: Players Table */}
    </div>
  )
}
