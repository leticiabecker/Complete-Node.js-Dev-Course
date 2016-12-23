var age = 30;
var results;

results = age + 6;
console.log('age + 6 = ' + results);

results = age - 1;
console.log('age - 1 = ' + results);

results = age * 3;
console.log('age * 3 = ' + results);

results = age / 6;
console.log('age / 6 = ' + results);

// o resto de uma divisão:
results = age % 5;
console.log('age % 5 = ' + results);

results = results - 1;
console.log('minus 1: ' + results);
// igual a results--, ou results++ (para somar 1)

results++;
console.log('addes 1: ' + results);

var num = 19;
console.log(++num);


// challenge 
var grad1 = 30;
var grad2 = 80;
var grad3 = 99;

var average = (grad1 + grad2 + grad3) / 3;
console.log(average + '%');