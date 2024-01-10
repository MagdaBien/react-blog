const date2string = (date, sign='-') => { 
    const d = new Date(date);
    const dataString = `${d.getFullYear()}${sign}${padTo2Digits(d.getMonth()+1)}${sign}${padTo2Digits(d.getDate())}`;
    return dataString;    
}

function padTo2Digits(num, lenght=2) {
    return num.toString().padStart(lenght, '0'); }

export default date2string;