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
  	var sameLoc = [];
    /*var locations2= [
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Bishwash Kumara", 
            "same_location_id": "118e2390-6efb", 
            "avatar": "https://s3-ap-southeast-1.amazonaws.com/com.loktra.avatars/u_bony@loktra.com", 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "agent"
                    ]
                }
            ], 
            "status": "ONLINE", 
            "last_location": [
                12.9567083, 
                77.709295
            ]
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Stephen McCurry", 
            "same_location_id": "-1", 
            "avatar": "https://s3-ap-southeast-1.amazonaws.com/com.loktra.avatars/u_bony@loktra.com", 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "agent"
                    ]
                }
            ], 
            "status": "INACTIVE", 
            "last_location": null
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Tania Saha", 
            "same_location_id": "118e2390-6efb", 
            "avatar": null, 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "agent"
                    ]
                }
            ], 
            "status": "OFFLINE", 
            "last_location": [
                12.9567083, 
                77.709295
            ]
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Ajaykumar Srinivas", 
            "same_location_id": "-1", 
            "avatar": "https://s3-ap-southeast-1.amazonaws.com/com.loktra.avatars/u_bony@loktra.com", 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "manager", 
                        "agent"
                    ]
                }
            ], 
            "status": "INACTIVE", 
            "last_location": null
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Srinivas Manjunathan", 
            "same_location_id": "118e2390-6efb", 
            "avatar": null, 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "manager", 
                        "agent", 
                        "admin"
                    ]
                }, 
                {
                    "group": "Collections", 
                    "place": "Mumbai", 
                    "roles": [
                        "manager"
                    ]
                }
            ], 
            "status": "ONLINE", 
            "last_location": [
                12.9567083, 
                77.709295
            ]
        }
    ];*/
    var locations2= [
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Bishwash Kumara", 
            "same_location_id": "118e2390-6efb", 
            "avatar": "/images/marker.png", 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "agent"
                    ]
                }
            ], 
            "status": "ONLINE", 
            "last_location": [
                12.9833 + (Math.random() / 100), 
                77.5833 + (Math.random() / 100)
            ]
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Stephen McCurry", 
            "same_location_id": "-1", 
            "avatar": "https://s3-ap-southeast-1.amazonaws.com/com.loktra.avatars/u_bony@loktra.com", 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "agent"
                    ]
                }
            ], 
            "status": "INACTIVE", 
            "last_location": null
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Tania Saha", 
            "same_location_id": "118e2390-6efb", 
            "avatar": "/images/marker.png",
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "agent"
                    ]
                }
            ], 
            "status": "OFFLINE", 
            "last_location": [
                12.9833 + (Math.random() / 100), 
                77.5833 + (Math.random() / 100)
            ]
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Ajaykumar Srinivas", 
            "same_location_id": "-1", 
            "avatar": "https://s3-ap-southeast-1.amazonaws.com/com.loktra.avatars/u_bony@loktra.com", 
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "manager", 
                        "agent"
                    ]
                }
            ], 
            "status": "INACTIVE", 
            "last_location": null
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Srinivas Manjunathan", 
            "same_location_id": "118e2390-6efb", 
            "avatar": "/images/marker.png",
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "manager", 
                        "agent", 
                        "admin"
                    ]
                }, 
                {
                    "group": "Collections", 
                    "place": "Mumbai", 
                    "roles": [
                        "manager"
                    ]
                }
            ], 
            "status": "ONLINE", 
            "last_location": [
                12.9833 + (Math.random() / 100), 
                77.5833 + (Math.random() / 100)
            ]
        },
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Srinivas Manjunathan", 
            "same_location_id": "118e2390-6bfb", 
            "avatar": "https://s3-ap-southeast-1.amazonaws.com/com.loktra.avatars/u_bony@loktra.com",  
            "user_roles": [
                {
                    "group": "Sales", 
                    "place": "Bangalore", 
                    "roles": [
                        "manager", 
                        "agent", 
                        "admin"
                    ]
                }, 
                {
                    "group": "Collections", 
                    "place": "Mumbai", 
                    "roles": [
                        "manager"
                    ]
                }
            ], 
            "status": "ONLINE", 
            "last_location": [
                12.9833 + (Math.random() / 100), 
                77.5833 + (Math.random() / 100)
            ]
        }
    ];
    var repeatingIds = [];
    var sameObj = [];
    var push = false;
    sameObj.push([]);
    for(var j=0; j<locations2.length; j++){
    	for(var k = j+1; k< locations2.length; k++){
    		if (locations2[j].same_location_id == locations2[k].same_location_id && locations2[j].same_location_id != -1) {
    			if (!(repeatingIds.includes(locations2[j].same_location_id))) {
    				repeatingIds.push(locations2[j].same_location_id);
    				break;	
    			}
    		}
    	}
    }
    for(j =0; j<repeatingIds.length; j++){
    	push = false;
    	for(k=0; k<locations2.length; k++){
    		if (locations2[k].last_location) {
    			console.log(locations2[k].same_location_id == repeatingIds[j]);
	    		if (locations2[k].same_location_id == repeatingIds[j]) {
	    			sameObj[j].push(locations2[k]);
	    			push = true;
	    			locations2.splice(k,1);
	    			console.log(k);
	    			k--;
	    		}
    		}
    		else{
    			locations2.splice(k,1);
    		}
    	}
    	if (push && sameObj.length<repeatingIds.length) {
    		sameObj.push([]);
    	}
    }
    var sameCoordMeta = [];
    function center() {
	    var minlat = false;
	    var minlng = false;
	    var maxlat = false;
	    var maxlng = false;
	    var centerPoints = [];
	    var data = {};
	    var data_array = sameObj;
	    for (j =0; j<sameObj.length; j++){
	    	for(k=0; k<sameObj[j].length; k++){
	    	    if (minlat === false) { 
	    	    	minlat = sameObj[j][k].last_location[0]; 
	    	    } else { 
	    	    	minlat = (sameObj[j][k].last_location[0] < minlat) ? sameObj[j][k].last_location[0] : minlat; 
	    	    }
	            if (maxlat === false) { 
	            	maxlat = sameObj[j][k].last_location[0]; 
	            } else { 
	            	maxlat = (sameObj[j][k].last_location[0] > maxlat) ? sameObj[j][k].last_location[0] : maxlat; 
	            }
	            if (minlng === false) { 
	            	minlng = sameObj[j][k].last_location[1]; 
	            } else { 
	            	minlng = (sameObj[j][k].last_location[1] < minlng) ? sameObj[j][k].last_location[1] : minlng; 
	            }
	            if (maxlng === false) {
	             maxlng = sameObj[j][k].last_location[1]; 
	         	} else { 
	         		maxlng = (sameObj[j][k].last_location[1] > maxlng) ? sameObj[j][k].last_location[0] : maxlng;
	         	}
	    	}
	    	console.log(sameObj[j]);
		    var lat = maxlat - ((maxlat - minlat) / 2);
		    var lng = maxlng - ((maxlng - minlng) / 2);
		    centerPoints = [lat,lng];
	    	data = {
	    		last_location : centerPoints,
	    		avatar : sameObj[j].avatar,
	    		data : sameObj[j],
	    		clubbedData: true
	    	};
	    	locations2.push(data);
	    	sameCoordMeta.push(data);
	    }
	}
	center();
	console.log(locations2);
	var currentPos = [12.9833, 77.5833];
    var icon = {
      //url: "data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Capa_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2252px%22%20height%3D%2252px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22M256%2C0C167.641%2C0%2C96%2C71.625%2C96%2C160c0%2C24.75%2C5.625%2C48.219%2C15.672%2C69.125C112.234%2C230.313%2C256%2C512%2C256%2C512l142.594-279.375%20%20%20C409.719%2C210.844%2C416%2C186.156%2C416%2C160C416%2C71.625%2C344.375%2C0%2C256%2C0z%20M256%2C256c-53.016%2C0-96-43-96-96s42.984-96%2C96-96%20%20%20c53%2C0%2C96%2C43%2C96%2C96S309%2C256%2C256%2C256z%22%20style%3D%22fill%3A%20rgb%28145%2C%20220%2C%2090%29%3B%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E", // url
      url: "./images/marker.png", // url
      scaledSize: new google.maps.Size(40, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0)
    };
    var name = "xyz";
    var tooltip = '';
    var des = "ksjdhf asdjfjhas "
    var urlss = './images/user';
    function setContent(index){
    	if (locations2[index].clubbedData) {
		    for(j=0;j<locations2[index];j++){
		    	tooltip +='<div id="iw-container"><div class="mainDiv"><div class="img"><img src="'+urlss+j+'.png"/></div><div class="info">'+
		    	'<p class="name">'+name+j+'</p><p class="role">'+des+'|'+j+'</p></div></div></div>';
		    }
    	}
    }
    var contentString = '<div id="iw-container">' + '<div class="iw-title">'+name + '</div>' + '</div>';
    var infowindow = new google.maps.InfoWindow({
		content: tooltip,
		maxWidth: 350
	});
	var mcOptions = {gridSize: 50, maxZoom: 15, cssClass:'customMarkerCluster',
	imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m'
	};
	var clusterStyles = [
	  {
	    textColor: 'white',
	    url: '/images/m1.png',
	    height: 80,
    	width: 80,
    	cssClass:'customMarkerCluster'
	  }
	];
    function initMap() {
    	var map = new google.maps.Map(document.getElementById('map'), {
	        zoom: 15,
	        center: {
	          lat: 12.9833,
	          lng: 77.5833
	        }
	    });
	    var bounds = new google.maps.LatLngBounds();
	    var markers = locations2.map(function(location,i){
	    	return new google.maps.Marker({
    			position:{lat:location.last_location[0],lng:location.last_location[1]},
    			icon: {
    				url:location.avatar,
    				scaledSize: new google.maps.Size(30, 40),
    				title: location.name
    			}
    		});
	    });
	    /*var markers = locations.map(function(location, i) {
	        return new google.maps.Marker({
	        	position: location,
	        	icon: icon
	        });
	    });*/
	    /*function markerClickFunction(map, marker, value){
	    	var infowindow = new google.maps.InfoWindow({
				content: value
			});
			infowindow.open(map, marker);
	    }*/

	    google.maps.event.addListener(map, 'click', function() {
			infowindow.close();
		});
	    google.maps.event.addListener(infowindow, 'domready', function() {
	    	var iwOuter = $('.gm-style-iw');
	    	var iwBackground = iwOuter.prev();
	    	iwBackground.children(':nth-child(2)').css({'display' : 'none'});
	    	iwBackground.children(':nth-child(4)').css({'display' : 'none'});
	    	iwOuter.parent().parent().css({left: '5px'});
			/*iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 0 !important;'});
	    	iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 0 !important; '});*/
	    	iwBackground.children(':nth-child(3)').find('div').children().css({'z-index' : '1','left': '30p !important', 'background-color':'#434343'});
	    	var iwCloseBtn = iwOuter.next();
	    	iwBackground.children(':nth-child(1)').css({display:'none'});
	    	iwCloseBtn.css({display:'none'});
		});
	    markers.map(function(marker, i) {
	    	bounds.extend(marker.getPosition());
	    	marker.addListener('click', function(event) {
	    		setContent(i);
		    	infowindow.open(map, marker);
		    });
		    marker.addListener('mouseover',function(c){
		    	marker.setAnimation(google.maps.Animation.BOUNCE);
		    });
	        marker.addListener('mouseout',function(){
		    	marker.setAnimation(null);
		    	console.log("afsdkkjfhaskljdjfh");
	        });
		});
      // Add a marker clusterer to manage the markers.
	    var markerCluster = new MarkerClusterer(map, markers,{imagePath:'/images/m', maxZoom: 15});
	    ClusterIcon.prototype.createCss = function(pos) {
	    	var style = [];
			var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '10 10';
			style.push('background-position:' + backgroundPosition + ';');
			style.push('border-radius:50%;');
			style.push('height:80px !important;');
			style.push('width:80px !important;');
			style.push('background-color: black;');
			style.push('border:10px solid gray;');
			style.push('text-align:center;');
			style.push('padding-top:calc(4% - 10px);');
			var txtColor = 'white';
			var txtSize = 16;
			style.push('cursor:pointer; top:' + 30 + 'px; left:' + 20 + 'px; color:' + txtColor + '; position:absolute; font-size:' + txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
			return style.join('');
		};
		/*markerCluster.CALCULATOR = function (markers, numStyles) {
		  var index = 0;
		  var title = "";
		  var count = markers.length.toString();

		  var valueToSum=0;

		  for(var m=0;m<markers.length;m++){
		     //This is the custom property called MyValue
		     valueToSum+=Number(markers[m].MyValue);
		  }

		  var dv = val;

		  while (dv !== 0) {
		     dv = parseInt(dv / 10, 10);  //you could define your own rules
		     index++;
		  }

		  index = Math.min(index, numStyles);
		  return {
		     text: valueToSum,
		     index: index,
		     title: "title"
		  };
		};*/
	    google.maps.event.addDomListener(markerCluster,'mouseover',function(){
	    	console.log("afsdkkjfhaskljdjfh");
	    	//console.log(element);
          $('img[src="'+'./images/marker.png'+'"]').stop().animate({opacity:1});
        });
        google.maps.event.addListener(ClusterIcon,'mouseout',function(){
          $('img[src="'+'./images/marker.png'+'"]').stop().animate({opacity:.5});
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
