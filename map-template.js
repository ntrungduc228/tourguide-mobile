export default `
<div>
    <style>
            html, body {
                margin: 0;
            }

            #map {
                height: 100%;
                width: 100%;
            }
            .marker-icon {
                background-position: center;
                background-size: 22px 22px;
                border-radius: 50%;
                height: 22px;
                left: 4px;
                position: absolute;
                text-align: center;
                top: 3px;
                transform: rotate(45deg);
                width: 22px;
            }
            .marker {
                height: 30px;
                width: 30px;
            }
            .marker-content {
                background: #c30b82;
                border-radius: 50% 50% 50% 0;
                height: 30px;
                left: 50%;
                margin: -15px 0 0 -15px;
                position: absolute;
                top: 50%;
                transform: rotate(-45deg);
                width: 30px;
            }
            .marker-content::before {
                background: #ffffff;
                border-radius: 50%;
                content: "";
                height: 24px;
                margin: 3px 0 0 3px;
                position: absolute;
                width: 24px;
            }
    </style>
   
    
    <div id='map' class='map'></div>

    <!-- load TomTom Maps Web SDK from CDN -->
    <link rel='stylesheet' type='text/css' href='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.13.0/maps/maps.css'/>
    <script src='https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.23.0/maps/maps-web.min.js'></script>
    <script src="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.15.0/services/services-web.min.js"></script>

    <script>
        // create the map
        tt.setProductInfo('TomTom Maps React Native Demo', '6.0');
        let map = tt.map({
            key: 'xB7apm8cn5jchtvm9BIIYqhJYck4xpyY',
            container: 'map',
            center: [106.9077421,10.9050519, 10.9050519],
            zoom: 15,
            stylesVisibility: {
                trafficIncidents: true,
                trafficFlow: true,
              },
        });
       

        map.on('dragend', function() {
            let center = map.getCenter();
            window.ReactNativeWebView.postMessage(center.lng.toFixed(3) + ", " + center.lat.toFixed(3));
        })

        function createMarker(icon, position, color, popupText) {
            var markerElement = document.createElement('div');
            markerElement.className = 'marker';
            var markerContentElement = document.createElement('div');
            markerContentElement.className = 'marker-content';
            markerContentElement.style.backgroundColor = color;
            markerContentElement.style.width = '100px';
            markerContentElement.style.height = '100px';
            markerElement.appendChild(markerContentElement);
            var iconElement = document.createElement('div');
            iconElement.className = 'marker-icon';
            iconElement.style.backgroundImage =
              'url(https://api.tomtom.com/maps-sdk-for-web/cdn/static/' + icon + ')';
            markerContentElement.appendChild(iconElement);
            var popup = new tt.Popup({offset: 30}).setText(popupText);
            // add marker to map
            new tt.Marker({element: markerElement, anchor: 'bottom'})
              .setLngLat(position)
              .setPopup(popup)
              .addTo(map);
          }
    </script>
</div>
`;
