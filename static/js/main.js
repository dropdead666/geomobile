var mymap = L.map('map').setView([0, 0], 13);
centerMap();
markerUser =  L.marker([0, 0]).addTo(mymap);
getLocation();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2FieWthaWYiLCJhIjoiY2tjNWE0MWc0MGZzMjJ5bWdpZWtieHN3ZyJ9.L65F7UmuRusia6VZqQuymA'
}).addTo(mymap);



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById ("gamb").addEventListener ("click", openNav, false);

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

function getLocation() {
    var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
    };
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(goLocation, error, options);
    }
}

function goLocation(pos) {
    markerUser.setLatLng([pos.coords.latitude, pos.coords.longitude]);
          var polylinePoints = [
        [pos.coords.latitude, pos.coords.longitude],
        [55.813734399999994, 49.0962944],
        [55.8187482, 49.1136327],
        [55.8188964, 49.1176078],
      ];

      var polyline = L.polyline(polylinePoints).addTo(mymap);
}

function centerMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(centerCamera);
    }
}

function centerCamera(pos) {
    mymap.setView([pos.coords.latitude, pos.coords.longitude], 13);
}

function createMarker() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openAcc() {
    document.getElementById("myAcc").style.display = "block";
}

function closeAcc() {
    document.getElementById("myAcc").style.display = "none";
}

function openFriends() {
    document.getElementById("myFriends").style.display = "block";
}

function closeFriends() {
    document.getElementById("myFriends").style.display = "none";
}

function openStats() {
    document.getElementById("myStats").style.display = "block";
}

function closeStats() {
    document.getElementById("myStats").style.display = "none";
}