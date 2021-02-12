

	$(document).ready(function(){
		$(".tableContents").hide();
	  $(".plusButton").click(function(){
		$(".tableContents").toggle( { direction: "down" }, 500);
		
		var text = $('.plusButton').text();
		if (text == 'More ▲'){
		$('.plusButton').text('Less ▼');
	

		}else{
		$(".plusButton").text("More ▲");
		
		}


		  });
	});


	$(document).ready(function(){
		$(".tableContents0").hide();
	  $(".plusButton0").click(function(){
		$(".tableContents0").toggle( { direction: "down" }, 500);
		
		var text = $('.plusButton0').text();
		if (text == 'More ▲'){
		$('.plusButton0').text('Less ▼');
	

		}else{
		$(".plusButton0").text("More ▲");
		
		}

		
		  });
	});


	$(document).ready(function(){
		$(".tableContents2").hide();
	  $(".plusButton2").click(function(){
		$(".tableContents2").toggle( { direction: "down" }, 500);
		
		var text = $('.plusButton2').text();
		if (text == 'More ▲'){
		$('.plusButton2').text('Less ▼');
	

		}else{
		$(".plusButton2").text("More ▲");
		
		}
		  });
	});


	$(document).ready(function(){
		$(".tableContents3").hide();
	  $(".plusButton3").click(function(){
		$(".tableContents3").toggle( { direction: "down" }, 500);
		
		var text = $('.plusButton3').text();
		if (text == 'More ▲'){
		$('.plusButton3').text('Less ▼');
	

		}else{
		$(".plusButton3").text("More ▲");
		
		}
		  });
	});


	$(document).ready(function(){
		$(".tableContents4").hide();
	  $(".plusButton4").click(function(){
		$(".tableContents4").toggle( { direction: "down" }, 500);
		
		var text = $('.plusButton4').text();
		if (text == 'More ▲'){
		$('.plusButton4').text('Less ▼');
	

		}else{
		$(".plusButton4").text("More ▲");
		
		}
		  });
	});

	var coll = document.getElementsByClassName("collapsibleTable");
	var i;
	
	for (i = 0; i < coll.length; i++) {
	  coll[i].addEventListener("click", function() {
		this.classList.toggle("activeTable");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
		  content.style.display = "none";
		} else {
		  content.style.display = "block";
		}
	  });
	}


$(document).ready(function(){
	$(".instrNonViewable").hide();
  $(".viewMore").click(function(){
    $(".instrNonViewable").toggle( { direction: "down" }, 500);
	
	var text = $('.viewMore').text();
	if (text == 'View More'){
    $('.viewMore').text('View Less');
	$( "#spin" ).hide();
	$( "#canvas" ).hide();
	$( ".gameNameHeading" ).hide();
	$( ".gamePanel" ).hide();
	$( ".leaderboardHeading" ).hide();
	$( ".leaderboardPanel" ).hide();

    }else{
	$(".viewMore").text("View More");
	$( ".gameNameHeading" ).show();
	$( "#spin" ).show();
	$( ".gamePanel" ).show();
	$( "#canvas" ).show();
	$( ".leaderboardHeading" ).show();
	$( ".leaderboardPanel" ).show();

    }
	  });
});







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

var options = ["Product",
	"Rs.500.00",
	"Rs.1000.00",
	"Rs.5000.00",
	"Try Again",
	"Bad Luck",
	"Try Again",
	"Closer Hot.. Hot.."];
	
	var startAngle = 0;
	var arc = Math.PI / (options.length / 2);
	var spinTimeout = null;
	
	var spinArcStart = 10;
	var spinTime = 0;
	var spinTimeTotal = 0;
	
	var ctx;
	
	document.getElementById("spinM").addEventListener("click", spin);
	
	function byte2Hex(n) {
	  var nybHexString = "0123456789ABCDEF";
	  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
	}
	
	function RGB2Color(r,g,b) {
		return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
	}
	
	function getColor(item, maxitem) {
	  var phase = 0;
	  var center = 128;
	  var width = 127;
	  var frequency = Math.PI*2/maxitem;
	  
	  red   = Math.sin(frequency*item+2+phase) * width + center;
	  green = Math.sin(frequency*item+0+phase) * width + center;
	  blue  = Math.sin(frequency*item+4+phase) * width + center;
	  
	  return RGB2Color(red,green,blue);
	}
	
	function drawRouletteWheel() {
	  var canvas = document.getElementById("canvas");
	  if (canvas.getContext) {
		var outsideRadius = 200;
		var textRadius = 187;
		var insideRadius = 20;
	
		ctx = canvas.getContext("2d");
		ctx.clearRect(0,0,500,500);
	
		ctx.strokeStyle = "black";
		ctx.lineWidth = 3;
	
		ctx.font = 'bold 16px Helvetica, Arial';
	
		for(var i = 0; i < options.length; i++) {
		  var angle = startAngle + i * arc;
		  //ctx.fillStyle = colors[i];
		  ctx.fillStyle = getColor(i, options.length);
	
		  ctx.beginPath();
		  ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
		  ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
		  ctx.stroke();
		  ctx.fill();
	
		  ctx.save();
		  ctx.shadowOffsetX = 0;
		  ctx.shadowOffsetY = 0;
		  ctx.shadowBlur    = 0;
		  ctx.shadowColor   = "rgb(0,0 ,0 )";
		  ctx.fillStyle = "black";
		  ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
						250 + Math.sin(angle + arc / 2) * textRadius);
		  ctx.rotate(angle + arc / 2);
		  var text = options[i];
		  ctx.fillText(text, -ctx.measureText(text).width, 0);
		  ctx.restore();
		} 
	
		//Arrow
		ctx.fillStyle = "black";
		
		ctx.beginPath();
		ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
		ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
		ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
		ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
		ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
		ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
		ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
		ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
		ctx.fill();
	  }
	}
	
	function spin() {
	  spinAngleStart = Math.random() * 10 + 10;
	  spinTime = 0;
	  spinTimeTotal = Math.random() * 3 + 4 * 1000;
	  rotateWheel();
	}
	
	function rotateWheel() {
	  spinTime += 5;
	  if(spinTime >= spinTimeTotal) {
		stopRotateWheel();
		return;
	  }
	  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
	  startAngle += (spinAngle * Math.PI / 180);
	  drawRouletteWheel();
	  spinTimeout = setTimeout('rotateWheel()', 30);
	}
	
	function stopRotateWheel() {
	  clearTimeout(spinTimeout);
	  var degrees = startAngle * 180 / Math.PI + 90;
	  var arcd = arc * 180 / Math.PI;
	  var index = Math.floor((360 - degrees % 360) / arcd);
	  ctx.save();
	  ctx.font = 'bold 24px Helvetica, Arial';
	  var text = options[index]
	  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 485 + 10);
	  ctx.restore();
	 
	}
	
	function easeOut(t, b, c, d) {
	  var ts = (t/=d)*t;
	  var tc = ts*t;
	  return b+c*(tc + -3*ts + 3*t);
	}
	
	drawRouletteWheel();
	
	

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