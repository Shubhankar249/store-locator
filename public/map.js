mapboxgl.accessToken = 'pk.eyJ1IjoicmVhbG5hbWUyNCIsImEiOiJja2VzOHA3cGwzOTF4MnJucDdsaGszNzF3In0.lYF0B3yCO9oZUnzY6IdREg'; //Access Token from mapbox here;

const map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    zoom:10,
    center:[77.1981184, 28.5075192]
})

// fetch stores
async function getStores() {
    const res = await fetch('/api/stores');
    const data= await res.json();

    const stores = data.data.map(store=> {
        return {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': store.location.coordinates
            },
            'properties':{
                'storeId':store.storeId,
                'icon': 'shop'
            }
        }
    });
    loadMap(stores);
}
getStores();


// Load map with stores
function loadMap(stores) {
    map.on('load', function() {
        map.addSource('point', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features':stores,
            }
        });
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point',
            'layout': {
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field':'{storeId}',
                'text-font':['Open Sans Semibold, Arial Unicode MS Bold'],
                'text-offset':[0,0.9],
                'text-anchor':'top'
            }
        })
    })
}

