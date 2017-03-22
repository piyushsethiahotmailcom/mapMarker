'use strict';

/**
 * @ngdoc function
 * @name ang1App.controller:MembersCtrl
 * @description
 * # MembersCtrl
 * Controller of the ang1App
 */
angular.module('ang1App')
  .controller('MembersCtrl', function ($scope) {
  	var _s = $scope;
    var $ppc = $('.progress-pie-chart'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
	if (percent > 50) {
		$ppc.addClass('gt-50');
	}
	$('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
	$('.ppc-percents span').html(percent+'%');

	_s.taskMetadata = [{
		value:200,
		label:"sdlkjhaskdjfhakdhsfkasdfkjaf"
	},{
		value:250,
		label:"sasdfasdfasdfasdfdlkjhaskdjfhakdhsfkasdfkjaf"
	},{
		value:2000,
		label:"s dlkjh ask djfhakdhsfkasdfkjaf"
	}];
  });
