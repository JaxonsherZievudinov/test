import React from 'react'
import Card10 from '../../components/Card10.jsx'
import Wrapper from '../../components/Wrapper/Wrapper.jsx'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <>
      <section className='header-section rounded-[36px] min-h-[380px] flex items-center justify-center'>
        <div className='max-w-[1120px] xl:max-w-[390px] sa:max-w-[980px] m-[auto] w-[100%] h-[100%]'>
        <Link to={"/"}><p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Как покупать</p></Link>
          <h2 className='font-[bold] text-[40px] mb-[10px] text-[white]'>Научим покупать вВеликобритании!</h2>
          <p className='mb-[40px] font-[bold] text-[22px] text-[white]'>и экономить до 70%</p>
          <button className='p-[20px_60px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] font-[bold]'>Получить адрес в UK</button>
        </div>
      </section>

      <section className='pt-[160px] mb-[161px]'>
        <div className='max-w-[1120px] xl:max-w-[390px] sa:max-w-[980px] m-[auto]'>
          <h2 className='font-[bold] text-[40px] mb-[10px] dark:text-[white] text-[rgba(31,36,40,1)]'>Научим покупать в Великобритании!</h2>
          <p className='text-[17px] leading-[36px] text-[rgba(31,36,40,1)] text-[white] w-[700px] mb-[53px]'>Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.</p>

          <div className='grid grid-cols-1 gap-[85px] mb-[41px]'>
            <Card10 img="/src/assets/1.svg" title={"Получаем адрес для покупок в магазинах Великобритании "} number={"01"} text={"Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах."} />
            <Card10 img="/src/assets/1.svg" title={"Получаем адрес для покупок в магазинах Великобритании "} number={"02"} text={"Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах."} />
            <Card10 img="/src/assets/1.svg" title={"Получаем адрес для покупок в магазинах Великобритании "} number={"03"} text={"Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах."} />
            <Card10 img="/src/assets/1.svg" title={"Получаем адрес для покупок в магазинах Великобритании "} number={"04"} text={"Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах."} />
            <Card10 img="/src/assets/1.svg" title={"Получаем адрес для покупок в магазинах Великобритании "} number={"05"} text={"Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах."} />
          </div>
          <button className='p-[20px_60px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] font-[bold]'>Получить адрес в UK</button>
        </div>
      </section>

      <Wrapper/>
    </>
  )
}

export default Buy
