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

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(goLocation);
    }
}

function goLocation(pos) {
    markerUser.setLatLng([pos.coords.latitude, pos.coords.longitude]);
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

