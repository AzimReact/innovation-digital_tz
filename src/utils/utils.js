export const MONTHS = [
  {month: "Январь",number: 1},
  {month: "Февраль",number: 2},
  {month: "Март",number: 3},
  {month: "Апрель",number: 4},
  {month: "Май",number: 5},
  {month: "Июнь",number: 6},
  {month: "Июль",number: 7},
  {month: "Август",number: 8},
  {month: "Сентябрь",number: 9},
  {month: "Октябрь",number: 10},
  {month: "Ноябрь",number: 11},
  {month: "Декабрь",number: 12},
];

export const checkContribution = (contributionItem) => {
  const contribution = contributionItem?.contribution;
  if (contribution) {
    if (contribution >= 1 && contribution <= 9) {
      return "low-contributions";
    } else if (contribution >= 10 && contribution <= 19) {
      return "medium-contributions";
    } else if (contribution >= 20 && contribution <= 29) {
      return "high-contributions";
    } else {
      return "max-contributions";
    }
  }

  return ""
};