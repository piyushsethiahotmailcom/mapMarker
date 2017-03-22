'use strict';

/**
 * @ngdoc function
 * @name ang1App.controller:MappageCtrl
 * @description
 * # MappageCtrl
 * Controller of the ang1App
 */
angular.module('ang1App')
  .controller('MappageCtrl', function () {
    var cm = [];
    var infoWindow = new google.maps.InfoWindow({
      content: "contentString",
      maxWidth: 200
    });
    var map;
    var userUrl = "./images/user.png";
    var currentLocation = new google.maps.LatLng(12.9833, 77.5833);
    var locations = [
      {
      "lat": 12.9833 + (Math.random() / 100),
      "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, {
        "lat": 12.9833 + (Math.random() / 100),
        "lng": 77.5833 + (Math.random() / 100)
      }, 
    ];

    function CustomMarker(latlng, map, imageSrc, location) {
      //  this.extend(CustomMarker.prototype, new google.maps.Marker());
      this.latlng_ = latlng;
      this.dragValue = false;
      this.imageSrc = imageSrc;
      this.setMap(map);
      map.getDraggable = function(){return true;};
      map.getPosition = function () { return location;};
      map.getMap = function(){
        return map;
      };
      map.onRemove = function() {
        this.setReady_(true);
      };
      cm.push(map);
    }
    CustomMarker.prototype = new google.maps.OverlayView();
    //Object.extend(CustomMarker.prototype, new google.maps.Marker());
    CustomMarker.prototype.draw = function () {
      var div = this.div_;
      if (!div) {
        div = this.div_ = document.createElement('div');
        div.className = "customMarker"
        var img = document.createElement("img");
        img.src = this.imageSrc;
        div.appendChild(img);
        google.maps.event.addDomListener(div, "click", function (event) {
            showInfo();
            google.maps.event.trigger(showInfo, "click");
        });
        var div_1=document.createElement('div');
          $(div_1).css('position','relative');
          $(div_1).addClass('agent_locator');
          $(div_1).css('width','130px');
          $(div_1).hide();
          $(div_1).css('padding-left','5px');
          $(div_1).css('padding-right','5px');
          $(div_1).css('padding-top','5px');
          $(div_1).css('background-color','#424242');
          $(div_1).css('height','60px');
          $(div_1).css('bottom','120px');
          $(div_1).css('left','-40px');
          $(div_1).html('<span style="color:green"><b>Latest</b></span> <br/><small style="color:white;">Bangalore Central mall, Bangalore, KA</small><br/><small style="color:white;"><b>12:02AM|FEB 27,2016</b></small>');
          $(div).append(div_1);
          $(img).on('click',function(){
          $(div_1).toggle();
        });
        var panes = this.getPanes();
        panes.overlayImage.appendChild(div);
      }
      var point = this.getProjection().fromLatLngToDivPixel(this.latlng_);
      if (point) {
        div.style.left = point.x + 'px';
        div.style.top = point.y + 'px';
      }
    };  
    CustomMarker.prototype.remove = function () {
      if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      }
    };
    CustomMarker.prototype.setVisible = function() {
      return true;
    };

    CustomMarker.prototype.getPosition = function() {
      return new google.maps.LatLng(12.9833, 77.5833);
    };
    
    function showInfo(){
      infoWindow.open(CustomMarker.prototype.get('map'), CustomMarker.prototype);
    }
    //overlayModel.prototype = new google.maps.OverlayView();
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: currentLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.DRIVING,
        mapTypeControl: false,
        streetViewControl: false
      });
      var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(12.9833, 77.5833),
        new google.maps.LatLng(12.9847, 77.5899)
      );
      var srcImage = 'https://developers.google.com/maps/documentation/'+'javascript/examples/full/images/talkeetna.png';
      locations.map(function(location,i){
        new CustomMarker(new google.maps.LatLng(location), map, userUrl, location);
       });
      var markerCluster = new MarkerClusterer(map, cm,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            "lat": position.coords.latitude,
            "lng": position.coords.longitude
          };
          for(var i=0; i<locations.length; i++)
          CustomMarker.prototype.addListener('click', function() {
            infoWindow.open(CustomMarker.prototype.get('map'), CustomMarker.prototype);
          });
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    }
    google.maps.event.addDomListener(window, 'load', initMap);
    document.addEventListener('DOMContentLoaded', function() {
      document.addEventListener('click', clickHandlerDelegate);
    });
    function clickHandlerDelegate(clickEvent) {
      var index = clickEvent.target.dataset.id;
      cm[index].setMap(null);
   }
});