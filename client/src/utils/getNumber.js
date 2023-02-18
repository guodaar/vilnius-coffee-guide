export const getAverageNumber = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

export const getRoundNumber = (num) => {
  return Math.round(num * 2) / 2;
};
