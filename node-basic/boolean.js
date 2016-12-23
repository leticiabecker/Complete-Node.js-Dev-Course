var isValid = false;

isValid = true;
//or isValid = !isValid is true


if (isValid === true) {
  console.log('Data is valid');
}
else {
  console.log('Data is not valid');
}


// is the same
if (isValid) {
  console.log('Data is valid');
}
else {
  console.log('Data is not valid');
}

//can be written like this too
/*
if (!isValid) {
  console.log('Data is valid');
}
else {
  console.log('Data is not valid');
}
*/

// challenge

var isValid = false;

function toggleBoolean (booleanVar) {
  if (typeof booleanVar === 'boolean') {
    return !booleanVar;
  } else {
    console.log('Warning! Not a boolean');
  }
}

var newBoolean = toggleBoolean(isValid);
console.log(newBoolean);

var newBoolean = toggleBoolean('Leticia');
console.log(newBoolean);