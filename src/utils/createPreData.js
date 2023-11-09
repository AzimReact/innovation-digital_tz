const moment = require('moment');
require('moment/locale/ru');
const {v4: uuidv4} = require('uuid');

export const createPreData = () => {

  const currentWeekDay = moment().format('dddd'); // сегоднешний день недели
  let arr = [];
  let days = 350;
  let num = 0;

  // Цикл чтобы найти последнее воскресенье и отсчитать от него 350дней
  if (currentWeekDay === 'воскресенье') {
    days = 357;
  } else {
    for (let i = 0; i < 6; i++) {
      if (moment().add(-i,'days').format('dddd') === 'воскресенье') break;
      num++;
    };
  };

  // Закидываем в массив 350дней считая от последнего воскресенья
  for (let i = 0; i < days; i++) {
    arr.push({
      id: uuidv4(),
      contribution: 0,
      time: moment().add((-i - num),'days').format().slice(0,10),
      desc: moment().add((-i - num),'days').format('dddd, MMMM D, YYYY'),
    });
  };

  arr = arr.reverse();

  // добавляем последнюю неделю начиная с последнего понедельника
  if (days === 350) {
    for (let i = 0; i < 7; i++) {
      arr.push({
        id: uuidv4(),
        contribution: 0,
        time: moment().add((-num + 1 + i),'days').format().slice(0,10),
        desc: moment().add((-num + 1 + i),'days').format('dddd, MMMM D, YYYY'),
      });
    };
  };

  return arr;
};