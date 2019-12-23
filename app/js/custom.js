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

	// scroll to section
	let scrollLink = $(".scroll-down");
	scrollLink.click(function(e) {
		e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $(".scroll-to").offset().top
			},
			1000
		);
	});

	// open menu on mobile screen
	$(".menu__btn").on("click", function() {
		$(this).toggleClass("active");
		$(".menu").toggleClass("open");
		$(".dropdown-menu").slideUp();
	});

	// slider
	$(".slider").slick({
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// scroll to section
	$(".menu__item a, .scroll-to").click(function(e) {
		e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $(this.hash).offset().top - 40
			},
			1000
		);
	});
});
