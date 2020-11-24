// Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

// Getting the day
const getCurrentDay = () => {
  const day = new Date().getDay() + 1;
  return day < 10 ? `0${day}` : day;
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
// eslint-disable-next-line no-unused-vars
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// eslint-disable-next-line no-unused-vars
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// eslint-disable-next-line no-unused-vars
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
