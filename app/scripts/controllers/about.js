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
      url: "./images/marker.png", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0)
    };

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
          icon: icon
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

    /*function CustomMarker(latlng, map, imageSrc) {
      this.latlng_ = latlng;
      this.imageSrc = imageSrc;
      // Once the LatLng and text are set, add the overlay to the map.  This will
      // trigger a call to panes_changed which should in turn call draw.
      this.setMap(map);
    }

    CustomMarker.prototype = new google.maps.OverlayView();

    CustomMarker.prototype.draw = function() {
      // Check if the div has been created.
      var div = this.div_;
      if (!div) {
        // Create a overlay text DIV
        div = this.div_ = document.createElement('div');
        // Create the DIV representing our CustomMarker
        div.className = "customMarker"


        var img = document.createElement("img");
        img.src = this.imageSrc;
        div.appendChild(img);
        google.maps.event.addDomListener(div, "click", function(event) {
          google.maps.event.trigger(me, "click");
        });

        // Then add the overlay to the DOM
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
      }

      // Position the overlay 
      var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
      if (point) {
        div.style.left = point.x + 'px';
        div.style.top = point.y + 'px';
      }
    };

    CustomMarker.prototype.getBounds = function() 
	{
	    return new google.maps.LatLngBounds(this.latlng_, this.latlng_); 
	};

	CustomMarker.prototype.getPoint = function() 
	{
	    var bounds = this.getBounds();
	    var projection = this.getProjection();
	    var sw = projection.fromLatLngToDivPixel(bounds.getSouthWest());  
        var ne = projection.fromLatLngToDivPixel(bounds.getNorthEast()); 
	    return new google.maps.Point(sw.x, ne.y);
	};

	CustomMarker.prototype._generatePopupContent = function()
	{
		return "xyxxxx";// return markup for the popupwindow
	};

	CustomMarker.prototype.getSuperContainer = function()
	{
	    var panes = this.getPanes();
	    return jQuery(panes ? panes.overlayImage : "");
	};

    CustomMarker.prototype.remove = function() {
      // Check if the overlay was on the map and needs to be removed.
      if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      }
    };

    CustomMarker.prototype.getPosition = function() {
      return this.latlng_;
    };

    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: new google.maps.LatLng(12.9833, 77.5833),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var data = [{
      profileImage: "./images/user.png",
      pos: [12.9833 + (Math.random() / 100), 77.5833 + (Math.random() / 100)],
    }, {
      profileImage: "./images/user.png",
      pos: [12.9833 + (Math.random() / 100), 77.5833 + (Math.random() / 100)],
    }];

    for (var i = 0; i < data.length; i++) {
      new CustomMarker(new google.maps.LatLng(data[i].pos[0], data[i].pos[1]), map, data[i].profileImage)
    }*/
  });
