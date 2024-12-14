let map = L.map('Map').setView([51.38487, 4.47753], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let Marker = L.marker([51.38487, 4.47753]).addTo(map);
Marker.bindPopup("Kalmthout").openPopup();