import React from 'react'
import Card13 from '../../components/Card13'
import Wrapper from '../../components/Wrapper/Wrapper'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
      <section className='header-section rounded-[36px] min-h-[230px] flex items-center justify-center'>
        <div className='max-w-[1120px] xl:max-w-[390px] sa:max-w-[980px] m-[auto] w-[100%] h-[100%]'>
        <Link to={"/"}><p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Популярные магазины</p></Link>
          <h2 className='font-[bold] text-[40px] mb-[10px] text-[white]'>Популярные магазины</h2>
        </div>
      </section>

      <section className='mt-[160px] max-w-[1350px] xl:max-w-[390px] sa:max-w-[980px] m-auto mb-[160px]'>
        <div className='grid grid-cols-5 sa:grid-cols-3 gap-[15px] xl:grid-cols-2'>
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
        </div>
      </section>

      <Wrapper/>
    </>
  )
}

export default Shop
