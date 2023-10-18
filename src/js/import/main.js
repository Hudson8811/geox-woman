jQuery(function () { 

	$('.js-test__slider').each(function(){
		var slider=$(this)
		var reviewsAll = new Swiper(slider[0], {
			// watchOverflow: true,
			// watchSlidesVisibility: true,
			// watchSlidesProgress: true,
			// preventInteractionOnTransition: true,
			allowTouchMove: false,
			// loop: true,
			slidesPerView: 1,
			navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
			},

		});

		$(".js-custom-radio").on( 'change', function() {		
			setTimeout(function(){ 
				reviewsAll.slideNext(800, false);
				let indexActiveSlide = reviewsAll.previousIndex;
				if(indexActiveSlide == 4) {
					getCheckValue();
				}
			}, 800);


		});
		let allAnswer = document.querySelectorAll(".test__answer");
		let  btnTestAnswer = document.querySelectorAll(".test__answer__list__button");
		
		btnTestAnswer.forEach((item)=>{
			item.addEventListener("click", function() {
				startAgain()
			})
		}) 
	
		
		function startAgain() {
			reviewsAll.slideTo(0);
			allAnswer.forEach((item)=>{
				item.style.display = "none";
			});
			pushCheckFalse()
		}
		function getCheckValue() {
			let value =[] 
			$('.js-custom-radio:checked').each(function() {
				value.push($(this).val());
			});
			value.sort().forEach(function(item, index, array) {
				if ((index > 0) && (array[index - 1] == item)) {
						filterIndex = item
						getRightAnswer(filterIndex)
				}
			});
		}
		function pushCheckFalse() {
			$(".js-custom-radio:checked").prop('checked', false);
		}
		function getRightAnswer(i) {
			let key = i;
			console.log(allAnswer)
			console.log(key)
			switch(key) {
				case "1": 
					allAnswer[0].style.display = "flex";
				break;
				case "2": 
					allAnswer[1].style.display = "flex";
				break;
				case "3": 
					allAnswer[2].style.display = "flex";
				break;
			}
	
		}
	})

});