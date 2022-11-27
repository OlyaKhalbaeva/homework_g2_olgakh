const MyName = "Ольга";
const MyCity = "Улан-Удэ";
const MyJob = "работаю в сфере ВЭД";
const MyDateOfBirth = new Date(1992,4,11);
let now = new Date();
let today= new Date (now.getFullYear);
let strStore= `Привет! Меня зовут ${MyName}. Мне ${now.getFullYear() - MyDateOfBirth.getFullYear()}. Сейчас я ${MyJob} в городе ${MyCity}`;