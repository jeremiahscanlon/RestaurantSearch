// Mapbox API
var mapbox = "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ.T6YbdDixkOBWH_k9GbS8JQ";

// Creating map object
var myMap = L.map("map", {
  center: [40.73, -73.98],
  zoom: 12
});

var myIcon1 = L.icon({
    iconUrl: '/static/css/american.png',
    iconSize: [35, 35]
});

var myIcon2 = L.icon({
    iconUrl: '/static/css/indian.png',
    iconSize: [38, 35]
});

var myIcon3 = L.icon({
    iconUrl: '/static/css/chinese.png',
    iconSize: [35, 35]
});

var myIcon4 = L.icon({
    iconUrl: '/static/css/mexican.png',
    iconSize: [35, 35]
});

var myIcon5 = L.icon({
    iconUrl: '/static/css/italian.png',
    iconSize: [35, 35]
});

var myIcon6 = L.icon({
    iconUrl: '/static/css/french.png',
    iconSize: [35, 35]
});

// Adding tile layer to the map
L.tileLayer(mapbox).addTo(myMap);

//var latitude=[40.7408681,40.74565556,40.73036944,40.74059167,40.75873611];
//var longitude=[-73.9879841,-74.00546389,-73.98403889,-73.99808611,-73.98901389];
//var restaurant_name=["Shake Shack","Cookshop","SMAC","Cafeteria","Shake Shack"];
//var address=["Madison Square Park, 23rd & Madison, New York 10010", "156 10th Avenue, New York 10011","197 First Avenue, New York 10003","119 7th Avenue, New York 10011","691 8th Avenue, New York 10036"]

  // Creating a new marker cluster group
//  var markers = L.markerClusterGroup();

  // Loop through our data...
//  for (var i = 0; i < latitude.length; i++) {


      // Add a new marker to the cluster group and bind a pop-up
//     markers.addLayer(L.marker([latitude[i], longitude[i]])
//        .bindPopup(restaurant_name[i] + "<hr>" + address[i]));

//  }

//cuisine ids for american, indian, chinese, mexican and italian french
//cuisines=["1","148","25","73","55","45"]
var zomato_url = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=";
var zomato_key="&apikey=8b5af15b6d0dbad77cfa61ee84694638";

//American
var url = zomato_url + "1"+ zomato_key;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers = L.markerClusterGroup();
  console.log(response.restaurants.length);
  //console.log("restaurant length "+string(response.restaurants.length));

  // Loop through our data...
  for (var i = 0; i < response.restaurants.length; i++) {
    // set the data location property to a variable
    var restaurant = response.restaurants[i].restaurant;
console.log(restaurant);
    // If the data has a location property...
    if (restaurant) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([restaurant.location.latitude, restaurant.location.longitude], {icon: myIcon1})
      .bindPopup(restaurant.name + "<hr>" + restaurant.cuisines + "<hr>" + "Rating: "+restaurant.user_rating.aggregate_rating+ "    Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + restaurant.location.address + "<hr>" +  "<a href='"+ restaurant.url+"'>Reviews</a>"));
        //.bindPopup(restaurant.name + "<hr>" + restaurant.location.address+ "<hr>" + restaurant.cuisines + "<hr>" + "Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + "Reviews: "+ restaurant.url));
    }
//<a href="/map">Map</a>
  }
  // Add our marker cluster layer to the map
 myMap.addLayer(markers);
});

//Indian
var url = zomato_url + "148"+ zomato_key;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers2 = L.markerClusterGroup();
  console.log(response.restaurants.length);
  //console.log("restaurant length "+string(response.restaurants.length));

  // Loop through our data...
  for (var i = 0; i < response.restaurants.length; i++) {
    // set the data location property to a variable
    var restaurant = response.restaurants[i].restaurant;
console.log(restaurant);
    // If the data has a location property...
    if (restaurant) {

      // Add a new marker to the cluster group and bind a pop-up
      markers2.addLayer(L.marker([restaurant.location.latitude, restaurant.location.longitude], {icon: myIcon2})
      .bindPopup(restaurant.name + "<hr>" + restaurant.cuisines + "<hr>" + "Rating: "+restaurant.user_rating.aggregate_rating+ "    Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + restaurant.location.address + "<hr>" +  "<a href='"+ restaurant.url+"'>Reviews</a>"));
        //.bindPopup(restaurant.name + "<hr>" + restaurant.location.address+ "<hr>" + restaurant.cuisines + "<hr>" + "Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + "Reviews: "+ restaurant.url));
    }

  }
 

  // Add our marker cluster layer to the map
  myMap.addLayer(markers2);
});

//chinese
var url = zomato_url + "25"+ zomato_key;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers3 = L.markerClusterGroup();
  console.log(response.restaurants.length);
  //console.log("restaurant length "+string(response.restaurants.length));

  // Loop through our data...
  for (var i = 0; i < response.restaurants.length; i++) {
    // set the data location property to a variable
    var restaurant = response.restaurants[i].restaurant;
console.log(restaurant);
    // If the data has a location property...
    if (restaurant) {

      // Add a new marker to the cluster group and bind a pop-up
      markers3.addLayer(L.marker([restaurant.location.latitude, restaurant.location.longitude], {icon: myIcon3})
      .bindPopup(restaurant.name + "<hr>" + restaurant.cuisines + "<hr>" + "Rating: "+restaurant.user_rating.aggregate_rating+ "    Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + restaurant.location.address + "<hr>" +  "<a href='"+ restaurant.url+"'>Reviews</a>"));
      //  .bindPopup(restaurant.name + "<hr>" + restaurant.location.address+ "<hr>" + restaurant.cuisines + "<hr>" + "Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + "Reviews: "+ restaurant.url));
    }

  }
 

  // Add our marker cluster layer to the map
  myMap.addLayer(markers3);
});


//mexican
var url = zomato_url + "73"+ zomato_key;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers4 = L.markerClusterGroup();
  console.log(response.restaurants.length);
  //console.log("restaurant length "+string(response.restaurants.length));

  // Loop through our data...
  for (var i = 0; i < response.restaurants.length; i++) {
    // set the data location property to a variable
    var restaurant = response.restaurants[i].restaurant;
console.log(restaurant);
    // If the data has a location property...
    if (restaurant) {

      // Add a new marker to the cluster group and bind a pop-up
      markers4.addLayer(L.marker([restaurant.location.latitude, restaurant.location.longitude], {icon: myIcon4})
      .bindPopup(restaurant.name + "<hr>" + restaurant.cuisines + "<hr>" + "Rating: "+restaurant.user_rating.aggregate_rating+ "    Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + restaurant.location.address + "<hr>" +  "<a href='"+ restaurant.url+"'>Reviews</a>"));
      //  .bindPopup(restaurant.name + "<hr>" + restaurant.location.address+ "<hr>" + restaurant.cuisines + "<hr>" + "Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + "Reviews: "+ restaurant.url));
    }

  }
 

  // Add our marker cluster layer to the map
  console.log("adding mexican");
  myMap.addLayer(markers4);
});

//italian
var url = zomato_url + "55"+ zomato_key;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers5 = L.markerClusterGroup();
  console.log(response.restaurants.length);
  //console.log("restaurant length "+string(response.restaurants.length));

  // Loop through our data...
  for (var i = 0; i < response.restaurants.length; i++) {
    // set the data location property to a variable
    var restaurant = response.restaurants[i].restaurant;
console.log(restaurant);
    // If the data has a location property...
    if (restaurant) {

      // Add a new marker to the cluster group and bind a pop-up
      markers5.addLayer(L.marker([restaurant.location.latitude, restaurant.location.longitude], {icon: myIcon5})
      .bindPopup(restaurant.name + "<hr>" + restaurant.cuisines + "<hr>" + "Rating: "+restaurant.user_rating.aggregate_rating+ "    Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + restaurant.location.address + "<hr>" +  "<a href='"+ restaurant.url+"'>Reviews</a>"));
      //  .bindPopup(restaurant.name + "<hr>" + restaurant.location.address+ "<hr>" + restaurant.cuisines + "<hr>" + "Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + "Reviews: "+ restaurant.url));
    }

  }
 

  // Add our marker cluster layer to the map
  console.log("adding italian");
  myMap.addLayer(markers5);
});

//french
var url = zomato_url + "45"+ zomato_key;

// Grabbing the data with d3..
d3.json(url, function(response) {

  // Creating a new marker cluster group
  var markers6 = L.markerClusterGroup();
  console.log(response.restaurants.length);
  //console.log("restaurant length "+string(response.restaurants.length));

  // Loop through our data...
  for (var i = 0; i < response.restaurants.length; i++) {
    // set the data location property to a variable
    var restaurant = response.restaurants[i].restaurant;
console.log(restaurant);
    // If the data has a location property...
    if (restaurant) {

      // Add a new marker to the cluster group and bind a pop-up
      markers6.addLayer(L.marker([restaurant.location.latitude, restaurant.location.longitude], {icon: myIcon6})
      .bindPopup(restaurant.name + "<hr>" + restaurant.cuisines + "<hr>" + "Rating: "+restaurant.user_rating.aggregate_rating+ "    Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + restaurant.location.address + "<hr>" +  "<a href='"+ restaurant.url+"'>Reviews</a>"));
      //  .bindPopup(restaurant.name + "<hr>" + restaurant.location.address+ "<hr>" + restaurant.cuisines + "<hr>" + "Avg Cost for 2: $" +restaurant.average_cost_for_two + "<hr>" + "Reviews: "+ restaurant.url));
    }

  }
 

  // Add our marker cluster layer to the map
  console.log("adding french");
  myMap.addLayer(markers6);
});

console.log("adding yelp1");
d3.json("/static/js/yelp.json", function(response){
  console.log("adding yelp2");
  console.log(response);
  var yelprestaurants  = response.businesses;
  console.log(yelprestaurants);
  console.log(yelprestaurants.length);
  var yelpmarker = L.markerClusterGroup();
  for (var i = 0; i < yelprestaurants.length; i++) {
    var yelprestaurant = yelprestaurants[i];
    console.log("yelp: "+ yelprestaurant)
if (yelprestaurant) {
    yelpmarker.addLayer(L.marker([yelprestaurant.coordinates.latitude, yelprestaurant.coordinates.longitude], {icon: myIcon1})
      .bindPopup(yelprestaurant.name + "<hr>" + "American"+ "<hr>" + "Rating: " + yelprestaurant.rating + "  Price level: " +yelprestaurant.price + "<hr>" +yelprestaurant.location.address1+', '+ yelprestaurant.location.city+ ' '+yelprestaurant.location.state+ ' '+yelprestaurant.location.zip_code+ "<hr>" + "<a href='"+ yelprestaurant.url+"'>Reviews</a>"));
}
    //yelprestaurants.push(yelpmarker)
  }
  console.log("adding yelp to map");
   myMap.addLayer(yelpmarker);
}) ;

