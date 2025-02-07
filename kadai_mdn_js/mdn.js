
const date = new Date("2024-11-12");
const [month, day, year] = [
  date.getMonth(), 
  date.getDate(),
  date.getFullYear(),
];
const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);