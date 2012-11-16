window.onload = function(){

	// cache DOM elements
	var doc			=	document;
	var menu		=	doc.getElementById('menu');
    var page		=	doc.getElementById('page');
    var pageBlock	=	doc.getElementById('page-block');
    var docWidth;

    // Set hammer.js tap event to open the menu
    var menuButtonEvents = new Hammer(doc.getElementById('header-menu-button'));
	menuButtonEvents.ontap = openMenu;

    // Set tap event to open the menu
    var pageBlockEvents = new Hammer(pageBlock);
	pageBlockEvents.ontap = closeMenu;

	// Set swipe event to close the menu
    var menuEvents = new Hammer(menu);
	menuEvents.onswipe = closeMenu;

    // Close the menu
    function closeMenu() {
    	removeClass(menu,'open');
		pageBlock.style.display = 'none';
        page.style.webkitTransform = 'translate3d(0px, 0 , 0)';
    	menu.className += " closed";
    }

     // Open the menu
    function openMenu() {
    	removeClass(menu,'closed');
		pageBlock.style.display = 'block';
        page.style.webkitTransform = 'translate3d(200px, 0 , 0)';
    	menu.className += " open";
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