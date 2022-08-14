const cars = ["BMW", "Volvo", "Mini", "tesla", "ford"];


//index é o numero iterado, value é o argumento passado

/* cars.forEach(function callback(value, index) {   //for Each , diferente de for ... of
  console.log(`${index}: ${value}`);
}); */


////

for (const [i, value] of cars.entries()) {
  console.log('%d: %s', i, value);
}