TRAVERSINGTHEDOM//
var itemList=document.querySelector('#items');
parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

childNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

 FirstChild
console.log(itemList.firstChild);
firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

 lastChild
console.log(itemList.lastChild);
lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

nextSibling
console.log(itemList.nextSibling);
nextElementSibling
console.log(itemList.nextElementSibling);

previousSibling
console.log(itemList.previousSibling);
 previousElementSibling
console.log(itemlist.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

creatElement

Creat a div
var newDiv = document.createElement('div');

newDiv.className= 'hello';

Add id
newDiv.id = 'hello1';

 Add attr
newDiw.setAttribute('title','Hello Div');

Creat text node
var newDivText = document.createTextNode('Hello World');

 Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);