function b_topMenu(sSelector){
	var tm = this;
	
	tm.menu = $(sSelector);
	tm.topMenuPos = 0;
	tm.MenuPos = 0;
	
	tm.menuFixOnTop = function(){
		tm.menu.find('.b-head__menu')
		.addClass('b-head__menu_ontop')
		.slideDown('800', 'swing' );
		tm.topMenuPos = 1;

		};
	
	tm.topMenuHide = function(mousePosition){
		if(tm.topMenuPos != 0){	
		tm.topMenuPos = 0;
		tm.menu.find('.b-head__menu')
			// .slideUp('slow')
			.removeClass('b-head__menu_ontop');
		}

		};
	
	
	tm.VisibleOnDisplay = function(){
		// var visibility = tm.menu.find('.b-container__head').position();
		// return visibility;
		var mouseYPos = null;
														// tm.menuPos = null;
		mouseYPos = tm.menu.mousemove(function( event ){
			mouseYPos = event.pageY;
													// tm.menuPos = tm.menu.find('.b-menu').offset();
			tm.checkMousePosition(mouseYPos);
			});			
	};
		
	tm.checkMousePosition = function(mouseYPos){
		var mousePosition = mouseYPos;
		
		if (mousePosition > 600){
			tm.menuFixOnTop();
			}
		else if (mousePosition < 300){
			tm.topMenuHide(mousePosition);
			}
	};
			




	
		
	
	// 3. Секция событий ============

	tm.menu.find('.b-container').mouseover(tm.VisibleOnDisplay);
//	tm.menu.find('.b-container__pblock').mouseover(tm.topMenuHide);

	  
	
};


	
	
	
	
