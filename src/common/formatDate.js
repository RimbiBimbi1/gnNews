export const formatDate = date => {
    const temp = date.substring(0, 10).split('-');

    return `${temp[2]}.${temp[1]}.${temp[0]}`;
};

export const formatHour = date => date.substring(11, 16);
