var listItems = document.getElementsByTagName('li');
var itemsClass = document.getElementsByClassName('special');
var body = document.querySelector('body');
var isgrey = false;

for (var i = 0; i <= 1; i ++) {
  listItems[i].textContent += " (special day)";
};
for (var i = 0; i < listItems.length; i ++) {
  listItems[i].className = 'day';
  listItems[i].textContent = `${i+1} - ` + listItems[i].textContent;
  if (i >= 5) {
    listItems[i].textContent = listItems[i].textContent + " (Holiday)";
  }
};

setInterval(function(){
  if (isgrey) {
    body.style.background = "lightgrey";
  } else {
    isgrey = !isgrey;
  }
}, 1000);

listItems[0].click(function() {alert, "MONDAY"
});
console.log("ccccc")

