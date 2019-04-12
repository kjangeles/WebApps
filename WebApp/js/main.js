//Slideshow: Home Page
var myIndex = 0;
slideshow();

function slideshow() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
 x[i].style.display = "none";
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}
x[myIndex-1].style.display = "block";
setTimeout(slideshow, 2000);
}

//Subscribe
function subscribe() {
  alert("Thank you for subscribing!");
}
//survey
function survey() {
  prompt("What new flavors would you like to see this month?");
  alert("Thank you for participating in our survey!");
}

//Modal: Custom Cakes Page
function onClick(element) {
  document.getElementById("img1").src = element.src;
  document.getElementById("modal").style.display = "block";
}
//Tabbed Menu: Custom Cakes Page
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-gray", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-gray";
}
document.getElementById("myLink").click();

//map
function myMap()
{
  myCenter=new google.maps.LatLng(39.081964, -108.554356);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
