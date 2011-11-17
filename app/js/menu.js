window.onload = function(){

	// cache DOM elements
	var doc			=	document;
	var menu		=	doc.getElementById('menu');
    var page		=	doc.getElementById('page');
    var pageBlock	=	doc.getElementById('page-block');
    var docWidth;

    // Set hammer.js tap event to open the menu
    $(doc.getElementById('header-menu-button')).tap(openMenu);

    // Set tap to close the menu
    $(pageBlock).tap(closeMenu);

    // Set swipe left on menu to close the menu
    $(menu).swipeleft(closeMenu);

    // move books to the left
    $(page).on("swipeleft", '#book-block', function(){
        alert("left")
    });
    // move books to the right
    $(page).on("swiperight", '#book-block', function(){
        alert("right")
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