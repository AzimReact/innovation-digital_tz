import moment from "moment";

export const transformMonths = (months) => {
  for (let i = 0; i < 12; i++) {
    let previousMonth = moment().subtract(11 - i,'months').format('MMMM');
    if (previousMonth === 'январь') previousMonth = 'янв.';
    if (previousMonth === 'февраль') previousMonth = 'февр.';
    if (previousMonth === 'апрель') previousMonth = 'апр.';
    if (previousMonth === 'август') previousMonth = 'авг.';
    if (previousMonth === 'сентябрь') previousMonth = 'сент.';
    if (previousMonth === 'октябрь') previousMonth = 'окт.';
    if (previousMonth === 'ноябрь') previousMonth = 'нояб.';
    if (previousMonth === 'декабрь') previousMonth = 'дек.';
    months.push({id: i,month: previousMonth});
  };
};