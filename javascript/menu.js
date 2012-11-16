window.onload = function(){

	// cache DOM elements
	var doc			=	document;
	var menu		=	doc.getElementById('menu');
    var page		=	doc.getElementById('page');
    var pageBlock	=	doc.getElementById('page-block');
    var docWidth;

    // Set hammer.js tap event to open the menu
    $(doc.getElementById('header-menu-button')).hammer().bind("tap", openMenu);

    // Set tap to close the menu
    $(pageBlock).hammer().bind("tap", closeMenu);
    
    // Set swipe left on menu to close the menu
    $(menu).hammer().bind("swipe", function(ev){
        if(ev.direction === "left"){
            closeMenu();
        }
    });

    // Close the menu
    function closeMenu() {
    	$(menu).removeClass("open");
		pageBlock.style.display = 'none';
        page.style.webkitTransform = 'translate3d(0px, 0 , 0)';
    	$(menu).addClass("closed");
    }

     // Open the menu
    function openMenu() {
    	$(menu).removeClass("closed");
		pageBlock.style.display = 'block';
        page.style.webkitTransform = 'translate3d(200px, 0 , 0)';
    	$(menu).addClass("open");
    }

    doc.getElementById('splash').style.display = 'none';
}