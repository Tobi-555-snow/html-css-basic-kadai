const Today = new Date();

const Year = Today.getFullYear();
const Month = Today.getMonth();
const Day = Today.getDate();


console.log(
 Year + '年' + (Month + 1) + '月' + Day + '日');
