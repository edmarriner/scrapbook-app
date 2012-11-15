window.onload = function(){

	// cache DOM elements
	var doc			=	document;
	var menu		=	doc.getElementById('menu');
    var page		=	doc.getElementById('page');
    var pageBlock	=	doc.getElementById('page-block');

    // Set click event to open the menu
	doc.getElementById('header-menu-button').addEventListener('click', toggleMenu, false);
    
    // Set click event to open the menu
	pageBlock.addEventListener('click', pageBlockClick, false);

	// Function to open the menu
	function toggleMenu() {
		if(hasClass(menu,'open')){
			removeClass(menu,'open');
			pageBlock.style.display = 'none';
	        page.style.webkitTransform = 'translate3d(0px, 0 , 0)';
	    	menu.className += " closed";

		}else{
			removeClass(menu,'closed');
	        page.style.webkitTransform = 'translate3d(200px, 0 , 0)';
	    	menu.className += " open";
	    	pageBlock.style.display = 'block';
		}
    }

    function pageBlockClick() {
		removeClass(menu,'open');
		pageBlock.style.display = 'none';
        page.style.webkitTransform = 'translate3d(0px, 0 , 0)';
    	menu.className += " closed";
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