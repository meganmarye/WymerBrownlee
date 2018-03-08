(function ($, root, undefined) {

	$(function () {

		'use strict';

		// Submenu Show / Click / Hide
		$(document).ready(function (){
            $('.sub-menu').hide();
            $("li.menu-item-has-children").click(function (){
                if ($(this).hasClass('clickedonce')){

					$(this).removeClass('clickedonce');
					$("ul",this).css('display','block');

				} else {

		        	$(this).addClass('clickedonce');
		        	$(this).addClass('submenuopen');
					event.preventDefault();
					console.log("default " + event.type + " prevented" );
					$("ul",this).css('display','block');
				}
            });

            //Hide Submenu on close
            $(".overlay-close").click(function (){
				$('.sub-menu').hide();
				$("li.menu-item-has-children").removeClass('submenuopen');
				$("li.menu-item-has-children").removeClass('clickedonce');
            });

            //Hide Menu & Submenu on ESC
            $( document ).on( 'keydown', function ( e ) {
		        if ( e.keyCode === 27 ) { // ESC

					(function() {
						var triggerBttn = document.getElementById( 'trigger-overlay' ),
							overlay = document.querySelector( 'div.overlay' ),
							closeBttn = overlay.querySelector( 'button.overlay-close' );
							transEndEventNames = {
								'WebkitTransition': 'webkitTransitionEnd',
								'MozTransition': 'transitionend',
								'OTransition': 'oTransitionEnd',
								'msTransition': 'MSTransitionEnd',
								'transition': 'transitionend'
							},
							transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
							support = { transitions : Modernizr.csstransitions };

						function toggleOverlay() {
							if( classie.has( overlay, 'open' ) ) {
								classie.remove( overlay, 'open' );
								classie.add( overlay, 'close' );
								var onEndTransitionFn = function( ev ) {
									if( support.transitions ) {
										if( ev.propertyName !== 'visibility' ) return;
										this.removeEventListener( transEndEventName, onEndTransitionFn );
									}
									classie.remove( overlay, 'close' );
								};
								if( support.transitions ) {
									overlay.addEventListener( transEndEventName, onEndTransitionFn );
								}
								else {
									onEndTransitionFn();
								}
							}
							else if( !classie.has( overlay, 'close' ) ) {
								classie.add( overlay, 'open' );
							}
						}

						toggleOverlay();
						$('.sub-menu').hide();
						$("li.menu-item-has-children").removeClass('submenuopen');
						$("li.menu-item-has-children").removeClass('clickedonce');
					})();

		        }
		    });

        });

	});

})(jQuery, this);
