var averageGrade = 100;
var name = 'Leticia';

if (averageGrade === 100) {
  console.log('Perfect!');
}
else if (averageGrade >= 70) {
  console.log('You rock');
}
else {
  console.log('Failed');
}

//to check if a number is not some value, use !== instead of ===


//to check 2 conditions at the same time, use &&
//to check one OR another, use ||
if (averageGrade === 100 && name === 'Leticia') {
  console.log('Perfect!');
}
else if (averageGrade >= 70) {
  console.log('You rock');
}
else {
  console.log('Failed');
}


// challenge

var name = 'Tuka';

if (name === 'Tuka' || name === 'Aline') {
  console.log('Hello friend');
}
else if (name === 'Joao') {
  console.log('Hey');
}
else {
  console.log('Hey stranger');
}