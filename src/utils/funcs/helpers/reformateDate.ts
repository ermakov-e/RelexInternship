export const reformateDate = (date: string): string => {
    const dateArr = date.split("-");
    return dateArr[2]+ "." +dateArr[1]+ "." +dateArr[0];
};
