const curDate = new Date();
const year = curDate.getFullYear();
const month = curDate.getMonth() + 1;
const day = parseInt(curDate.getDate().toString(), 10);
export const todayDateFormat = `${year}${month < 10 ? "0" + month : month}${day < 10 ? "0" + day : day}`;

export const splitDate = (date: string, split: string): string => {
  const yyyy = date.slice(0, 4);
  const mm = date.slice(4, 6);
  const dd = date.slice(6, 8);
  return `${yyyy}${split}${mm}${split}${dd}`;
};

const convertDateToCalcDate = (date: string): Date => {
  const everyMonthDayLength = 2;
  let calcDate = new Date();
  if (date.length <= everyMonthDayLength) {
    let calcMonth = parseInt(date, 10) < day ? month + 1 : month;
    calcDate = new Date(splitDate(`${year}${calcMonth < 10 ? "0" + calcMonth : calcMonth}${date}`, "-"));
  } else {
    calcDate = new Date(splitDate(date, "-"));
  }
  return calcDate;
};

const currentTime = new Date(convertDateToCalcDate(todayDateFormat)).getTime();

export const isDuringMonthly = (startDate: string, finishDate: string): boolean => {
  return 0 < currentTime - new Date(splitDate(startDate, "-")).getTime() && 0 < new Date(splitDate(finishDate, "-")).getTime() - currentTime;
};

export const convertStringToDotDate = (date: string): string => {
  return splitDate(date, ".");
};

export const getDDay = (date: string): string => {
  const dateTime = convertDateToCalcDate(date).getTime();
  const oneDay = 86400000;
  let dDay = currentTime - dateTime;
  let result = "";
  if (0 < dDay) {
    result = "D+" + Math.abs(dDay / oneDay);
  } else if (dDay < 0) {
    result = "D-" + Math.abs(dDay / oneDay);
  } else {
    return "오늘";
  }
  return result;
};
