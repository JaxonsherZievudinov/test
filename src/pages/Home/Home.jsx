import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import back1 from "../../assets/ilustration.svg";
import back2 from "../../assets/Иллюстрация.svg";
import back3 from "../../assets/Иллюстрация (1).svg";
import back4 from "../../assets/Иллюстрация (2).svg";
import Card1 from "../../components/Card1/Card1";
import iconShift from "../../assets/Иконка.svg";
import iconShift1 from "../../assets/Иконка (1).svg";
import iconShift2 from "../../assets/Иконка (2).svg";
import iconShift3 from "../../assets/Иконка (3).svg";
import iconShift4 from "../../assets/Иконка (4).svg";
import iconShift5 from "../../assets/Иконка (5).svg";
import iconShift6 from "../../assets/Иконка (6).svg";
import iconShift7 from "../../assets/Иконка (7).svg";
import iconShift8 from "../../assets/Иконка (8).svg";
import Card2 from "../../components/Card2/Card2";
import rusIcon from "../../assets/rus.svg";
import engIcon from "../../assets/eng.svg";
import curtka from "../../assets/Куртка.svg";
import shirt1 from "../../assets/Футболка.svg";
import shirt2 from "../../assets/Джинсы.svg";
import Card3 from "../../components/Card3/Card3";
import Section1 from "../../components/Section1/Section1";
import Card4 from "../../components/Card4/Card4";
import world from "../../assets/GlobeHemisphereWest.svg";
import Card5 from "../../components/Card5/Card5";
import Card6 from "../../components/Card6/Card6";
import Card7 from "../../components/Card7/Card7";
import Card8 from "../../components/Card8/Card8";
import cardImg8 from "../../assets/фон.svg";
import email from "../../assets/EnvelopeSimpleOpen.svg";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="overflow-hidden">
      <section className="startPage rounded-[36px]">
        <div className="max-w-[1390px] sm:max-w-[1220px] lg:max-w-[950px] xl:max-w-[390px] md:max-w-[1030px] m-auto flex flex-wrap items-center justify-center min-h-[680px]">
          <div className="text-[white] xl:mb-[40px] w-[707px] xl:w-[390px] xl:mt-[40px] xl:flex xl:text-center xl:flex-col items-center lg:w-[390px] md:w-[400px] sm:w-[507px] mr-[52px]">
            <h1 className="text-[72px] xl:text-[30px] xl:leading-[55px] lg:text-[40px] lg:leading-[50px] md:text-[42px] md:leading-[62px] sm:text-[52px] leading-[80px] font-[extrabold] mb-[8px]">
              {t("header.startPage.hero-text")}
            </h1>
            <p className="text-[20px] xl:text-[22px] lg:text-[14px] lg:leading-[30px] md:text-[15px] md:leading-[36px] sm:text-[16px] leading-[42px] font-[light] mb-[36px]">
              {t("header.startPage.desc")}
            </p>
            <button className="btnContact h-[66px] w-[260px] lg:text-[15px] rounded-[36px] shadow-[0px_4px_4px_0px_#01CB7C33] text-[17px] font-[bold]">
              {t("header.startPage.btn")}
            </button>
          </div>

          <div className="lg:w-[400px]">
            <img src={back1} alt="" />
          </div>
        </div>
      </section>

      <section className="max-w-[1350px] xl:max-w-[390px] lg:max-w-[950px] xl:text-center sm:max-w-[1120px] md:max-w-[1030px] m-auto mt-[158px] mb-[158px]">
        <h1 className="text-[44px] font-[extrabold] text-[#1F2428] leading-[50px] w-[477px] xl:w-[390px]">
          Насколько выгодно покупать?
        </h1>

        <div className="mt-[40px]">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px] xl:hidden"
          >
            <SwiperSlide>
              <Card1 img={iconShift} title={"Одежда"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card1 img={iconShift1} title={"Электроника"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card1 img={iconShift2} title={"Аксессуары"} />
            </SwiperSlide>

            <SwiperSlide>
              <Card1 img={iconShift3} title={"Для детей"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card1 img={iconShift4} title={"Для спорта"} />
            </SwiperSlide>
            <SwiperSlide>
              <Card1 img={iconShift5} title={"Косметика"} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex items-center justify-between xl:justify-center flex-wrap mt-[54px]">
          <div>
            <h3 className="text-[26px] text-[#1F2428] font-[bold] w-[310px] mb-[44px]">
              Columbia Barlow Pass 550 Turbodown Jacket
            </h3>
            <Card2
              img={rusIcon}
              desc={`${t("header.card2.desc1")}`}
              title={"7891,46₽"}
            />
          </div>

          <div className="md:w-[400px] lg:w-[314px]">
            <img src={curtka} alt="" />
          </div>

          <div>
            <h3 className="text-[26px] text-[#1F2428] font-[bold] w-[305px] mb-[44px]">
              Доставка одежды из Великобритании от £7.79
            </h3>
            <Card2
              img={engIcon}
              desc={`${t("header.card2.desc2")}`}
              title={"£80.62"}
            />
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden lg:hidden xl:hidden">
          <div>
            <img src={shirt1} alt="" />
          </div>

          <div>
            <p className="text-[#1F2428] text-[18px] font-[light]">
              {t("header.bottomSec.desc")}
            </p>
            <h4 className="text-[26px] text-[#1F2428] font-[bold]">
              {t("header.bottomSec.title")}
            </h4>
          </div>

          <div>
            <img src={shirt2} alt="" />
          </div>
        </div>

        <div className="mt-[120px] p-[17px_0] w-[100%] lg:justify-center flex flex-wrap rounded-[16px] shadow-[0px_0px_70px_0px_#8A8A8A1A]">
          <Card3
            containerCard={"ml-[70px] lg:ml-[95px] xl:border-none lg:mb-[10px] sm:ml-[55px]"}
            img={iconShift6}
            cardStyle={"w-[88px] sm:w-[59px]"}
            title={`${t("header.card3.title1")}`}
          />
          <Card3
            cardStyle={"w-[162px] sm:w-[112px]"}
            containerCard={"ml-[70px] lg:pr-[0] lg:mb-[10px] border-none sm:ml-[55px]"}
            img={iconShift6}
            title={`${t("header.card3.title2")}`}
          />
          <Card3
            containerCard={"ml-[70px] xl:border-none md:hidden sm:ml-[44px]"}
            img={iconShift6}
            cardStyle={"w-[88px] sm:w-[70px]"}
            title={`${t("header.card3.title3")}`}
          />
          <Card3
            containerCard={"ml-[70px] sm:ml-[45px] st border-none"}
            img={iconShift6}
            cardStyle={"w-[138px] sm:w-[118px]"}
            title={`${t("header.card3.title4")}`}
          />
        </div>
      </section>

      <section className="max-w-[1390px] m-auto">
        <Section1
          img={back2}
          title={t("header.section1.title")}
          desc={t("header.section1.desc")}
          btn={t("header.section1.btn")}
        />
      </section>

      <section className="max-w-[1290px] xl:max-w-[390px] lg:max-w-[950px] md:max-w-[1030px] sm:max-w-[1120px] m-auto mt-[158px]">
        <section className="mb-[158px]">
          <h1 className="text-[44px] font-[extrabold] text-[#1F2428] leading-[50px] xl:w-[390px] w-[824px]">
            {t("header.section4.hero-text")}
          </h1>
          <p className="w-[760px] xl:w-[390px] text-[20px] text-[#1F2428] leading-[36px] font-[light] mt-[20px]">
            {t("header.section4.desc")}
          </p>

          <div className="min-h-[270px] xl:flex xl:flex-col items-center shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px] p-[0_28px] flex flex-col justify-center mt-[50px]">
            <div className="flex justify-between flex-wrap xl:justify-center">
              <Card4
                img={world}
                title={t("header.section4.card.title1")}
                name={t("header.section4.card.name1")}
              />
              <Card4
                img={world}
                title={t("header.section4.card.title2")}
                name={t("header.section4.card.name2")}
              />
              <Card4
                img={world}
                title={t("header.section4.card.title3")}
                name={t("header.section4.card.name3")}
              />
              <Card4
                img={world}
                title={t("header.section4.card.title4")}
                name={t("header.section4.card.name4")}
              />
              <Card4
                img={world}
                title={t("header.section4.card.title5")}
                name={t("header.section4.card.name5")}
              />
            </div>

            <button className="btnContact text-[white] shadow-[0px_4px_4px_0px_#01CB7C33] text-[17px] font-[bold] mt-[32px] w-[240px] h-[66px] rounded-[36px]">
              Рассчитать
            </button>
          </div>
        </section>

        <section>
          <h1 className="text-[44px] font-[extrabold] text-[#1F2428] leading-[50px]">
            {t("header.section5.hero-text")}
          </h1>

          <div className="mt-[30px]">
            <div className="shadow-[0px_0px_70px_0px_#8A8A8A1A] mb-[20px] rounded-[16px]">
              <Card5
                img={iconShift7}
                title={t("header.section5.card.title1")}
                time={t("header.section5.card.time1")}
                price={t("header.section5.card.price1")}
                all={t("header.section5.card.all1")}
              />
            </div>

            <div className="shadow-[0px_0px_70px_0px_#8A8A8A1A] mb-[20px] rounded-[16px]">
              <Card5
                img={iconShift7}
                title={t("header.section5.card.title1")}
                time={t("header.section5.card.time1")}
                price={t("header.section5.card.price1")}
                all={t("header.section5.card.all1")}
              />
            </div>

            <div className="shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px]">
              <Card5
                img={iconShift7}
                title={t("header.section5.card.title1")}
                time={t("header.section5.card.time1")}
                price={t("header.section5.card.price1")}
                all={t("header.section5.card.all1")}
              />
            </div>
          </div>
        </section>

        <section className="m-[158px_0]">
          <h1 className="text-[44px] w-[695px] xl:w-[390px] font-[extrabold] text-[#1F2428] leading-[50px]">
            {t("header.section6.hero-text")}
          </h1>

          <div className="grid grid-cols-[repeat(auto-Fill,301px)] lg:grid-cols-[repeat(auto-Fill,219px)] lg:gap-[6px] md:grid-cols-[repeat(auto-Fill,230px)] md:gap-[24px] sm:grid-cols-[repeat(auto-Fill,260px)] sm:gap-[26px] justify-center gap-[28px] mt-[14px]">
            <Card6
              img={back3}
              title={t("header.section6.card.title1")}
              desc={t("header.section6.card.desc1")}
            />
            <Card6
              img={back3}
              title={t("header.section6.card.title1")}
              desc={t("header.section6.card.desc1")}
            />
            <Card6
              img={back3}
              title={t("header.section6.card.title1")}
              desc={t("header.section6.card.desc1")}
            />
            <Card6
              img={back3}
              title={t("header.section6.card.title1")}
              desc={t("header.section6.card.desc1")}
            />
          </div>

          <div className="w-[760px] mt-[49px] xl:w-[480px]">
            <p className="text-[#1F2428] text-[20px] leading-[36px] font-[light]">
              {t("header.section6.desc")}
            </p>
            <button className="btnContact text-[white] shadow-[0px_4px_4px_0px_#01CB7C33] text-[17px] font-[bold] mt-[30px] w-[240px] h-[66px] rounded-[36px]">
              {t("header.section6.btn")}
            </button>
          </div>
        </section>
      </section>

      <section className="max-w-[1390px] m-auto mb-[158px]">
        <Section1
          img={back4}
          title={t("header.section7.title")}
          desc={t("header.section7.desc")}
          btn={t("header.section1.btn")}
        />
      </section>

      <section className="max-w-[1290px] xl:max-w-[390px] lg:max-w-[950px] md:max-w-[1030px] sm:max-w-[1120px] m-auto">
        <section>
          <div>
            <h1 className="text-[44px] xl:w-[390px] w-[834px] font-[extrabold] text-[#1F2428] leading-[50px]">
              {t("header.section8.hero-text")}
            </h1>
            <p className="text-[20px] text-[#1F2428] font-[light] leading-[36px] xl:w-[390px] w-[604px] mt-[20px]">
              {t("header.section8.desc")}
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-Fill,411px)] lg:grid-cols-[repeat(auto-Fill,300px)] lg:gap-[20px] md:grid-cols-[repeat(auto-Fill,320px)] sm:grid-cols-[repeat(auto-Fill,350px)] sm:gap-[26px] gap-[28px] justify-center mt-[40px]">
            <Card7
              img={iconShift8}
              title={t("header.section8.card.title1")}
              desc={t("header.section8.card.desc1")}
            />
            <Card7
              img={iconShift8}
              title={t("header.section8.card.title1")}
              desc={t("header.section8.card.desc1")}
            />
            <Card7
              img={iconShift8}
              title={t("header.section8.card.title1")}
              desc={t("header.section8.card.desc1")}
            />
          </div>
        </section>

        <section className="m-[158px_0]">
          <h1 className="text-[44px] mb-[40px] font-[extrabold] text-[#1F2428] leading-[50px]">
            {t("header.section9.hero-text")}
          </h1>

          <div>
            <div className="grid grid-cols-[repeat(auto-Fill,631px)] xl:grid-cols-[repeat(auto-Fill,390px)] justify-center lg:grid-cols-[repeat(auto-Fill,450px)] lg:gap-[24px] md:grid-cols-[repeat(auto-Fill,501px)] sm:grid-cols-[repeat(auto-Fill,531px)] sm:gap-[26px] gap-[28px]">
              <Card8
                img={cardImg8}
                title={"NIKOLAY S"}
                desc={t("header.section9.card.desc1")}
                date={t("header.section9.card.date")}
                city={t("header.section9.card.city")}
              />
              <Card8
                img={cardImg8}
                title={"NIKOLAY S"}
                desc={t("header.section9.card.desc1")}
                date={t("header.section9.card.date")}
                city={t("header.section9.card.city")}
              />
              <Card8
                img={cardImg8}
                title={"NIKOLAY S"}
                desc={t("header.section9.card.desc1")}
                date={t("header.section9.card.date")}
                city={t("header.section9.card.city")}
              />
              <Card8
                img={cardImg8}
                title={"NIKOLAY S"}
                desc={t("header.section9.card.desc1")}
                date={t("header.section9.card.date")}
                city={t("header.section9.card.city")}
              />
            </div>

            <button className="btnContact text-[white] shadow-[0px_4px_4px_0px_#01CB7C33] text-[17px] font-[bold] mt-[40px] w-[240px] h-[66px] rounded-[36px]">
              {t("header.section9.btn")}
            </button>
          </div>
        </section>
      </section>

      <section className="startPage max-w-[1390px] m-auto rounded-[36px] text-[white]">
        <div className="max-w-[1290px] lg:max-w-[950px] flex-wrap xl:p-[25px_10px] md:max-w-[1030px] sm:max-w-[1120px] m-auto flex justify-between items-center min-h-[250px]">
          <h4 className="text-[30px] font-[bold] leading-[40px] w-[482px] md:w-[380px]">
            {t("header.section10.title")}
          </h4>

          <div className="flex items-center xl:m-[20px_0] pb-[16px] border-b border-solid border-[white] w-[313px]">
            <div className="mr-[15px]">
              <img src={email} alt="" />
            </div>

            <div>
              <p className="text-[16px] font-[light]">
                {t("header.section10.email")}
              </p>
            </div>
          </div>

          <div>
            <button className="btnContact text-[white] shadow-[0px_4px_4px_0px_#01CB7C33] text-[17px] font-[bold] w-[240px] h-[66px] rounded-[36px]">
              {t("header.section10.btn")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
