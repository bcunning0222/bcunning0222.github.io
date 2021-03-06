
function select1980(){
    

    L.control.layers(ReligionGroup80).addTo(map);
    L.control.layers(IncomeGroup80).addTo(mapA);
    L.control.layers(EducationGroup80).addTo(mapB);
}
function select1990(){
    
    L.control.layers(ReligionGroup90).addTo(map);
    L.control.layers(IncomeGroup90).addTo(mapA);
    L.control.layers(EducationGroup90).addTo(mapB);
}
function select2000(){
    L.control.layers(ReligionGroup2000).addTo(map);
    L.control.layers(IncomeGroup2000).addTo(mapA);
    L.control.layers(EducationGroup2000).addTo(mapB);
}
        //global variables:
        var geojson;
        var map;
        // control that shows state info on hover
        var center = [40.25, -83];
        var REGmapOptions = {
            minZoom: 6,
            maxZoom: 7,
            id: 'mapbox.light'
        };

        var stamenOptions = {
            attribution:
                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
                '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; ' +
                'Map data OpenStreetmap',
            subdomains: 'abcd',
            minZoom: 6,
            maxZoom: 7
        };
        var BWstreetmap = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        var WaterColorMap = 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg';
        var map1base = L.tileLayer(BWstreetmap, REGmapOptions);
        var map2base = L.tileLayer(BWstreetmap, REGmapOptions);
        var map3base = L.tileLayer(BWstreetmap, REGmapOptions);
        var map1baseW = L.tileLayer(WaterColorMap, stamenOptions);

        //Religion Layers 80s
        var Catholic80 = L.geoJson(counties, { style: r180, onEachFeature: onEachFeature });
        var EPro80 = L.geoJson(counties, { style: r280, onEachFeature: onEachFeature });
        var MPro80 = L.geoJson(counties, { style: r380, onEachFeature: onEachFeature });
        var Other80 = L.geoJson(counties, { style: r480, onEachFeature: onEachFeature });
            //Religion Layers 90s
            var Catholic90 = L.geoJson(counties, { style: r190, onEachFeature: onEachFeature });
            var EPro90 = L.geoJson(counties, { style: r290, onEachFeature: onEachFeature });
            var MPro90 = L.geoJson(counties, { style: r390, onEachFeature: onEachFeature });
            var Other90 = L.geoJson(counties, { style: r490, onEachFeature: onEachFeature });
                //Religion Layers 2000s
                var Catholic2000 = L.geoJson(counties, { style: r100, onEachFeature: onEachFeature });
                var EPro2000 = L.geoJson(counties, { style: r200, onEachFeature: onEachFeature });
                var MPro2000 = L.geoJson(counties, { style: r300, onEachFeature: onEachFeature });
                var Other2000 = L.geoJson(counties, { style: r400, onEachFeature: onEachFeature });
        //Income Layers 80s
        var Under2580 = L.geoJson(counties, { style: i180, onEachFeature: onEachFeature });
        var to5080 = L.geoJson(counties, { style: i280, onEachFeature: onEachFeature });
        var to7580 = L.geoJson(counties, { style: i380, onEachFeature: onEachFeature });
        var Over7580 = L.geoJson(counties, { style: i480, onEachFeature: onEachFeature });
            //Income Layers 90s
            var Under2590 = L.geoJson(counties, { style: i190, onEachFeature: onEachFeature });
            var to5090 = L.geoJson(counties, { style: i290, onEachFeature: onEachFeature });
            var to7590 = L.geoJson(counties, { style: i390, onEachFeature: onEachFeature });
            var Over7590 = L.geoJson(counties, { style: i490, onEachFeature: onEachFeature });
                //Income Layers 2000s
                var Under252000 = L.geoJson(counties, { style: i100, onEachFeature: onEachFeature });
                var to502000 = L.geoJson(counties, { style: i200, onEachFeature: onEachFeature });
                var to752000 = L.geoJson(counties, { style: i300, onEachFeature: onEachFeature });
                var Over752000 = L.geoJson(counties, { style: i400, onEachFeature: onEachFeature });

        //Education Layers80s
        var MS80 = L.geoJson(counties, { style: e180, onEachFeature: onEachFeature });
        var HS80 = L.geoJson(counties, { style: e280, onEachFeature: onEachFeature });
        var College80 = L.geoJson(counties, { style: e380, onEachFeature: onEachFeature });
            //Education Layers90s
            var MS90 = L.geoJson(counties, { style: e190, onEachFeature: onEachFeature });
            var HS90 = L.geoJson(counties, { style: e290, onEachFeature: onEachFeature });
            var College90 = L.geoJson(counties, { style: e390, onEachFeature: onEachFeature });
                //Education Layers2000s
                var MS2000 = L.geoJson(counties, { style: e100, onEachFeature: onEachFeature });
                var HS2000 = L.geoJson(counties, { style: e200, onEachFeature: onEachFeature });
                var College2000 = L.geoJson(counties, { style: e300, onEachFeature: onEachFeature });

        var map = L.map('map', {
            layers: [map1base],
            center: center,
            zoom: 14,
            zoomControl: false
        });
// this is for the 80s group only
        var ReligionGroup80 = {
            "Catholic 80s": Catholic80,
            "Evangelical Protestant 80s": EPro80,
            "Mainland Protestant 80s": MPro80,
            "Other 80s (Jewish, Muslim, Mormon, etc.)": Other80,
        };
        var IncomeGroup80 = {
            "Under $25,000 80s": Under2580,
            "$25,000 to $50,000 80s": to5080,
            "$50,000 to $75,000 80s": to7580,
            "Over $75,000 80s": Over7580,
        };
        var EducationGroup80 = {
            "Middle School 80s": MS80,
            "High School 80s": HS80,
            "College 80s": College80
        };
        // this is for the 90s group only
        var ReligionGroup90 = {
            "Catholic90s": Catholic90,
            "Evangelical Protestant90s": EPro90,
            "Mainland Protestant90s": MPro90,
            "Other90s (Jewish, Muslim, Mormon, etc.)": Other90,
        };
        var IncomeGroup90 = {
            "Under $25,000 90s": Under2590,
            "$25,000 to $50,000 90s": to5090,
            "$50,000 to $75,000 90s": to7590,
            "Over $75,000 90s": Over7590,
        };
        var EducationGroup90 = {
            "Middle School 90s": MS90,
            "High School 90s": HS90,
            "College 90s": College90
        };
        // this is for the 80s group only
        var ReligionGroup2000 = {
            "Catholic 2000s": Catholic2000,
            "Evangelical Protestant 2000s": EPro2000,
            "Mainland Protestant 2000s": MPro2000,
            "Other 2000s (Jewish, Muslim, Mormon, etc.)": Other2000,
        };
        var IncomeGroup2000 = {
            "Under $25,000 2000s": Under252000,
            "$25,000 to $50,000 2000s": to502000,
            "$50,000 to $75,000 2000s": to752000,
            "Over $75,000 2000s": Over752000,
        };
        var EducationGroup2000 = {
            "Middle School 2000s": MS2000,
            "High School 2000s": HS2000,
            "College 2000s": College2000
        };

        //Map A Zoom
        var mapA = L.map('mapA', {
            layers: [map2base],
            center: center,
            zoom: 14,
            zoomControl: false
        });
        var mapB = L.map('mapB', {
            layers: [map3base],
            center: center,
            zoom: 14,
            zoomControl: false
        });
        //right here starts the 80s style
        function r180(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R180)
            };
        }
        function r280(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R280)
            };
        }
        function r380(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R380)
            };
        }
        function r480(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R480)
            };
        }
        function i180(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I180)
            };
        }
        function i280(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I280)
            };
        }
        function i380(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I380)
            };
        }
        function i480(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I480)
            };
        }
        function e180(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E180)
            };
        }
        function e280(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E280)
            };
        }
        function e380(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E380)
            };
        }

        //right here starts the 90s style
        function r190(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R190)
            };
        }
        function r290(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R290)
            };
        }
        function r390(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R390)
            };
        }
        function r490(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R490)
            };
        }
        function i190(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I190)
            };
        }
        function i290(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I290)
            };
        }
        function i390(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I390)
            };
        }
        function i490(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I490)
            };
        }
        function e190(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E190)
            };
        }
        function e290(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E290)
            };
        }
        function e390(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E390)
            };
        }
        //right here starts the 2000s style
        function r100(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R100)
            };
        }
        function r200(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R200)
            };
        }
        function r300(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R300)
            };
        }
        function r400(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R400)
            };
        }
        function i100(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I100)
            };
        }
        function i200(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I200)
            };
        }
        function i300(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I300)
            };
        }
        function i400(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I400)
            };
        }
        function e100(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E100)
            };
        }
        function e200(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E200)
            };
        }
        function e300(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E300)
            };
        }
        function style1(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor1(feature.properties.R180)
            };
        }
        function style2(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor2(feature.properties.I180)
            };
        }
        function style3(feature) {
            return {
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1,
                fillColor: getColor3(feature.properties.E180)
            };
        }
        //control just the 80s 90s 2000s
        
        


        var info = L.control({ position: 'topright' });
        geojson = L.geoJson(counties, { style: style1, onEachFeature: onEachFeature });
        var legend = L.control({ position: 'bottomright' });

        legend.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor1(from + 1) + '"></i> ' +
                    from + (to ? '%&ndash;' + to + '%' : '%+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };
        legend.addTo(map);

        //Adding legendA to MapA
        var info = L.control({ position: 'topright' });
        geojson = L.geoJson(counties, { style: style1, onEachFeature: onEachFeature });
        var legendA = L.control({ position: 'bottomright' });

        legendA.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor2(from + 1) + '"></i> ' +
                    from + (to ? '%&ndash;' + to + '%' : '%+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };
        legendA.addTo(mapA);

        //Adding legendB to MapB
        var info = L.control({ position: 'topright' });
        geojson = L.geoJson(counties, { style: style1, onEachFeature: onEachFeature });
        var legendB = L.control({ position: 'bottomright' });

        legendB.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
                labels = [],
                from, to;

            for (var i = 0; i < grades.length; i++) {
                from = grades[i];
                to = grades[i + 1];

                labels.push(
                    '<i style="background:' + getColor3(from + 1) + '"></i> ' +
                    from + (to ? '%&ndash;' + to + '%' : '%+'));
            }

            div.innerHTML = labels.join('<br>');
            return div;
        };
        legendB.addTo(mapB);

        // get color depending on population density value
                function getColor3(d) {
            return d > 90 ? 'hsl(225, 80%, 15%)' :
                d > 80 ? 'hsl(216, 86%, 23%)' :
                    d > 70 ? 'hsl(210, 90%, 32%)' :
                        d > 60 ? 'hsl(208, 69%, 42%)' :
                            d > 50 ? 'hsl(204, 54%, 52%)' :
                                d > 40 ? 'hsl(202, 57%, 63%)' :
                                    d > 30 ? 'hsl(201, 53%, 75%)' :
                                        d > 20 ? 'hsl(209, 56%, 86%)' :
                                            d > 10 ? 'hsl(209, 61%, 92%)' :
                                                d < 10 ? 'hsl(210, 100%, 98%' :
                                                '#f7fbff';
        }

                function getColor2(d) {
            return d > 90 ? '#00441b' :
                d > 80 ? '#006d2c' :
                    d > 70 ? '#238b45' :
                        d > 60 ? '#41ab5d' :
                            d > 50 ? '#74c476' :
                                d > 40 ? '#a1d99b' :
                                    d > 30 ? '#c7e9c0' :
                                        d > 20 ? '#e5f5e0' :
                                            d > 10 ? '#f7fcf5' :
                                                d < 10 ? 'hsl(210, 100%, 98%' :
                                                '#f7fbff';
        }

                function getColor1(d) {
            return d > 90 ? '#000000' :
                d > 80 ? '#252525' :
                    d > 70 ? '#525252' :
                        d > 60 ? '#737373' :
                            d > 50 ? '#969696' :
                                d > 40 ? '#bdbdbd' :
                                    d > 30 ? '#d9d9d9' :
                                        d > 20 ? '#f0f0f0' :
                                            d > 10 ? '#ffffff' :
                                                d < 10 ? 'hsl(210, 100%, 98%' :
                                                '#f7fbff';
        }
        function highlightFeature(e) {
            var layer = e.target;
            layer.bindPopup("<b>County: </b>" + e.name)
            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });
        }


        function resetHighlight(e) {
            var layer = e.target;

            layer.setStyle({
                weight: .5,
                opacity: 1,
                color: 'black',
                dashArray: '3',
                fillOpacity: 1
            });
        }

        function zoomToFeature(e) {
            map.fitBounds(e.target.getBounds());
        }


        function onEachFeature(feature, layer) {
            var layerStyle = {};
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight
            });
        }
