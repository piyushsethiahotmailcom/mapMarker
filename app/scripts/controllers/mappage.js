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
    function CustomMarker(latlng, map, imageSrc, location) {
      this.latlng_ = latlng;
      this.dragValue = false;
      this.imageSrc = imageSrc;
      map.getDraggable = function(){return true;};
      map.getPosition = function () { return location;};
      map.getMap = function(){
        return map;
      };
      cm.push(map);
      this.setMap(map);
    }
    CustomMarker.prototype = new google.maps.OverlayView();
    CustomMarker.prototype.draw = function () {
      var div = this.div_;
      if (!div) {
        div = this.div_ = document.createElement('div');
        div.className = "customMarker"
        var img = document.createElement("img");
        img.src = this.imageSrc;
        div.appendChild(img);
        google.maps.event.addDomListener(div, "click", function (event) {
            google.maps.event.trigger(showInfo, "click");
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
    
    function showInfo(){
      infoWindow.open(CustomMarker.prototype.get('map'), CustomMarker.prototype);
    }
    var map;
    var userUrl = "./images/user.png";
    var currentLocation = new google.maps.LatLng(12.98474873170, 77.5899640154);
    var overLay;
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
    var icon = {
      url: "data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2252px%22%20height%3D%2252px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M256%2C0C167.641%2C0%2C96%2C71.625%2C96%2C160c0%2C24.75%2C5.625%2C48.219%2C15.672%2C69.125C112.234%2C230.313%2C256%2C512%2C256%2C512l142.594-279.375%20%20%20C409.719%2C210.844%2C416%2C186.156%2C416%2C160C416%2C71.625%2C344.375%2C0%2C256%2C0z%20M256%2C256c-53.016%2C0-96-43-96-96s42.984-96%2C96-96%20%20%20c53%2C0%2C96%2C43%2C96%2C96S309%2C256%2C256%2C256z%22%20style%3D%22fill%3A%20rgb%28145%2C%20220%2C%2090%29%3B%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0)
    };
    overlayModel.prototype = new google.maps.OverlayView();
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: currentLocation,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(12.98474873170, 77.5899640154),
        new google.maps.LatLng(12.98474873, 77.5899640)
      );
      var srcImage = 'https://developers.google.com/maps/documentation/'+'javascript/examples/full/images/talkeetna.png';
      overLay = new overlayModel(bounds, srcImage, map)
      var marker = locations.map(function(location,i){
        new CustomMarker(new google.maps.LatLng(location), map, userUrl, location);
        /*return new google.maps.Marker({
          position: location,
          map: map,
          icon: icon,
          size: new google.maps.Size(20, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32),
          label:"u",
          title: 'Click for Info'
        });*/
      });
      var markerCluster = new MarkerClusterer(map, cm,{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            "lat": position.coords.latitude,
            "lng": position.coords.longitude
          };
          var infoWindow = new google.maps.InfoWindow({
            content: "information",
            maxWidth: 200
          });
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
    
    function overlayModel(bounds, image, map) {
      this.bounds_ = bounds;
      this.image_ = image;
      this.map_ = map;
      this.div_ = null;
      this.setMap(map);
    }
    overlayModel.prototype.onAdd = function() {
      var div = document.createElement('div');
      div.style.borderStyle = 'none';
      div.style.borderWidth = '0px';
      div.style.position = 'absolute';
      var img = document.createElement('img');
      img.src = this.image_;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.position = 'absolute';
      div.appendChild(img);
      this.div_ = div;
      // Add the element to the "overlayLayer" pane.
      var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
    };
    overlayModel.prototype.draw = function() {
      var overlayProjection = this.getProjection();
      var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
      var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());
      var div = this.div_;
      div.style.left = sw.x + 'px';
      div.style.top = ne.y + 'px';
      div.style.width = (ne.x - sw.x) + 'px';
      div.style.height = (sw.y - ne.y) + 'px';
    };
    overlayModel.prototype.onRemove = function() {
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    };
    overlayModel.prototype.getDraggable = function(){ return false;};
    google.maps.event.addDomListener(window, 'load', initMap);

});