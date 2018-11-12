var listItems = document.getElementsByTagName('li');
var itemsClass = document.getElementsByClassName('special');

for (var i = 0; i < 2; i ++) {
  listItems[i].textContent += " (special day)";
};
for (var i = 0; i < listItems.length; i ++) {
  listItems[i].className = 'day';
  listItems[i].textContent = `${i+1} - ` + listItems[i].textContent;
  if (i >= 5) {
    listItems[i].textContent = listItems[i].textContent + " (Holiday)";
  }
};
