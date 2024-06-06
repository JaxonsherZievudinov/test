import React from 'react'
import Card12 from '../../components/Card12'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section className='header-section rounded-[36px] min-h-[230px] flex items-center justify-center'>
        <div className='max-w-[1120px] xl:max-w-[390px] sa:max-w-[980px] m-[auto] w-[100%] h-[100%]'>
        <Link to={"/"}><p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Распродажи</p></Link>
          <h2 className='font-[bold] text-[40px] mb-[10px] text-[white]'>Блог</h2>
        </div>
      </section>

      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto] sa:max-w-[980px] xl:max-w-[390px]'>
          <div className='grid grid-cols-3 gap-[31px] xl:grid-cols-1'>
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
