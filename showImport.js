
function addGeoJSONToMapAndTable(geoJSONUrl) {
    $.getJSON(geoJSONUrl, function (data) {

        document.addEventListener("DOMContentLoaded", () => {
            const pointTable = document.getElementById("pointTable").getElementsByTagName('tbody')[0];
        
            fetch("./json/data_point.json") // Ganti "data.json" dengan nama file JSON Anda
                .then(response => response.json())
                .then(data => {
                    data.features.forEach(feature => {
                        if (feature.geometry.type === "Point") {
                            const row = pointTable.insertRow();
                            const nameCell = row.insertCell(0);
                            const coordinatesCell = row.insertCell(1);
                            const typeCell = row.insertCell(2);
                            nameCell.innerText = feature.properties.name;
                            coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                            typeCell.innerText = feature.geometry.type;
                            
                        }
                    });
                })
                .catch(error => console.error("Terjadi kesalahan:", error));
        });
        
        document.addEventListener("DOMContentLoaded", () => {
            const pointTable = document.getElementById("polygonTable").getElementsByTagName('tbody')[0];
        
            fetch("./json/data_polygon.json") // Ganti "data.json" dengan nama file JSON Anda
                .then(response => response.json())
                .then(data => {
                    data.features.forEach(feature => {
                        if (feature.geometry.type === "Polygon") {
                            const row = pointTable.insertRow();
                            const nameCell = row.insertCell(0);
                            const coordinatesCell = row.insertCell(1);
                            const typeCell = row.insertCell(2);
                            nameCell.innerText = feature.properties.name;
                            coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                            typeCell.innerText = feature.geometry.type;
                            
                        }
                    });
                })
                .catch(error => console.error("Terjadi kesalahan:", error));
        });
        
        document.addEventListener("DOMContentLoaded", () => {
            const pointTable = document.getElementById("polylineTable").getElementsByTagName('tbody')[0];
        
            fetch("./json/data_polyline.json") // Ganti "data.json" dengan nama file JSON Anda
                .then(response => response.json())
                .then(data => {
                    data.features.forEach(feature => {
                        if (feature.geometry.type === "LineString") {
                            const row = pointTable.insertRow();
                            const nameCell = row.insertCell(0);
                            const coordinatesCell = row.insertCell(1);
                            const typeCell = row.insertCell(2);
                            nameCell.innerText = feature.properties.name;
                            coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                            typeCell.innerText = feature.geometry.type;
                            
                        }
                    });
                })
                .catch(error => console.error("Terjadi kesalahan:", error));
        });

    }

    )
}

// Call the function for LineString GeoJSON using the raw URL
addGeoJSONToMapAndTable('https://raw.githubusercontent.com/Fancyyy21/maulana123.github.io/main/json/data_polyline.json', document.querySelector('table'));

// Call the function for Polygon GeoJSON
addGeoJSONToMapAndTable('https://raw.githubusercontent.com/Fancyyy21/maulana123.github.io/main/json/data_polygon.json', document.querySelector('table'));

// Call the function for Point GeoJSON
addGeoJSONToMapAndTable('https://raw.githubusercontent.com/Fancyyy21/maulana123.github.io/main/json/data_point.json', document.querySelector('table'));


