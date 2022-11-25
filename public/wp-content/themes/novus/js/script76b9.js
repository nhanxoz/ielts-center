window.addEventListener('DOMContentLoaded', e => {
    const openMobileNav = document.getElementById( 'm-open' );
    const header        = document.querySelector( '.site-header' );

	openMobileNav.addEventListener( 'click', () => {
		header.classList.toggle( 'active' );
	} )

    const navParent = document.querySelectorAll( '.menu-item-has-children' );
	const navChild = document.querySelectorAll( '.sub-menu' );
	navParent.forEach( e => {
		e.addEventListener( 'touchstart', function(e) {
			navChild.forEach( n => {
				n.classList.remove( 'active' )
			} )
			this.childNodes[2].classList.toggle( 'active' )
		} )
	} )
	
	const searchControl = document.getElementById( 'search-control' );
	const searchClose   = document.getElementById( 'btn-search-close' );
	const searchWraper  = document.querySelector( '.header-search__wrapper' );

	searchControl.addEventListener( 'click', () => {
		searchWraper.classList.add( 'search--open' );
	} )

	searchClose.addEventListener( 'click', () => {
		searchWraper.classList.remove( 'search--open' );
	} )

	document.addEventListener( 'keydown', e => {
		if (e.keyCode == 27) {
			searchWraper.classList.remove( 'search--open' );
		}
	})
	
	const responsiveImages = document.querySelectorAll('img.responsive')
	if ( responsiveImages ) {
		responsiveImages.forEach(img => img.style.height = img.getBoundingClientRect().width * 0.6667 + 'px')
	}

	const wow = new WOW( {
		boxClass       : 'wow',
		animateClass   : 'animated',
		offset         : 0,
		mobile         : true,
		live           : true,
		scrollContainer: null
	} );
	wow.init();
} );
