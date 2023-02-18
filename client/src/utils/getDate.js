export const generateTimestamp = () => {
  return new Date().getTime();
};

export const convertDate = (date) => {
  return new Date(date).toLocaleDateString("lt");
};
