export const transformData = (preData,resData) => {
  for (let i = 0; i < preData.length; i++) {
    for (let key in resData) {
      if (preData[i].time === key) {
        preData[i].contribution = resData[key];
      };
    };
  };
};