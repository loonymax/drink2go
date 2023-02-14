const mapImage = document.querySelector('.map__image');

mapImage.classList.remove('map__image--nojs');

const map = L.map('map__canvas')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 20);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerIcon = L.icon({
  iconUrl: '../img/marker-icon.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: markerIcon,
  },
);

marker.addTo(map);

