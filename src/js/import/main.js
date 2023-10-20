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
			let sortValue = []
			
			$('.js-custom-radio:checked').each(function() {
				value.push($(this).val());
			});
			value.sort().forEach(function(item, index, array) {
				
				if ((index > 0) && (array[index - 1] == item)) {
						filterIndex = item
						// filterIndex = []				
						// filterIndex.push(item)
						sortValue.push(filterIndex)
						// console.log(filterIndex)
						// getRightAnswer(filterIndex)
				}
				
			});
			getRightAnswer(sortValue[0])
		}
		function pushCheckFalse() {
			$(".js-custom-radio:checked").prop('checked', false);
		}
		function getRightAnswer(i) {
			let key = i
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
			return;
		}
	})
		new Skroll()
		.add(".city-style__picture", {
			animation: "fadeInRight",
			delay: 200,
			duration: 750
		})
		.add(".city-style__list", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.add(".city-style__desc", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.add(".trendy-style__picture", {
			animation: "fadeInRight",
			delay: 200,
			duration: 750
		})
		.add(".trendy-style__desc", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.add(".officecore__picture", {
			animation: "fadeInRight",
			delay: 200,
			duration: 750
		})
		.add(".officecore__desc", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.add(".sport-style__picture", {
			animation: "fadeInRight",
			delay: 200,
			duration: 750
		})
		.add(".sport-style__desc", {
			animation: "fadeInLeft",
			delay: 200,
			duration: 750
		})
		.init();
});