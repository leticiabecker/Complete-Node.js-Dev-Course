var grades = [100, 50];

//to add items to the end of an array
grades.push(79);

console.log(grades);

//or to the begining
grades.unshift(79);

console.log(grades);

//to remove the last item
var grade = grades.pop();
console.log(grade);
console.log(grades);

//to remove the first item
var grade = grades.shift();
console.log(grade);
console.log(grades);




var numbers = [100, 50, 75];

//to see an item from the array, not remove it
console.log(numbers[0]);

numbers.push(85);

numbers.forEach(function (number) {
  console.log(number);
});

console.log(numbers.length);



//challenge

//var totalGrade = 0
var totalNumbers = 0;

//forEach -> add grade to totalGrade
numbers.forEach(function (number) {
  totalNumbers = totalNumbers + number;
  // return totalNumbers;
  console.log('Current total is ' + totalNumbers);
});

//totalGrade / total number of grades (average)
var average = totalNumbers / numbers.length;
console.log(average);