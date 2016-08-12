function b_slider(sSelector){
	var s = this;
	
	s.init(sSelector);
	s.slider = s.elem;
	s.aPictures = [
		'http://www.kriza.com.ua/wp-content/uploads/2015/03/bg1.jpg'
		,'http://dela.biz/wp-content/uploads/2016/04/5724c3d15cd85.jpg'
		,'http://bm.img.com.ua/berlin/storage/finance/orig/7/99/b4ecd970aa84fd8cd5fae3db9c4c5997.jpg'
		,'http://bm.img.com.ua/berlin/storage/finance/orig/2/c6/2bd40255523d2b84f4034b544c8c0c62.jpg'
		,'http://nemyriv.com/images_user/biznes_119785.jpg'	
		];

	// 1. Секция данных =============
	
	// 2. Секция логики =============
	// moving slides by means of css method of jq
	s.changeSlide = function(iPosition){
		
		
						s.slider.css({'left': '-' + iPosition + '%'});		//
	
	
	};
		
	// arange pictures from array for every slide
	jqSlides  = s.slider.find('.b-slide');
	i = 0;
	jqSlides.each(function(){
		
		var
			jqSlide = $(this);  // попробовать убрать $
			jqSlide.css({'backgroundImage': 'url(' + s.aPictures[i] + ')' });
			// jqSlide.css({'backgroundImage': 'url(http://inpl.com.ua/view/images/3.jpg)'});
			i++;
		}
		);
	
	//prepare position for every slide, and change it during interval
	(function(){
		var
		iPosition = 0;
		sPosition = '';
		i = 0;
					
		setInterval(function(){
				if(i <= 3){
					iPosition = iPosition + 100;
					s.changeSlide(iPosition);
					i++;
				}
				else{
					i = 0;
					iPosition = 0;	
					s.changeSlide(iPosition);
				}
				
		}, 6000);
			
	}
	)();
	
		
		// 3. Events ==================
		// .jqHTMLElement.eventName(.eventHandler);
	
		// };
		
	
	// 3. Секция событий ============


	
};

b_slider.prototype = new component();


	
	
	
	
