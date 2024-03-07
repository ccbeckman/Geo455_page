// MAP 1
var map1 = L.map('map1', {
    center: [51.48882027639122, -0.1028811094342392],
    zoom: 10
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    maxZoom: 11,
    minZoom: 5
}).addTo(map1);

function getColor(value) {
    return value > 139 ? '#54278f' :
           value > 87 ? '#756bb1' :
           value > 53 ? '#9e9ac8' :
           value > 32 ? '#cbc9e2' :
           '#f2f0f7';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.pop_den),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function highlightFeature(e) {
    var feature = e.target;
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

var geojson;

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
}

geojson = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer) {
    return layer.feature.properties.NAME + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';
}).addTo(map1);

var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map1) {
    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 32, 53, 87, 139];

    div.innerHTML = '<b>Population Density <br></b>';

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
    return div;
};

legend.addTo(map1);


// MAP 2
var map2 = L.map('map2', {
    center: [51.48882027639122, -0.1028811094342392],
    zoom: 10
});

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
    maxZoom: 11,
    minZoom: 5
}).addTo(map2);

function getColor2(value) {
    return value > 1.75 ? '#08519c' :
           value > 1.28 ? '#3182bd' :
           value > 0.83 ? '#6baed6' :
           value > 0.53 ? '#bdd7e7' :
                        '#eff3ff';
}

function style2(feature) {
    return {
        fillColor: getColor2(feature.properties.den_speak),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function highlightFeature2(e) {
    var feature = e.target;
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function resetHighlight2(e) {
    geojson2.resetStyle(e.target);
}

var geojson2;

function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: highlightFeature2,
        mouseout: resetHighlight2,
    });
}

geojson2 = L.geoJson(data, {
    style: style2,
    onEachFeature: onEachFeature2
}).bindPopup(function (layer) {
    return layer.feature.properties.NAME + '<p style="color:purple">' + layer.feature.properties.den_speak.toString() + ' people/hectare </p>';
}).addTo(map2);

var legend2 = L.control({ position: 'bottomright' });

legend2.onAdd = function (map2) {
    var div = L.DomUtil.create('div', 'legend'),
        grades = [0.28, 0.53, 0.83, 1.28, 1.75];

    div.innerHTML = '<b>Partial English Speakers <br></b>';

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor2(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend2.addTo(map2);

var overlays = {
    'Population Density': map1,
    'Partial English Speakers': map2,
};

var layerControl = L.control.layers(overlays, { collapsed: false }).addTo(map1);
var layerControl2 = L.control.layers(overlays, { collapsed: false }).addTo(map2);

