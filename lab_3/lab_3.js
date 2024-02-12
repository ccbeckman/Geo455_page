var mymap = L.map("map", {
    center: [19.65525055760138, -155.4953036000503], 
    zoom: 9});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2JlY2ttYW4iLCJhIjoiY2xzM2RybnIyMHZ5bjJuczFoOGVycTA2MiJ9.PA032siFHRzgFpdeD9i-0w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


var myIcon = L.icon({
    iconUrl: 'icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var zurich = L.marker([18.911473918308353, -155.67802890990737], {icon: myIcon}).bindPopup("<b>Southern Most Point of the US").addTo(mymap);
var laus = L.marker([18.91486388327945, -155.68287834407818], {icon: myIcon}).bindPopup("<b>Southern Point Cliff Dive").addTo(mymap);
var geneva = L.marker([18.98624509699534, -155.6670608300221], {icon: myIcon}).bindPopup("<b>Aloha Horseback Adventures").addTo(mymap);
var mont = L.marker([19.064037315396824, -155.67827304534], {icon: myIcon}).bindPopup("<b>Hawaii Volcano National Park Kahuku Unit").addTo(mymap);
var cdc = L.marker([19.066966671851134, -155.7993141993107], {icon: myIcon}).bindPopup("<b>Kula Kai Caverns").addTo(mymap);
var vevey = L.marker([19.701076604149428, -155.08876318376124], {icon: myIcon}).bindPopup("<b>Imiloa Astronomy Center").addTo(mymap);
var bern = L.marker([19.71524860788758, -155.13134119855536], {icon: myIcon}).bindPopup("<b>Boiling Pots").addTo(mymap);
var lucerne = L.marker([19.72625051643772, -155.06812196841008], {icon: myIcon}).bindPopup("<b>Lili’uokalani Garden").addTo(mymap);
var inter = L.marker([19.731883402502742, -155.04613975306552], {icon: myIcon}).bindPopup("<b>Keaukaha Beach Park").addTo(mymap);
var jung = L.marker([19.905149056355523, -155.14147979903612], {icon: myIcon}).bindPopup("<b>The Umauma Falls Experience").addTo(mymap);