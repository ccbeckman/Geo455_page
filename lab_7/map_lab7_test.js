// Baselayers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

var mymap = L.map('map', {
    center: [28.972443641658437, 84.59443216376953],
    zoom: 6,
    layers: streets,
    });

//// Mt Peaks ////
var myIcon = new L.Icon({
     iconSize: [20, 20],
     iconAnchor: [10, 15],
     popupAnchor:  [1, -24],
     iconUrl: 'peaks.png'
 });

var peaks = new L.geoJson(mtn_peaks, {
    onEachFeature: function(feature, featureLayer) {
        featureLayer.bindPopup('<p>Peak Name: <b>'+feature.properties.TITLE+ '</b></br>' +
                               'Peak Height: '+feature.properties.Peak_Heigh+' m' + '</br>'+
                               'Number of Deaths: '+feature.properties.number_of_+'</br>'+
                               'Number of Expeditions: '+feature.properties.number_of1)+'</p>';}, 
    pointToLayer: function (feature, latlng) {
            var marker = L.marker(latlng,{icon: myIcon});
            return marker;
        }}).addTo(mymap);

