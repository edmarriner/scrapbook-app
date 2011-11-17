(function(a){function m(){var a=e();if(a!==f){f=a;c.trigger("orientationchange")}}function t(b,c,d){var e=d.type;d.type=c;a.event.handle.call(b,d);d.type=e}var b={swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in document.documentElement,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in document.documentElement?"touchstart":"mousedown",endevent:"ontouchstart"in document.documentElement?"touchend":"mouseup",moveevent:"ontouchstart"in document.documentElement?"touchmove":"mousemove",tapevent:"ontouchstart"in document.documentElement?"tap":"click",scrollevent:"ontouchstart"in document.documentElement?"touchmove":"scroll",hold_timer:null,tap_timer:null};a.each("tapstart tapend tap singletap doubletap taphold swipe swipeup swiperight swipedown swipeleft scrollstart scrollend orientationchange".split(" "),function(b,c){a.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)};a.attrFn[c]=true});a.event.special.tapstart={setup:function(){var c=this,d=a(c);d.bind(b.startevent,function(a){if(a.which&&a.which!==1){return false}else{t(c,"tapstart",a)}})}};a.event.special.tapend={setup:function(){var c=this,d=a(c);d.bind(b.endevent,function(a){t(c,"tapend",a)})}};a.event.special.taphold={setup:function(){var c=this,d=a(c),e,f,g={x:0,y:0};d.bind(b.startevent,function(a){if(a.which&&a.which!==1){return false}else{d.data("tapheld",false);e=a.target;g.x=b.touch_capabale?a.targetTouches[0].pageX:a.pageX;g.y=b.touch_capabale?a.targetTouches[0].pageY:a.pageY;b.hold_timer=window.setTimeout(function(){var f=b.touch_capabale?a.targetTouches[0].pageX:a.pageX,h=b.touch_capabale?a.targetTouches[0].pageY:a.pageY;if(a.target==e&&g.x==f&&g.y==h){d.data("tapheld",true);t(c,"taphold",a)}},b.taphold_threshold)}}).bind(b.endevent,function(){window.clearTimeout(b.hold_timer)})}};a.event.special.doubletap={setup:function(){var c=this,d=a(c),e,f;d.bind(b.startevent,function(a){if(a.which&&a.which!==1){return false}else{d.data("doubletapped",false);e=a.target}}).bind(b.endevent,function(a){var g=(new Date).getTime();var h=d.data("lastTouch")||g+1;var i=g-h;window.clearTimeout(f);if(i<b.doubletap_int&&i>0&&a.target==e&&i>100){d.data("doubletapped",true);window.clearTimeout(b.tap_timer);t(c,"doubletap",a)}else{d.data("lastTouch",g);f=window.setTimeout(function(a){window.clearTimeout(f)},b.doubletap_int,[a])}d.data("lastTouch",g)})}};a.event.special.singletap={setup:function(){var c=this,d=a(c),e=null,f=null;d.bind(b.startevent,function(a){if(a.which&&a.which!==1){return false}else{f=(new Date).getTime();e=a.target}}).bind(b.endevent,function(a){if(a.target==e){b.tap_timer=window.setTimeout(function(){if(!d.data("doubletapped")&&!d.data("tapheld")){t(c,"singletap",a)}},b.doubletap_int)}})}};a.event.special.tap={setup:function(){var c=this,d=a(c),e=false,f=null,g,h={x:0,y:0};d.bind(b.startevent,function(a){if(a.which&&a.which!==1){return false}else{e=true;h.x=b.touch_capabale?a.targetTouches[0].pageX:a.pageX;h.y=b.touch_capabale?a.targetTouches[0].pageY:a.pageY;g=(new Date).getTime();f=a.target}}).bind(b.endevent,function(a){var d=b.touch_capabale?a.targetTouches[0].pageX:a.pageX,i=b.touch_capabale?a.targetTouches[0].pageY:a.pageY;if(f==a.target&&e&&(new Date).getTime()-g<b.taphold_threshold&&h.x==d&&h.y==i){t(c,"tap",a)}})}};a.event.special.swipe={setup:function(){function g(a){e.x=b.touch_capable?a.targetTouches[0].pageX:a.pageX;e.y=b.touch_capable?a.targetTouches[0].pageY:a.pageY;f.x=e.x;f.y=e.y}function h(a){a.preventDefault();f.x=b.touch_capable?a.targetTouches[0].pageX:a.pageX;f.y=b.touch_capable?a.targetTouches[0].pageY:a.pageY;window.clearTimeout(b.hold_timer)}function i(a){var c;var g=d.attr("data-xthreshold"),h=d.attr("data-ythreshold"),i=typeof g!=="undefined"&&g!==false&&parseInt(g)?parseInt(g):b.swipe_h_threshold,j=typeof h!=="undefined"&&h!==false&&parseInt(h)?parseInt(h):b.swipe_v_threshold;if(e.y>f.y&&e.y-f.y>j){c="swipeup"}if(e.x<f.x&&f.x-e.x>i){c="swiperight"}if(e.y<f.y&&f.y-e.y>j){c="swipedown"}if(e.x>f.x&&e.x-f.x>i){c="swipeleft"}if(c!=undefined){d.trigger("swipe").trigger(c)}}var c=this,d=a(c),e={x:0,y:0},f={x:0,y:0};if(!c.addEventListener){c.attachEvent(b.startevent,g);c.attachEvent(b.moveevent,h);c.attachEvent(b.endevent,i)}else{c.addEventListener(b.startevent,g,false);c.addEventListener(b.moveevent,h,false);c.addEventListener(b.endevent,i,false)}}};a.event.special.scrollstart={setup:function(){function g(a,b){e=b;t(c,e?"scrollstart":"scrollend",a)}var c=this,d=a(c),e,f;d.bind(b.scrollevent,function(a){if(!e){g(a,true)}clearTimeout(f);f=setTimeout(function(){g(a,false)},50)})}};var c=a(window),d,e,f,g,h,i={0:true,180:true};if(b.orientation_support){var j=window.innerWidth||a(window).width(),k=window.innerHeight||a(window).height(),l=50;g=j>k&&j-k>l;h=i[window.orientation];if(g&&h||!g&&!h){i={"-90":true,90:true}}}a.event.special.orientationchange=d={setup:function(){if(b.orientation_support){return false}f=e();c.bind("throttledresize",m)},teardown:function(){if(b.orientation_support){return false}c.unbind("throttledresize",m)},add:function(a){var b=a.handler;a.handler=function(a){a.orientation=e();return b.apply(this,arguments)}}};a.event.special.orientationchange.orientation=e=function(){var a=true,c=document.documentElement;if(b.orientation_support){a=i[window.orientation]}else{a=c&&c.clientWidth/c.clientHeight<1.1}return a?"portrait":"landscape"};a.event.special.throttledresize={setup:function(){a(this).bind("resize",o)},teardown:function(){a(this).unbind("resize",o)}};var n=250,o=function(){r=(new Date).getTime();s=r-p;if(s>=n){p=r;a(this).trigger("throttledresize")}else{if(q){window.clearTimeout(q)}q=window.setTimeout(m,n-s)}},p=0,q,r,s;a.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe"},function(b,c){a.event.special[b]={setup:function(){a(this).bind(c,a.noop)}}})})(jQuery)