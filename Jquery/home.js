//FAVORITE ICON COLORING
(function() {
	const heart = document.getElementById('favIcon');
	heart.addEventListener('click', function() {
	  heart.classList.toggle('red');
	});
  })();


//SLIDER FOR BANNER
		var slideIndex = 1;
		showSlidesOnBanner(slideIndex);

		function plusSlidesOnBanners(n) {
			showSlidesOnBanner(slideIndex += n);
		}

		function currentSlideOnBanner(n) {
			showSlidesOnBanner(slideIndex = n);
		}

		function showSlidesOnBanner(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none";
		  }
		  for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" activeImg", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].className += " activeImg";
		}


//SLIDER ON PROMOTION CATEGORY		
	var slideIndexOnPromo = 1;
	showSlidesOnPromo(slideIndexOnPromo);

	function plusSlidesOnPromo(n) {
		showSlidesOnPromo(slideIndexOnPromo += n);
	}

	function currentSlideOnPromo(n) {
		showSlidesOnPromo(slideIndexOnPromo = n);
	}

	function showSlidesOnPromo(n) {
	  var i;
	  var slides = document.getElementsByClassName("promotionSlider");
	  var dots = document.getElementsByClassName("dotPromoProducts");
	  if (n > slides.length) {slideIndexOnPromo = 1}
	  if (n < 1) {slideIndexOnPromo = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" activePromo", "");
	  }
	  slides[slideIndexOnPromo-1].style.display = "block";
	  dots[slideIndexOnPromo-1].className += " activePromo";
	}


//SLIDER ON POPULAR CATEGORY	
			var slideIndexOnPopular = 1;
			showSlidesOnPopular(slideIndexOnPopular);

			function plusSlidesOnPopular(n) {
				showSlidesOnPopular(slideIndexOnPopular += n);
			}

			function currentSlideOnPopular(n) {
				showSlidesOnPopular(slideIndexOnPopular = n);
			}

			function showSlidesOnPopular(n) {
			  var i;
			  var slides = document.getElementsByClassName("popularSlider");
			  var dots = document.getElementsByClassName("dotPopularProducts");
			  if (n > slides.length) {slideIndexOnPopular = 1}
			  if (n < 1) {slideIndexOnPopular = slides.length}
			  for (i = 0; i < slides.length; i++) {
				  slides[i].style.display = "none";
			  }
			  for (i = 0; i < dots.length; i++) {
				  dots[i].className = dots[i].className.replace(" activePopular", "");
			  }
			  slides[slideIndexOnPopular-1].style.display = "block";
			  dots[slideIndexOnPopular-1].className += " activePopular";
			}

			
//SLIDER ON NEW ARRIVALS			
	var slideIndexOnArrivals = 1;
	showSlidesOnArrivals(slideIndexOnArrivals);

	function plusSlidesOnArrivals(n) {
		showSlidesOnArrivals(slideIndexOnArrivals += n);
	}

	function currentSlideOnArrivals(n) {
		showSlidesOnArrivals(slideIndexOnArrivals = n);
	}

	function showSlidesOnArrivals(n) {
	  var i;
	  var slides = document.getElementsByClassName("arrivalsSlider");
	  var dots = document.getElementsByClassName("dotArrivalsProducts");
	  if (n > slides.length) {slideIndexOnArrivals = 1}
	  if (n < 1) {slideIndexOnArrivals = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" activeArrivals", "");
	  }
	  slides[slideIndexOnArrivals-1].style.display = "block";
	  dots[slideIndexOnArrivals-1].className += " activeArrivals";
	}

	//Get the button
	var mybutton = document.getElementById("goToTopButton");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	  } else {
		mybutton.style.display = "none";
	  }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0;
	  document.documentElement.scrollTop = 0;
	}
	