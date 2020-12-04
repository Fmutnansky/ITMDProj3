// Map
var map;

function initMap() {
  myCoordinates = {
    lat: 41.7167,
    lng: -87.7063
  }
  maps = new google.maps.Map(document.getElementById('map'), {
    center: myCoordinates,
    zoom: 15
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
var i = 0;
var images = [];
var time = 3000;

images[0] = "media/cc.jpg";
images[1] = "media/swe.jpg";
images[2] = "media/cjhs.jpg";
images[3] = "media/stc.jpg";
images[4] = "media/hs.jfif";

function changeImg() {
  document.getElementById("slide").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;