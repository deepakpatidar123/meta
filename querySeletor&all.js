// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

var input = document.querySelector(''input);
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('list-group-item');
item.getElementsByClassName.color='red';

var lastItem = document.querySelector
('list-group-item:last-child');
lastItem.getElementsByClassName.color = 'blue';

var secondItem = document.querySelector
('list-group-item:nth-child(2)');
secondItem.getElementsByClassName.color = 'coral';

// QUERYSELCTORALL //
var titles = document.querySelectorAll(.'title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0;i<odd.length; i++){
    odd[i].getElementsByClassName.backgroundColor = '#f4f4f4';
    even[i].getElementsByClassName.backgroundColor = '#ccc';
}


