/*=========================================================================================
    File Name: maps-leaflet.js
    Description: Leaflet Maps.
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
$(document).ready(function () {

    function getMapIcon(color) {
        const markerHtmlStyles = `
          background-color: ${color};
          width: 3rem;
          height: 3rem;
          display: block;
          left: -1.5rem;
          top: -1.5rem;
          position: relative;
          border-radius: 3rem 3rem 0;
          transform: rotate(45deg);
          border: 1px solid #FFFFFF`

        const icon = L.divIcon({
            className: "my-custom-pin",
            iconAnchor: [
                0, 24
            ],
            labelAnchor: [
                -6, 0
            ],
            popupAnchor: [
                0, -36
            ],
            html: `<span style="${markerHtmlStyles}" />`
        })

        return icon;
    }

    $(".maps-leaflet-container").css("height", "500px");
// initialize the Custom Icons map
    var mapsLeafletCustomIcons = L.map('maps-leaflet-custom-icons').setView([
        dhaka_lat, dhaka_long
    ], 14);

// copyright
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.dhakawasa.com/">Dhaka WASA</a>',
        maxZoom: 18
    }).addTo(mapsLeafletCustomIcons);

    mapsLeafletCustomIcons.eachLayer(function (layer) {
        if (layer.type == "Marker") {
            mapsLeafletCustomIcons.removeLayer(layer)
        }
    });
//
//
// var markerList = []
//
// function draw() {
//   // mapsLeafletCustomIcons.clearLayers()
//   mapsLeafletCustomIcons.eachLayer(function (layer) {
//       if(layer.type == "Marker"){
//         mapsLeafletCustomIcons.removeLayer(layer)
//       }
//   });
//   for (let i = 0; i < lats.length; i++) {
//     if (status[i]) {
//       var marker = L.marker([
//         lats[i], longs[i]
//       ], {icon: getMapIcon('#00FF00')})
//       marker.type = "Marker"
//       marker.addTo(mapsLeafletCustomIcons)
//       // markerList.push(marker)
//     } else {
//       var marker = L.marker([
//         lats[i], longs[i]
//       ], {icon: getMapIcon('#808080')})
//       marker.type = "Marker"
//       marker.addTo(mapsLeafletCustomIcons)
//     }
//   }
//   if(center_lat){
//     mapsLeafletCustomIcons.panTo(new L.LatLng(center_lat, center_long));
//   }
// }


});
