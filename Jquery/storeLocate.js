

	//Main Branch Map
	var panorama;

	function initMap3() {
	  var astorPlace = {lat: 6.865632, lng: 79.895244};

	  // Set up the map
	  var map = new google.maps.Map(document.getElementById('map'), {
		center: astorPlace,
		zoom: 18,
		streetViewControl: false
	  });

	  // Set up the markers on the map
	  var marker = new google.maps.Marker({
		  position: astorPlace,
		  map: map,
		  
	  });

	  // We get the map's default panorama and set up some defaults.
	  // Note that we don't yet set it visible.
	  panorama = map.getStreetView();
	  panorama.setPosition(astorPlace);
	  panorama.setPov(/** @type {google.maps.StreetViewPov} */({
		heading: 265,
		pitch: 0
	  }));
	}

	function toggleStreetView1() {
	  var toggle = panorama.getVisible();
	  if (toggle == false) {
		panorama.setVisible(true);
	  } else {
		panorama.setVisible(false);
	  }
	}



	//Kohuwala Branch Map
var panorama2;

function initMap4() {
  var astorPlace = {lat: 6.866507, lng: 79.885100};

  // Set up the map
  var map = new google.maps.Map(document.getElementById('map2'), {
	center: astorPlace,
	zoom: 18,
	streetViewControl: false
  });

  // Set up the markers on the map
  var marker = new google.maps.Marker({
	  position: astorPlace,
	  map: map,
	  
  });

  // get the map's default panorama and set up some defaults.
  // Note that we don't yet set it visible.
  panorama2 = map.getStreetView();
  panorama2.setPosition(astorPlace);
  panorama2.setPov(/** @type {google.maps.StreetViewPov} */({
	heading: 265,
	pitch: 0
  }));
}

function toggleStreetView2() {
  var toggle = panorama2.getVisible();
  if (toggle == false) {
	panorama2.setVisible(true);
  } else {
	panorama2.setVisible(false);
  }
}



//Gampaha Branch Map
	var panorama3;
	
	function initMap5() {
	  var astorPlace = {lat: 7.178284, lng: 79.920615};
	
	  // Set up the map
	  var map = new google.maps.Map(document.getElementById('map3'), {
		center: astorPlace,
		zoom: 18,
		streetViewControl: false
	  });
	
	  // Set up the markers on the map
	  var marker = new google.maps.Marker({
		  position: astorPlace,
		  map: map,
		  
	  });
	
	
	
	  // get the map's default panorama and set up some defaults.
	  // Note that we don't yet set it visible.
	  panorama3 = map.getStreetView();
	  panorama3.setPosition(astorPlace);
	  panorama3.setPov(/** @type {google.maps.StreetViewPov} */({
		heading: 265,
		pitch: 0
	  }));
	}
	
	function toggleStreetView3() {
	  var toggle = panorama3.getVisible();
	  if (toggle == false) {
		panorama3.setVisible(true);
	  } else {
		panorama3.setVisible(false);
	  }
	}
	

	//EXECUTR ALL MAPS
		function initMap() {
		  initMap3();
		  initMap4();
		  initMap5();
		}
	
		