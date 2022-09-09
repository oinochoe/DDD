export const numberWithComma = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const numberWithCommaWrite = (num: string, limit: number): string => {
  const matches = num.match(/[\d.,]/g);
  if (!matches) return "0";
  const value: string = num;
  const removedCommaValue: number = Number(value.replaceAll(",", ""));
  if (limit <= removedCommaValue) {
    return limit.toLocaleString();
  }
  return removedCommaValue.toLocaleString();
};

export const numberWithRemoveComma = (num: string): number => {
  return Number(num.replaceAll(",", ""));
};
