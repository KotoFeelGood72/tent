


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');

	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['page-category']);
		pageWidget(['page-shop']);
		pageWidget(['page-policy']);
		pageWidget(['page-services']);
		pageWidget(['page-work']);
		pageWidget(['page-contacts']);
		pageWidget(['page-notfound']);
		pageWidget(['page-products']);
		pageWidget(['page-single-products']);
		pageWidget(['page-single-service']);
		pageWidget(['page-single-work']);
		getAllClasses('html', '.elements_list');
	}

});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	maskInit();
	checkSubmenu();
	modal();

	maps('Краснодар', 'Солнечная 25', [34, 48])
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})





function maskInit() {
	let inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
}



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/maps.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}

const heroSlider = new Swiper('.hero_slider', {
	spaceBetween: 50,
	speed: 700,
	effect: 'fade',
	disableOnInteraction: false,
  fadeEffect: {
    crossFade: true
  },
	navigation: {
		nextEl: '.nextSlide',
		prevEl: '.prevSlide'
	},
	scrollbar: {
		el: '.hero_scrollbar',
		draggable: true,
	},
	pagination: {
		type: 'fraction',
		el: '.hero_pagination'
	},
})

const galleryGlobalSlider = new Swiper('.gallery_slider', {
	grabCursor: true,
	speed: 700,
	navigation: {
		nextEl: '.galleryWork_next',
		prevEl: '.galleryWork_prev'
	},

	scrollbar: {
		el: '.gallery_scrollbar',
		draggable: true,
	},
	pagination: {
		type: 'fraction',
		el: '.gallery_pagination'
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 2.2,
			spaceBetween: 50,
		}
	}
})

const brandSlider = new Swiper('.trust_slider', {
	// spaceBetween: 50,
	loop: true,
	speed: 700,
	navigation: {
		nextEl: '.brand_next',
		prevEl: '.brand_prev'
	},
	breakpoints: {
		320: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 106,
		}
	}
})

const otherSlider = new Swiper('.other_slider', {
	speed: 400,
	grabCursor: true,
	navigation: {
		nextEl: '.other_nav_next',
		prevEl: '.other_nav_prev'
	},
	scrollbar: {
		el: '.other_scrollbar',
		draggable: true,
	},
	pagination: {
		type: 'fraction',
		el: '.other_pagination',
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3.2,
			spaceBetween: 40,
		}
	}
})

function checkSubmenu() {
	const menuList = document.querySelector('.header_nav_list');
	let menuItem = menuList.querySelectorAll('li')

	Array.from(menuItem).map((el) => {
		let checkItems = el.children
		Array.from(checkItems).map((items) =>{
			if(items.classList.contains('sub-menu')) {
				el.classList.add('parent_element_item')
			}
		})
	})
}

AOS.init({
  // Global settings:
  disable: 'mobile', 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99,
  offset: 150, 
  delay: 100, 
  duration: 500, 
  easing: 'ease-in-out', 
  once: true, 
  mirror: false,
  anchorPlacement: 'top-bottom', 

});


function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			
			popup.forEach((el) => {
				isRemove(el)
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}

function invertColor() {
	let label = document.querySelectorAll('.colorVar')

	label.forEach(item => {
		let icon = item.querySelector('.color_icon')
		if(item.style.backgroundColor == "rgb(255, 255, 255)") {
			icon.classList.add('invert')
		}
	});
}


















































