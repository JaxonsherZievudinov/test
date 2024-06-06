import React from 'react'
import { useTranslation } from 'react-i18next';

import logo from "../assets/logo.svg"
import loginIcon from "../assets/login.svg"
import { Link, Outlet } from 'react-router-dom';
import whatsapp from "../../src/assets/Ватсап.svg"
import viber from "../../src/assets/Вайбер.svg"
import chat from "../../src/assets/Чат.svg"

const Layout = () => {

    const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <header className='bg-[white] w-[100%] z-[2] top-0 sticky'>
        <nav className='max-w-[1350px] lg:max-w-[950px] md:max-w-[1030px] sm:max-w-[1120px] xl:max-w-[480px] m-auto flex items-center justify-between h-[110px]'>
            <div>
            <Link><img src={logo} alt="" /></Link>
            </div>

            <ul className='flex text-[15px] md:text-[13px] lg:hidden text-[#1F2428] xl:hidden'>
            <li><Link className='text-[rgba(31,36,40,1)] hover:text-green-500 duration-300 font-[semibold] mr-[15px]' to={"/howtobuy"}>{t('header.nav.li1')}</Link></li>
                        <li><Link className='text-[rgba(31,36,40,1)] hover:text-green-500 duration-300 font-[semibold] mr-[15px]' to={'/sales'}>{t('header.nav.li2')}</Link></li>
                        <li><Link to={"/prices"} className='text-[rgba(31,36,40,1)] hover:text-green-500 duration-300 font-[semibold] mr-[15px]'>{t('header.nav.li3')}</Link></li>
                        <li><Link to={'/help'} className='text-[rgba(31,36,40,1)] hover:text-green-500 duration-300 font-[semibold] mr-[15px]'>{t('header.nav.li4')}</Link></li>
                        <li><Link to={"/bonuses"} className='text-[rgba(31,36,40,1)] hover:text-green-500 duration-300 font-[semibold] mr-[15px]'>{t('header.nav.li5')}</Link></li>
                        <li><Link to={'/blog'} className='text-[rgba(31,36,40,1)] hover:text-green-500 duration-300 font-[semibold] mr-[15px]'>{t('header.nav.li6')}</Link></li>
                        <li><Link to={"/shop"} className='text-[rgba(31,36,40,1)] hover:text-green-500 duration-300 font-[semibold]'>{t('header.nav.li7')}</Link></li>
            </ul>

            <div className='flex'>
                <button className='font-[semibold] flex items-center mr-[40px]'><img className='mr-[11px]' src={loginIcon} alt="" />{t("header.nav.signIn")}</button>
                <button className='btnContact font-[bold] text-[white] shadow-[0px_4px_4px_0px_#01CB7C33] h-[48px] w-[170px] rounded-[36px] mr-[5px]'>{t("header.nav.contact")}</button>

                <select onChange={(e)=>changeLanguage(e.target.value)}>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
            </div>

            <span className='hidden lg:block xl:block'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" font-size="30" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg></span>
        </nav>
      </header>

        <Outlet/>

<footer className='max-w-[1290px] sm:max-w-[1120px] xl:mt-[40px] xl:max-w-[390px] lg:max-w-[950px] md:max-w-[1030px] m-auto'>
    <div className='flex flex-wrap justify-between text-[#1F2428] min-h-[384px] items-center'>
      <div className='min-h-[243px]'>
        <div>
        <img src={logo} alt="" />
        </div>
        <div className='flex mt-[34px]'>
          <img className='mr-[6px]' src={whatsapp} alt="" />
          <img className='mr-[6px]' src={viber} alt="" />
          <img src={chat} alt="" />
        </div>
        </div>

        <ul className='xl:mb-[30px]'>
            <h4 className='text-[16px] font-[bold] mb-[15px]'>{t("footer.theadUl1")}</h4>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li1")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li2")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li3")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li4")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li5")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li6")}</li>
            <li className="font-[light] text-[14px]">{t("footer.li7")}</li>
        </ul>

        <ul>
            <h4 className='text-[16px] font-[bold] mb-[15px]'>{t("footer.theadUl1")}</h4>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li1")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li2")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li3")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li4")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li5")}</li>
            <li className="font-[light] text-[14px]">{t("footer.li6")}</li>
        </ul>

        <ul>
            <h4 className='text-[16px] font-[bold] mb-[15px]'>{t("footer.theadUl1")}</h4>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li1")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li2")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li3")}</li>
            <li className="font-[light] text-[14px] mb-[10px]">{t("footer.li4")}</li>
            <li className="font-[light] text-[14px]">{t("footer.li5")}</li>
        </ul>
    </div>

    <div className='flex justify-center h-[89px] items-center'>
      <p className='text-[13px] text-[#1F2428]'>© 2021 Okeypost . Все права защищены.</p>
    </div>
</footer>

    </>
  )
}

export default Layout
