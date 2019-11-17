//Find in array: sum

function sum (array){
  var sum = 0;
  for (let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum;
}


//Find in array: min and max

function find_min_max(array){
  var min = array[0]; max = array[0];
  for (let i=0; i< array.length; i++){
    if (array[i] < min){
      min = array[i];
    } else
    if (array[i] > max){
      max = array[i];
    }
  }
  return [min,max];
}


//Replace min and max


function swap_min_max(array){
  var min_max = find_min_max(array),
      minIndex = array.indexOf(min_max[0]),
      maxIndex = array.indexOf(min_max[1]);

  array[minIndex] = min_max[1];
  array[maxIndex] = min_max[0];

  return array;
}

//Create function which will return function with callback in arguments

function getEmployee(successCallback){

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employee/1', false);
  xhr.send();

  if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText );
  } else {
    successCallback( xhr.responseText );
  }
}

let callback = function(responseText){
  let obj = JSON.parse(responseText);
  alert(obj.employee_name);
}

getEmployee(callback);

//Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three and seven with ‘foobar’. Function with n params.

//Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %