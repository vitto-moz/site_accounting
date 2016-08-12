function b_advantages(sSelector){
	var adv = this;
	
	adv.init(sSelector);
	adv.jqAdvantageInfo = adv.elem;

	// 1. Секция данных =============
	
	// 2. Секция логики =============
	adv.showPreview = function(event){
	// 1. Data
			event.stopPropagation();
			// event.target.dispatchEvent();
			sp = this;
			sp.header = $(event.target);
			adv.jqAdvantageInfo.fadeOut("500");
		
			setTimeout(function(){
					sp.header.addClass('b-info__header_small_highlighted');		//add a highlig to certain header
				var
					jqAdvantages  = adv.jqAdvantageInfo.find('.b-advantages__advantage'); // save advantages bloks to a var
			}, 300);
			
			setTimeout(function(){
				var
					jqAdvantages  = adv.jqAdvantageInfo.find('.b-advantages__advantage'); // save advantages bloks to a var
					jqAdvantages.each(function(){											// go through advantages bloks
						var
							jqAdvantage = $(this); 												//certain advantage blok
							if 	(!jqAdvantage													//check higlighted
											.find('.b-info__header_small')
											.hasClass('b-info__header_small_highlighted')	
								){ 
								jqAdvantage.fadeOut('500');										//fadeOut highlighted
							}
						}	
					);
			}, 300);
			// appear advantage's block with an article
			setTimeout(function(){
				adv.jqAdvantageInfo													// appear article of advantage's block 	
								.find('.b-article-text')
								.fadeIn('500');												
				adv.jqAdvantageInfo													// appear extended blok of advantage 				
								.addClass('b-content__advantages_oneExtended')		
								.fadeIn('500');											
				adv.jqAdvantageInfo													// appear close button 				
								.find('.b-advantages__close')	
								.fadeIn('500');
				
								
				
			}, 700);
		

	};
	
	adv.closePreview = function(event){
			event.stopPropagation();
			// event.preventDefault();
			// event.stopImmediatePropagation();
			// event.target.dispatchEvent() ;
		if (adv.jqAdvantageInfo.hasClass('b-content__advantages_oneExtended')
				&&
			event.target === this
			){
			adv.jqAdvantageInfo.fadeOut("500");
			
			adv.jqAdvantageInfo
											.find('.b-article-text')						// hide article text
											.fadeOut('500');
			adv.jqAdvantageInfo
											.find('.b-info__header_small')
											.removeClass('b-info__header_small_highlighted');	//remove highlight from header
			adv.jqAdvantageInfo.find('.b-advantages__close').fadeOut("500");					// hide close button
			setTimeout(function(){
							adv.jqAdvantageInfo
											.removeClass('b-content__advantages_oneExtended'); // extended_advantage block disappear
							adv.jqAdvantageInfo
											.find('.b-advantages__advantage')				// show advantage in normal
											.fadeIn('500');
						
						}, 300);
			setTimeout(function(){
						adv.jqAdvantageInfo
										// .find('.b-content__advantages')
										.fadeIn("slow");										//  show advantage block
						}, 400);
		};
	};
	adv.moveLink = function (event){
		link = $(event.target);
		// link.animate({ left:"7%", position: 'relative'}, 300, 
		// function( now, fx ) {
		// var data = fx.elem.id + " " + fx.prop + ": " + now;
		// $( "body" ).append( "<div>" + data + "</div>" );
		// ,);
		
		link.show("slide", { direction: "left" }, 1000);
		// setTimeout(function(){
						// link
										// .css({"left":"", 'position': 'relative'});										//  show advantage block
						// }, 300);
	};
	
	// 3. Секция событий ============

	  adv.elem.find('.b-info__header_small').bind('click', adv.showPreview);
	  adv.elem.find('.b-info__header_small').bind('mouseover', adv.moveLink);
	  adv.elem.find('.b-advantages__close').bind('click', adv.closePreview);
	  adv.elem.closest('body').bind('click', adv.closePreview);
	};
	
// };

b_advantages.prototype = new component();


	
	
	
	
