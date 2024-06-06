import React from 'react'
import Card11 from '../../components/Card11'
import Wrapper from '../../components/Wrapper/Wrapper'
import { Link } from 'react-router-dom'

const Распродажи = () => {
  return (
    <>
      <section className='header-section rounded-[36px] min-h-[380px] flex items-center justify-center'>
        <div className='max-w-[1120px] xl:max-w-[390px] sa:max-w-[990px] m-[auto] w-[100%] h-[100%]'>
        <Link to={"/"}><p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Распродажи</p></Link>
          <h2 className='font-[bold] text-[40px] mb-[10px] text-[white]'>Распродажи</h2>
          <p className='mb-[40px] font-[bold] text-[22px] text-[white]'>ранний доступ к распродажам в магазинах</p>
          <button className='p-[20px_60px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] font-[bold]'>Получить адрес в UK</button>
        </div>
      </section>

      <section className='pt-[160px] mb-[180px]'>
        <div className='max-w-[1120px] m-[auto] xl:max-w-[390px] sa:max-w-[990px]'>
          <h2 className='font-[bold] text-[40px] mb-[40px] dark:text-[white] text-[rgba(31,36,40,1)] w-[834px] xl:w-[390px] xl:text-[33px]'>Black Friday Early Access
            ранний доступ к распродажам
            в магазинах Великобритании!</h2>
            <div className='grid grid-cols-2 xl:grid-cols-1 justify-center gap-[33px]'>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
            </div>
        </div>
      </section>
        <Wrapper/>
    </>
  )
}

export default Распродажи
