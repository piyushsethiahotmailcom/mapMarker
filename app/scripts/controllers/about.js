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
            "avatar": "./images/user.png",
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
            "last_location": [
                12.9833 + (Math.random() / 100), 
                77.5833 + (Math.random() / 100)
            ]
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Tania Saha", 
            "same_location_id": "118e2390-6efb", 
            "avatar": "./images/user.png",
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
            "last_location": [
                12.9833 + (Math.random() / 100), 
                77.5833 + (Math.random() / 100)
            ]
        }, 
        {
            "id": "118e2390-6efb-4ca5-960c-736408738378", 
            "name": "Srinivas Manjunathan", 
            "same_location_id": "118e2390-6efb", 
            "avatar": "./images/user.png",
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
    var bounce = true;
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
    		if (locations2[k].same_location_id == repeatingIds[j]) {
    			sameObj[j].push(locations2[k]);
    			locations2.splice(k,1);
    			k--;
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
		    var lat = maxlat - ((maxlat - minlat) / 2);
		    var lng = maxlng - ((maxlng - minlng) / 2);
		    centerPoints = [lat,lng];
	    	data = {
	    		last_location : centerPoints,
	    		avatar : sameObj[j].avatar?sameObj[j].avatar:"./images/groups.png",
	    		data : sameObj[j],
	    		clubbedData: true
	    	};
	    	locations2.push(data);
	    	sameCoordMeta.push(data);
	    }
	}
	center();
	var currentPos = [12.9833, 77.5833];
    var icon = {
      url: "./images/marker.png", // url
      scaledSize: new google.maps.Size(40, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0)
    };
    var name = "xyz";
    var tooltip = '';
    var contentString = '';
    var des = "ksjdhf asdjfjhas "
    var urlss = './images/user';
    var agRoles = [];
    var finalContent = '';
    function setContent(index){
    	if (locations2[index].clubbedData) {
    		$(".gm-style-iw").css({"background-color":"white !important;"});
    		finalContent ='';
    		tooltip = '<div id="iw-container2">';
		    for(j=0;j<locations2[index].data.length;j++){
		    	for(k=0;k<locations2[index].data[j].user_roles.length;k++){
	    			agRoles.push(locations2[index].data[j].user_roles[k].roles.join(' | '));
		    	}
		    	tooltip += '<div class="mainDiv">'+
		    	'<div class="img">'+
		    	'<img src="'+locations2[index].data[j].avatar+'"/>'+
		    	'</div>'+
		    	'<div class="info">'+
		    	'<p class="name">'+locations2[index].data[j].name+'</p>'+
		    	'<p class="role">'+agRoles[j]+'</p>'+
		    	'</div>'+
		    	'</div>';
		    }
		    $("#iw-container").parent().css({'background-color':'white !important'});
		    tooltip += '</div>';
		    finalContent = tooltip;
    	}
    	else{
    		finalContent ='';
    		finalContent = '<div id="iw-container">' + 
    		'<div class="iw-title">'+locations2[index].name + '</div>' + 
    		'<div class="iw-bodyData">'+'last Activity : 10:30AM'+ '</div>' +
    		'</div>';
    	}
    }
    var infowindow = new google.maps.InfoWindow();
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
    				scaledSize: new google.maps.Size(30, 40)
    			},
  				origin: new google.maps.Point(0, 0),
    			anchor: new google.maps.Point(0,0)

    		});
	    });
	    google.maps.event.addListener(map, 'click', function() {
			infowindow.close();
		});
	    google.maps.event.addListener(infowindow, 'domready', function() {
	    	var iwOuter = $('.gm-style-iw');
	    	var iwBackground = iwOuter.prev();
	    	iwBackground.parent().css({'width':'0px !important'});
	    	iwBackground.children(':nth-child(2)').css({'display' : 'none'});
	    	iwBackground.children(':nth-child(4)').css({'display' : 'none'});
	    	iwOuter.parent().parent().css({left: '5px'});
			iwBackground.children(':nth-child(3)').find('div').children().css({'z-index' : '1','left': '30px !important', 'background-color':'#434343'});
	    	var iwCloseBtn = iwOuter.next();
	    	iwBackground.children(':nth-child(1)').css({display:'none'});
	    	iwCloseBtn.css({display:'none'});
		});
		google.maps.event.addListener(infowindow, 'click', function(c) {
			console.log(c.content);
		});
	    markers.map(function(marker, i) {
	    	bounds.extend(marker.getPosition());
	    	marker.addListener('click', function(event) {
	    		setContent(i);
	    		console.log(infowindow);
		    	infowindow.open(map, marker);
				infowindow.setContent(finalContent);
		    });
		    marker.addListener('mouseover',function(c){
		    	if (bounce) {
		    		marker.setAnimation(google.maps.Animation.BOUNCE);
			    	setTimeout(function() {
			    		marker.setAnimation(null);
			    	}, 750);
			    	bounce = false;
		    	}
		    });
	        marker.addListener('mouseout',function(){
		    	/*setTimeout(function() {
		    		marker.setAnimation(null);
		    	}, 750);*/
		    	bounce = true;
		    	marker.setAnimation(null);
	        });
		});
		map.fitBounds(bounds);
		var calc = function (markers, numStyles) {
		  var index = 0;
		  var title = "";
		  var count = markers.length;
		  var dv = count;
		  while (dv !== 0) {
		     dv = parseInt(dv / 10, 10);  //you could define your own rules
		     index++;
		  }

		  index = Math.min(index, numStyles);
		  return {
		     text: count + '\n<div style="font-family:Open Sans;font-weight:400;font-size: 11px;">AGENTS</div>',
		     index: index
		  };
		};
        var markerCluster = new MarkerClusterer(map, markers,{imagePath:'/images/m', maxZoom: 15});
		markerCluster.setCalculator(calc);
	    ClusterIcon.prototype.createCss = function(pos) {
	    	var style = [];
			var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '10 10';
			style.push('background-position:' + backgroundPosition + ';');
			style.push('border-radius:50%;');
			style.push('height:85px !important;');
			style.push('width:85px !important;');
			style.push('background-color: black;');
			style.push('border:10px solid gray;');
			style.push('text-align:center;');
			style.push('padding:10px;');
			style.push('padding-top:calc(4% - 10px);');
			var txtColor = 'white';
			var txtSize = 20;
			style.push('font-family: Arial, sans-serif; line-height: 1; font-weight: 700; cursor:pointer; bottom:'+10+'px; top:' + 30 + 'px; left:' + 20 + 'px; color:' + txtColor + '; position:absolute; font-size:' + txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
			return style.join('');
		};
		console.log(ClusterIcon.prototype);
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
