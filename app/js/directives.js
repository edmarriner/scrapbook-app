'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


var hmTouchevents = angular.module('hmTouchevents', []);
angular.forEach('hmTap:tap hmDoubletap:doubletap hmHold:hold hmTransformstart:transformstart hmTransform:transform hmTransforend:transformend hmDragstart:dragstart hmDrag:drag hmDragend:dragend hmSwipe:swipe hmRelease:release'.split(' '), function(name) {
  var directive = name.split(':');
  var directiveName = directive[0];
  var eventName = directive[1];
  hmTouchevents.directive(directiveName, 
  ['$parse', function($parse) {
    return function(scope, element, attr) {
      var fn = $parse(attr[directiveName]);
      var opts = $parse(attr[directiveName + 'Opts'])(scope, {});
      var hammerized = new Hammer(element[0]);
      var onEventName = "on" + eventName;
      hammerized[onEventName] = function(event) {
        scope.$apply(function() {
          fn(scope, {$event: event});
        });
      };
    };
  }]);
});