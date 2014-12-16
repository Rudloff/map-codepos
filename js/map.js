/*global L*/
/*jslint browser: true*/
function init() {
    'use strict';
    var map = L.map('map', {
        maxZoom: 15,
        minZoom: 10,
        maxBounds: [
            [47.4058, 6.7291],
            [49.3180, 8.421]
        ]
    }).setView([48.5747, 7.7448], 11);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.tileLayer('http://localhost/map-codepos/php-mbtiles/codes/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.data.gouv.fr/fr/datasets/fond-de-carte-des-codes-postaux/">Emc3</a>'
    }).addTo(map);
}

window.addEventListener('load', init, false);
