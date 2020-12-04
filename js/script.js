// Map
var map;

function initMap() {
  myCoordinates = {
    lat: 41.7167,
    lng: -87.7063
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: myCoordinates,
    zoom: 13
  });
  var evergreenMarker = new google.maps.Marker({
    position: myCoordinates,
    map: map,
    title: "Evergreen Park is a small 3.16sq mile Village located just outside of Chicago. It is surrounded by Chicago suburbs on 3 sides!"
  });
}

// To add the marker to the map, call setMap();
evergreenMarker.setMap(map);
window.addEventListener('load', initMap);

// Slideshow
var images = [
	"media/cc.jpg",
	"media/swe.jpg",
	"media/cjhs.jpg",
	"media/stc.jpg",
	"media/hs.jfif"],
	curIndex = 0;
    imgDuration = 4000; // Images Array

// Change Image
function changeImg() {
  document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = images[curIndex];
        document.getElementById('slider').className = "";
    },1000);
    curIndex++;
    if (curIndex == images.length) { curIndex = 0; }
    setTimeout(changeImg, imgDuration);
}

window.onload = changeImg;
