'use strict';

/**
 * @ngdoc function
 * @name ang1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ang1App
 */
angular.module('ang1App')
  .controller('AboutCtrl', function() {
    var currentPos = [12.9833, 77.5833];
    var icon = {
      url: "data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2252px%22%20height%3D%2252px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M256%2C0C167.641%2C0%2C96%2C71.625%2C96%2C160c0%2C24.75%2C5.625%2C48.219%2C15.672%2C69.125C112.234%2C230.313%2C256%2C512%2C256%2C512l142.594-279.375%20%20%20C409.719%2C210.844%2C416%2C186.156%2C416%2C160C416%2C71.625%2C344.375%2C0%2C256%2C0z%20M256%2C256c-53.016%2C0-96-43-96-96s42.984-96%2C96-96%20%20%20c53%2C0%2C96%2C43%2C96%2C96S309%2C256%2C256%2C256z%22%20style%3D%22fill%3A%20rgb%28145%2C%20220%2C%2090%29%3B%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0)
    };
    var contentString = "kuch bhi";
    var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	var markers2;
    function initMap() {
    	var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 15,
	        center: {
	          lat: 12.9833,
	          lng: 77.5833
	        }
	    });
      	var markers = locations.map(function(location, i) {
	        return new google.maps.Marker({
	        	position: location,
	        	icon: icon,
	        	title: 'Uluru (Ayers Rock)'
	        });
	    });
      // Add a marker clusterer to manage the markers.
	    var markerCluster = new MarkerClusterer(map, markers, {
	    	imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	    });
    }
    var locations = [
    	{
      lat: 12.9833 + (Math.random() / 100),
      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, {
	      lat: 12.9833 + (Math.random() / 100),
	      lng: 77.5833 + (Math.random() / 100)
	    }, 
    ];
    setTimeout(function() {
      initMap();
    }, 100);
  });
