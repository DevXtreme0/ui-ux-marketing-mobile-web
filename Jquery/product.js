

$(document).ready(function(){
	$(".comments").hide();	
	$(".moreCommentsButton").hide();

  $(".showCommentsButton").click(function(){
    $(".comments").toggle( { direction: "down" }, 1000);
	
	$( ".showCommentsButton" ).click(function() {
  $( ".commented" ).scroll();
});

	var text = $('.showCommentsWord').text();
	if (text == 'View Comments Area'){
    $('.moreCommentsButton').show();
	$(".showCommentsButton").hide();
	

    }else{
	$(".moreCommentsButton").hide();
	$(".showCommentsButton").show();


    }
	$( ".moreCommentsButton" ).click(function() {
		$(".comments").hide();	
	$(".moreCommentsButton").hide();
	$(".showCommentsButton").show();

	});


	  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


    function openNav() {
	  document.getElementById("myNav").style.width = "100%";
	}
	
	function closeNav() {
	  document.getElementById("myNav").style.width = "0%";
	}

	function openNav2() {
	  document.getElementById("myNav2").style.width = "100%";
	}
	
	function closeNav2() {
	  document.getElementById("myNav2").style.width = "0%";
	}


	var slideIndex = 1;
	showSlides(slideIndex);
	
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}
	
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" activeDots", "");
	  }
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " activeDots";
	}



	
	var slideIndex = 1;
	showSlides(slideIndex);
	
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}
	
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" activeDots", "");
	  }
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " activeDots";
	}
	
 var current_star_statusses = [];

    star_elements = $('.fa-star').parent();

    star_elements.find(".fa-star").each(function(i, elem)
    {
       current_star_statusses.push($(elem).hasClass('yellow'));
    });
    
    star_elements.find(".fa-star").mouseenter(changeRatingStars);
    star_elements.find(".fa-star").mouseleave(resetRatingStars);

/**
 * Changes the rating star colors when hovering over it.
 */
function changeRatingStars()
{
    // Current star hovered
    var star = $(this);

  // Removes all colors first from all stars
  $('.fa-star').removeClass('gray').removeClass('yellow');

  // Makes the current hovered star yellow
  star.addClass('yellow');

  // Makes the previous stars yellow and the next stars gray
  star.parent().prevAll().children('.fa-star').addClass('yellow');
  star.parent().nextAll().children('.fa-star').addClass('gray');
}

/**
 * Resets the rating star colors when not hovered anymore.
 */
function resetRatingStars()
{
  star_elements.each(function(i, elem)
                     {
    $(elem).removeClass('yellow').removeClass('gray').addClass(current_star_statusses[i] ? 'yellow' : 'gray');
  });
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


	function supportsLocalStorage () {
		return typeof localStorage !== 'undefined';
	  }
	  
	  function getComments() {
		return JSON.parse(localStorage.getItem('comments')) || [];
	  }
	  
	  function saveComment (comments, commentStr, action) {
		if (!commentStr && comments.indexOf(commentStr) < 0) {
		  action(err);
		}
		
		action(undefined, commentStr);
		
	  }
	  
	  function appendToStream(stream, str, index) {
		var p = document.createElement('p');
		p.setAttribute('data-index', index);
		p.innerHTML = str;
		stream.appendChild(p);
	  }
	  
	  function loadComments(stream) {
		var comments = getComments();
		if (comments) {
		  for (var i = 0; i < comments.length; i++) {
			appendToStream(stream, comments[i], i);
		  }    
		}
	  }
	  
	  if (supportsLocalStorage()) {
		initApp();
	  } else {
		
	  }
	  
	  function initApp() {
	  
		var commentForm = document.getElementById('comment-form'),
			commentList = document.getElementById('comment-stream'),
			commentInput = document.getElementById('comment-input');
			
		loadComments(commentList);  
		
		commentForm.addEventListener('submit', function (event) {
		  event.preventDefault();
		  var commStr = commentInput.value,
			  comments = getComments();
		  
		  saveComment(comments, commStr, function(err, value) {
			
			if (err) {
			  return;
			}
			
			comments.push(value);
			localStorage.setItem('comments', JSON.stringify(comments));  
			appendToStream(commentList, commStr);
			commentInput.value = '';      
		  });
		  
		}, true);
	  }

	  (function() {
		const heart = document.getElementById('favIcon');
		heart.addEventListener('click', function() {
		  heart.classList.toggle('red');
		});
	  })();