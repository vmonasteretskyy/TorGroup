$(document).ready(function() {
	const toggleSwitch = document.getElementById("themeSwitch");

	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
		}
	}

	toggleSwitch.addEventListener("change", switchTheme, false);

	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
			localStorage.setItem("theme", "dark"); //add this
		} else {
			document.documentElement.setAttribute("data-theme", "light");
			localStorage.setItem("theme", "light"); //add this
		}
	}

	const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

	if (currentTheme) {
		document.documentElement.setAttribute("data-theme", currentTheme);

		if (currentTheme === "dark") {
			toggleSwitch.checked = true;
		}
	}

	// fixed menu
	$(window).scroll(function() {
		const currentPosition = $(window).scrollTop();
		if (currentPosition >= 1) {
			$(".header").addClass("shadow");
		} else {
			$(".header").removeClass("shadow");
		}
	});

	// open menu on mobile screen
	$(".menu__btn").on("click", function() {
		$(this).toggleClass("active");
		$(".menu").toggleClass("open");
		$(".dropdown-menu").slideUp();
	});

	$(".first-screen__slider").slick({
		arrows: false,
		slidesToShow: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000
	});

	// slider
	$(".slider").slick({
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "14%",
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerPadding: "10%"
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerPadding: "40px"
				}
			}
		]
	});

	// scroll to section
	$(".menu__item a, .scroll-to").click(function(e) {
		e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $(this.hash).offset().top - 100
			},
			1000
		);
	});

	// added more images on section manufacturers
	$("#showAllManufacturers").click(function() {
		$(".manufacturers__content").append(
			'<div class="manufacturers__icon"><img src="images/manufacturers/google.png" alt=""></div><div class="manufacturers__icon"><img src="images/manufacturers/doogee.png" alt=""></div><div class="manufacturers__icon"><img src="images/manufacturers/sigma.png" alt=""></div>'
		);
	});

	// initialization WOW animation on page
	new WOW().init();

	$("#phone").mask("+38(999) 999-99-99");
});
