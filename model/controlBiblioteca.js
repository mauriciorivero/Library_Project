const Libro = require('./Libro');

const libro1 = new Libro('The lord of the rings','4442-652453-825525','J.R.R. Tolkien',1964,567,true);
const libro2 = new Libro('The martian','5454576567','Andy Weir',2008,456,true);
libro1.loan();
console.log('El titulo es: '+libro1.title+' El isbn es: '+libro1.isbn+' Este libro esta disponible? '+libro1.isAvailable);
console.log('El titulo es: '+libro2.title+' El isbn es: '+libro2.isbn+' Este libro esta disponible? '+libro2.isAvailable);

libro1.returnBook();
console.log('El titulo es: '+libro1.title+' El isbn es: '+libro1.isbn+' Este libro esta disponible? '+libro1.isAvailable);