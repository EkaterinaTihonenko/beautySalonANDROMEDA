import { Currency } from "../helpers/Currency";
import friend from "../assets/images/sale/friend.jpg";
import brow_bar from "../assets/images/sale/brow_bar.webp";
import visiting from "../assets/images/sale/visiting.webp";
import heppy_birsthday from "../assets/images/sale/happy_birthday.png";
import manicure from "../assets/images/sale/manicure.png";
import hair from "../assets/images/sale/hair.png";

export const SaleList = [
  {
    id: 1,
    img: friend,
    text: (
      <>
        Приведи друга и получи <Currency contentFormat="50.00" />
      </>
    ),
    content: (
      <ul>
        <li>Расскажите о нас своим друзьям.</li>
        <li>Друг приходит к нам, получая скидку 30% на первое посещение.</li>
        <li>
          В карточке, которую администраторы дают каждому клиенту при первом
          посещении, друг должен указать ваш номер телефона в графе «Как вы о
          нас узнали?» пункт «Приведи друга».
        </li>
        <li>
          Если ваш друг не написал ваш номер телефона, бонусные баллы начислены
          не будут.
        </li>
        <li>
          В течение суток администраторы начисляют вам 500 бонусных рублей на
          счет за каждого приведенного друга.
        </li>
        <li>Количество друзей не ограничено.</li>
        <li>
          Бонусными баллами вы можете оплатить не более 30% стоимости услуг.
        </li>
        <li>
          Бонусными баллами нельзя оплатить продукцию, реализуемую в сети.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    img: brow_bar,
    text: "Скидки на комплексы услуг brow-bar",
    content: (
      <ul>
        <li>На счастье для бровей и долговременную укладку бровей</li>
        <li>
          Счастье для бровей + коррекция = <Currency contentFormat="59.00" />{" "}
          (вместо <Currency contentFormat="70.00" />
          ).
        </li>
        <li>
          Счастье для бровей + окрашивание краской + коррекция ={" "}
          <Currency contentFormat="59.00" /> (вместо{" "}
          <Currency contentFormat="70.00" />
          ).
        </li>
        <li>
          Счастье для бровей + окрашивание краской ={" "}
          <Currency contentFormat="38.00" /> (вместо{" "}
          <Currency contentFormat="45.00" />
          ).
        </li>
        <li>
          Долговременная укладка бровей + коррекция бровей + окрашивание краской
          = <Currency contentFormat="88.00" /> (вместо{" "}
          <Currency contentFormat="101.00" />
          ).
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    img: visiting,
    text: "Скидка на первое посещение - 30%",
    content: (
      <ul>
        <li>На комплекс базовых услуг при первых трех визитах.</li>
        <li>Первое посещение 30%,</li>
        <li>Второе посещение 10%,</li>
        <li>Третье посещение 10%,</li>
        <li>
          Условием предоставления скидки является доступный в момент посещения
          номер мобильного телефона, к которому привязана запись. Администраторы
          вправе проверить доступность телефона при расчете и отказать в
          предоставлении скидки, если телефон недоступен в момент расчета.
          Скидка предоставляется одному клиенту только один раз. Если вы уже
          посещали один филиал - при посещении другого филиала сети скидка не
          предоставляется. Акция не распространяется на некоторых мастеров.
        </li>
        <li>
          * Скидка не действует на наращивание и коррекцию ногтей, дизайны,
          ремонты и различные доп. услуги, кроме комплексов.
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    img: heppy_birsthday,
    text: (
      <>
        <Currency contentFormat="30.00" /> на бонусный счет в День Рождения
      </>
    ),
    content: (
      <ul>
        <li>
          Чтобы получить <Currency contentFormat="30.00" /> в подарок,
          необходимо записаться (online или по телефону) в день рождения или в
          течение 3-х дней после дня рождения.
        </li>
        <li>
          Запись может быть сделана на любую дату текущего или следующего
          месяца.
        </li>
        <li>
          Бонусы начисляются по факту визита в салон на посещение, которое было
          сделано в эти 4 дня.
        </li>
        <li>
          Администраторы проверяют, когда была оформлена запись и начисляют
          подарочные баллы.
        </li>
        <li>
          * БОНУСНЫМИ БАЛЛАМИ ВЫ МОЖЕТЕ ОПЛАТИТЬ НЕ БОЛЕЕ 50% СТОИМОСТИ УСЛУГ.
        </li>
        <li>
          * БОНУСНЫМИ БАЛЛАМИ НЕЛЬЗЯ ОПЛАТИТЬ ПРОДУКЦИЮ, РЕАЛИЗУЕМУЮ В СЕТИ.
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    img: manicure,
    text: (
      <>
        Маникюр + Педикюр + Покрытие Гель Лак ={" "}
        <Currency contentFormat="40.00" />.
      </>
    ),
    content: (
      <>
        Акция действует во всех салонах сети с понедельника по пятницу
        (12:00-16:00)
      </>
    ),
  },
  {
    id: 6,
    img: hair,
    text: <>Скидка -30% на стрижку и укладку</>,
    content: (
      <>
        Вы у нас впервые? Дарим 30% скидку на стрижку и укладку при первом
        посещение нашей сети.
      </>
    ),
  },
];
