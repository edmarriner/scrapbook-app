window.onload = function(){

	// cache DOM elements
	var doc		=	document;
	var menu	=	doc.getElementById('menu');
    var page 	=	doc.getElementById('page');

    // Set click event to open the menu
	doc.getElementById('header-menu-button').addEventListener('click', toggleMenu, false);

	// Function to open the menu
	function toggleMenu() {
		if(hasClass(menu,'open')){
			removeClass(menu,'open');
	        page.style.webkitTransform = 'translate3d(0px, 0 , 0)';
	    	menu.className += " closed";
		}else{
			removeClass(menu,'closed');
	        page.style.webkitTransform = 'translate3d(200px, 0 , 0)';
	    	menu.className += " open";
		}
    }

    // hasClass helper method
    function hasClass(ele,cls) {
    	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	}

	// remove class helper
	function removeClass(ele,cls) {
        if (hasClass(ele,cls)) {
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            ele.className=ele.className.replace(reg,' ');
        }
    }
}