import React from "react";
import { useTranslation } from "react-i18next";
import Card14 from "../../components/Card14/Card14";
import icon1 from "../../assets/cd14.svg";
import Card4 from "../../components/Card4/Card4";
import world from "../../assets/GlobeHemisphereWest.svg";
import Card5 from "../../components/Card5/Card5";
import iconShift7 from "../../assets/Иконка (7).svg";
import Card15 from "../../components/Card15/Card15";
import Card16 from "../../components/Card16/Card16";
import Card17 from "../../components/Card17";
import back1 from "../../assets/back1.svg";
import link from "../../assets/Link.svg";
import Wrapper from "../../components/Wrapper/Wrapper";
import { Link } from "react-router-dom";

const Prices = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <section className="header-section rounded-[36px] min-h-[210px] flex items-center justify-center">
        <div className="max-w-[1350px] xl:max-w-[390px] sa:max-w-[980px] m-[auto] w-[100%] h-[100%]">
          <Link to={"/"}>
            <p className="mb-[29px] text-[white] text-[13px]">Главная / Цены</p>
          </Link>
          <h1 className="font-[bold] text-[40px] mb-[10px] text-[white]">
            Услуги доставки из Великобритании
          </h1>
        </div>
      </section>

      <div className="max-w-[1350px] sa:max-w-[980px] xl:max-w-[390px] m-[auto] mt-[102px]">
        <div>
          <div className="grid grid-cols-[repeat(auto-Fill,300px)] justify-center gap-[50px] mb-[160px]">
            <Card14
              img={icon1}
              title={"Ваш личный адрес для покупок"}
              desc={
                "на нашем современном автоматизированном складе в безналоговом Делавэре"
              }
              btn={"Бесплатно"}
            />
            <Card14
              img={icon1}
              title={"Ваш личный адрес для покупок"}
              desc={
                "на нашем современном автоматизированном складе в безналоговом Делавэре"
              }
              btn={"Бесплатно"}
            />
            <Card14
              img={icon1}
              title={"Ваш личный адрес для покупок"}
              desc={
                "на нашем современном автоматизированном складе в безналоговом Делавэре"
              }
              btn={"Бесплатно"}
            />
            <Card14
              img={icon1}
              title={"Ваш личный адрес для покупок"}
              desc={
                "на нашем современном автоматизированном складе в безналоговом Делавэре"
              }
              btn={"Бесплатно"}
            />
          </div>

          <div className="mb-[40px]">
            <h1 className="text-[44px] font-[extrabold] text-[#1F2428] leading-[50px] w-[824px] xl:w-[390px] sa:w-[980px]">
              {t("st4.hero-text")}
            </h1>
            <p className="w-[760px] xl:w-[490px] sa:w-[980px] text-[20px] text-[#1F2428] leading-[36px] font-[light] mt-[20px]">
              {t("st4.desc")}
            </p>

            <div className="min-h-[270px] xl:hidden sa:hidden shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px] p-[0_28px] flex flex-col justify-center mt-[50px]">
              <div className="flex justify-between">
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
          </div>
        </div>

        <div>
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
        </div>

        <div className="mt-[170px]">
          <h1 className="text-[44px] font-[extrabold] mb-[40px] text-[#1F2428] leading-[50px]">
            {t("st5.hero")}
          </h1>

          <div className="grid grid-cols-[repeat(auto-Fill,655px)] justify-center gap-x-[30px] gap-y-[20px]">
            <Card15 title={"Консолидация "} desc={"£1.00/1 трек"} />
            <Card15
              st={"pr-[90px]"}
              title={"Заполнение декларации "}
              desc={"£1.00"}
            />
            <Card15
              st={"pr-[93px]"}
              title={"Дополнительная упаковка "}
              desc={"£5.00"}
            />

            <Card15
              st={"pr-[82px]"}
              title={"Упаковка xрупкиx предметов"}
              desc={"£10.00"}
            />
            <Card15
              st={"pr-[93px]"}
              title={"Заполнение декларации"}
              desc={"£1.00"}
            />
            <Card15
              st={"pr-[90px]"}
              title={"Разделение заказа"}
              desc={"£2.00"}
            />
          </div>

          <div className="grid grid-cols-1 mt-[20px] justify-center gap-[20px] sa:hidden xl:hidden">
            <Card16
              st={"pr-[285px]"}
              title={"Сборка исходящей посылки вне очереди или экспресс сборка"}
              parag={"Чтобы сэкономить время"}
              desc={"£5.00"}
            />
            <Card16
              st={"pr-[215px]"}
              title={"Фото содержимого входящей посылки"}
              parag={
                "3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат"
              }
              desc={"£1.00 за 1 фото"}
            />
            <Card16
              st={"pr-[141px]"}
              title={"Возврат вещей в магазин"}
              parag={
                'В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги "Виртуальный адрес" '
              }
              desc={"£10 + почтовые расходы"}
            />
            <Card16
              st={"pr-[301px]"}
              title={"Проверка техники на работоспособность"}
              parag={
                "Проверка электроники на включение/выключение (запрос через тикеты)."
              }
              desc={"£10"}
            />
            <Card16
              st={"pr-[245px]"}
              title={"Удаление инвойса"}
              parag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              desc={"Бесплатно"}
            />
            <Card16
              st={"pr-[178px]"}
              title={"Дополнительная упаковка"}
              parag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
              desc={"По договоренности"}
            />
          </div>
        </div>

        <div className="mt-[299px]">
          <h1 className="text-[44px] font-[extrabold] text-[#1F2428] leading-[50px] mb-[40px]">
            Покупки с операторами Okeypost.com
          </h1>

          <div className="grid grid-cols-1 mt-[20px] justify-center gap-[20px] xl:hidden sa:hidden">
            <Card17
              title={"Быстрое оформление покупок в интернет-магазинах"}
              parag={
                "Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за вас, проконтролируют доставку на склад и сообщат, когда всё будет готово."
              }
              desc={
                "5% от стоимости товаров минимум £7 для каждого магазина Но не менее £7 для каждого лота eBay"
              }
            />
            <Card17
              title={'Фото товара по услуге "Покупка с операторами"'}
              parag={
                'Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"'
              }
              desc={"£2"}
            />
          </div>
        </div>
      </div>

      <div className="startPage rounded-[36px] sa:p-[20px_0] mt-[160px]">
        <div className="max-w-[1350px] xl:max-w-[390px] sa:max-w-[980px] m-auto xl:flex-col sa:flex-col sa:text-center xl:text-center min-h-[530px] flex items-center justify-center">
          <div>
            <img src={back1} alt="" />
          </div>

          <div className="w-[763px] xl:w-[390px] sa:max-w-[980px] text-[white] ml-[65px] sa:m-0 xl:m-0">
            <h3 className="text-[30px] leading-[40px] font-[bold] mb-[33px]">
              Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку
              на товар, его купят и доставят на наш склад в кратчайшие сроки.
            </h3>
            <p className="pb-[23px] border-b border-solid border-[white] text-[16px] font-[light] w-[480px] flex items-center">
              <img className="mr-[15px]" src={link} alt="" />
              Введите ссылку на товар
            </p>
            <div className="flex items-center mt-[34px] sa:flex-col xl:flex-col w-[845px] xl:w-[390px] sa:max-w-[980px]">
              <button className="text-[17px] mr-[50px] font-[bold] h-[66px] min-w-[240px] btnContact rounded-[36px] shadow-[0px_4px_4px_0px_#01CB7C33]">
                Отправить
              </button>
              <p className="text-[18px]">
                Нажимая на кнопку вы подтверждаете согласие с правилами
                предоставления услуги и политикой конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1350px] xl:max-w-[390px] sa:max-w-[980px] m-auto mb-[160px] mt-[160px]">
        <div>
          <h3 className="text-[44px] leading-[40px] font-[extrabold] mb-[33px]">
            Страхование
          </h3>
          <div className="grid grid-cols-1 mt-[20px] justify-center gap-[20px]">
            <Card16
              st={"pr-[265px]"}
              title={"Дополнительное страxование"}
              desc={"5% от суммы на которую xотите застраxовать"}
            />
            <Card16
              st={"pr-[313px]"}
              title={"Почта России и ЕМС"}
              desc={"Застраxовано по умолчанию на £50.00"}
            />
            <Card16
              st={"pr-[424px]"}
              title={"Мелкие пакеты"}
              desc={"Застраxовано на £20.00"}
            />
          </div>
        </div>

        <div className="mt-[150px]">
          <h3 className="text-[44px] leading-[40px] font-[extrabold] mb-[33px]">
            Дополнительная упаковка
          </h3>
          <div className="grid grid-cols-[repeat(auto-Fill,655px)] justify-center gap-x-[30px] gap-y-[20px]">
            <Card15
              st={"pr-[65px]"}
              title={"Многослойная пленка"}
              parag={"Дополнительная защита покупок"}
              desc={"£3.99"}
            />
            <Card15
              st={"pr-[65px]"}
              title={"Упаковка в пакет"}
              parag={"Надежно защищает от влаги"}
              desc={"£1.99"}
            />
            <Card15
              st={"pr-[65px]"}
              title={"Упаковка в коробку с двойными стенками"}
              parag={"Надежно защищает от влаги"}
              desc={"£4.99"}
            />
            <Card15
              st={"pr-[65px]"}
              title={"Наклейка “Обращаться с осторожностью”"}
              parag={"Дополнительная защита покупок"}
              desc={"£0.25"}
            />
            <Card15
              st={"pr-[65px]"}
              title={"Наклейка “Хрупкий груз”"}
              parag={"Дополнительная защита покупок"}
              desc={"£0.25"}
            />
          </div>
        </div>
      </div>

      <Wrapper />
    </div>
  );
};

export default Prices;
