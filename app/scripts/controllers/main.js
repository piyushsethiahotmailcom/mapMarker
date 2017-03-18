'use strict';

/**
 * @ngdoc function
 * @name ang1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ang1App
 */
angular.module('ang1App')
  .controller('MainCtrl', function ($scope, $interval, NgMap) {
  	var _s = $scope;
  	var iconUrl = "./images/user.png";
  	_s.currentPos = [];
  	var options = {
        enableHighAccuracy: true
    };
	navigator.geolocation.getCurrentPosition(function(pos) {
        _s.currentPos.push(pos.coords.latitude);
        _s.currentPos.push(pos.coords.longitude);
        _s.markers = [
	    	{
		        'title' : 'Location #1',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #2',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #3',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    },
		    {
		        'title' : 'Location #4',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #5',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #6',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    },
		    {
		        'title' : 'Location #7',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #8',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #9',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    },
		    {
		        'title' : 'Location #10',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #11',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #12',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    },
		    {
		        'title' : 'Location #13',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #14',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #15',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    },
		    {
		        'title' : 'Location #16',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #17',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #18',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    },
		    {
		        'title' : 'Location #19',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }, 
		    {
		        'title' : 'Location #20',
		        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a viverra magna',
		        'location'  : [_s.currentPos[0] + (Math.random()/100), _s.currentPos[1] + (Math.random()/100)],
		        'icon' : iconUrl
		    }
		];
		console.log(_s.markers);  
    }, 
    function(error) {                    
        window.alert('Unable to get location: ' + error.message);
    }, options);

	    

    /*var markers = [];

    for (var i=0; i<20; i++) {
      markers[i] = new google.maps.Marker({
        title: "Hi marker " + i,
        icon:iconUrl
      });
    }
    _s.GenerateMapMarkers = function() {        
        for (i = 0; i < 20; i++) {
            var lat =_s.currentPos[0] + (Math.random()/100);
            var lng = _s.currentPos[1] + (Math.random()/100);
            var latlng = new google.maps.LatLng(lat, lng);
            markers[i].setPosition(latlng);
            markers[i].setMap(_s.map);
        }      
    };*/  
    /*_s.GenerateMapMarkers();*/
    /*$interval(_s.GenerateMapMarkers, 4000);*/
  });
