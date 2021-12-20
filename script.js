$(document).ready(FooRandom);
array1 = []
array2 = []
// створюю масиви
function colors(n) {
  console.log(n);
  switch (n) {
    case 1:
      $('#cell1').css('background', '#a8adff');
      break;
    case 2:
      $('#cell2').css('background', '#865b60');
      break;
    case 3:
      $('#cell3').css('background', '#ffc34a');
      break;
    case 4:
      $('#cell4').css('background', '#7eff42');
      break;
  }
  setTimeout(function () {
    $('#cell1').css('background', '#0062ff');
    $('#cell2').css('background', '#ff0019');
    $('#cell3').css('background', '#ffaa00');
    $('#cell14').css('background', '#3ec400');
  }, 1000);
  // таймер, через  1 сек буде змінюватись колір
}
// функція, що за допомогою switch міняє колір
function FooRandom() {
  array1.push(Math.round(Math.random() * 3) + 1);
  for (var i = 0; i < array1.length; i++)
    setTimeout(colors, (i + 1) * 3000, array1[i]);
}
// функція рандомного виклику клітинки, за допомогою циклу + встановлено таймер

function result() {
  var k = 0;
  for (var i = 0; i < array2.length; i++)
    if (array1[i] === array2[i])
      k++;
  if (k == array2.length)
    return true;
  return false;
}
// функція на перевірку рівності розміру масиву

$('#cell1').click(function () {
  array2.push(1);
  if (result()) {
    if (array2.length == array1.length) {
      array2 = [];
      FooRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  } else {
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("ПРОГРАШ!");
  }
  $('#cell1').css('background', '#a8adff');
  setTimeout(function () {
    $('#cell1').css('background', '#0062ff');
  }, 2000);
});
// при кліку викликається функція, що запускає перевірки у яких запускається функція рандому та приписав 
// об'єкт аудіо за допомогою якого потім викликається функція play, що відтворює музику, 
// в іншому випадку перевірки також записав об'єкт аудіо та запустив функцію play, що відтворює музику,
//  також спливає діалогове вікно, яке повідомляє про програш

// нижче аналогічні фукції на перевірку 
$('#cell2').click(function () {
  array2.push(2);
  if (result()) {
    if (array2.length == array1.length) {
      array2 = [];
      FooRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  } else {
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("ПРОГРАШ!");
  }
  $('#cell2').css('background', '#bf4e58');
  setTimeout(function () {
    $('#cell2').css('background', '#ff0019');
  }, 2000);
});
$('#cell3').click(function () {
  array2.push(3);
  if (result()) {
    if (array2.length == array1.length) {
      array2 = [];
      FooRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  } else {
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("ПРОГРАШ!");
  }
  $('#cell3').css('background', '#ffc34a');
  setTimeout(function () {
    $('#cell13').css('background', '#ffaa00');
  }, 2000);
});
$('#cell4').click(function () {
  array2.push(4);
  if (result()) {
    if (array2.length == array1.length) {
      array2 = [];
      FooRandom();
      var right = new Audio('right.mp3');
      right.play();
    }
  } else {
    var losesound = new Audio('lose.mp3');
    losesound.play();
    alert("ПРОГРАШ!");
  }
  $('#cell4').css('background', '#7eff42');
  setTimeout(function () {
    $('#cell4').css('background', '#3ec400');
  }, 2000);
});