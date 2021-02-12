//
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


   //HAMBURGER MENU PANEL FOR PAGES
    function openNav() {
	  document.getElementById("myNav").style.width = "100%";
	}
	
	function closeNav() {
	  document.getElementById("myNav").style.width = "0%";
	}

	//CATEGORIES PANEL
	function openNav2() {
	  document.getElementById("myNav2").style.width = "100%";
	}
	
	function closeNav2() {
	  document.getElementById("myNav2").style.width = "0%";
	}

	//GO TO TOP BUTTON	
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
	