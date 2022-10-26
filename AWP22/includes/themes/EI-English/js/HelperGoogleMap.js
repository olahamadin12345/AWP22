
var HelperGoogleMap = function(extendOptions) {
  var HelperGoogleMap = this; // keep scope
  var map, geocoder;
  var saveMarkers = [];
   if(extendOptions !== undefined){
   
    var options = {
    "container"  :"gMap",
    "zoom"    : 15,
    "center"  : new google.maps.LatLng(extendOptions.lat,extendOptions.lng),
    "mapTypeId"  : google.maps.MapTypeId.ROADMAP
    }    
        }
  
  else{
 
    var options = {
    "container"  :"gMap",
    "zoom"    : 8,
    "center"  : new google.maps.LatLng(25.208809, 55.270087),
    "mapTypeId"  : google.maps.MapTypeId.ROADMAP 
    }  
        } 
      
      
      
  if(extendOptions !== undefined) $.extend(true, options, extendOptions)      // Extend options
 
    
  var googleOptions = {
    zoom: options.zoom,
    center: options.center,
    mapTypeId: options.mapTypeId
  }
  
  function init(){
    geocoder = new google.maps.Geocoder();                          // Start Geocoder for retriving address position
    map = new google.maps.Map(document.getElementById(options.container), googleOptions);  // Add map to website
    
  }
  
  HelperGoogleMap.AddPositionSetMarker = function(theMarker){
    var image = '/eng/includes/themes/EI-English/images/all/marker.png';

    var marker = new google.maps.Marker({  
    // Add markers to the map
          map: map,
      icon: image, 
          position: theMarker.positions,
          title : theMarker.title
        });
        saveMarkers.push(marker)
        var infowindow = new google.maps.InfoWindow({    // Add bubbles linked to the markers
        content: theMarker.title
    });  
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
  }
  HelperGoogleMap.AddPosition = function(theMarker){
    var image = '/eng/includes/themes/EI-English/images/all/marker.png';

    var marker = new google.maps.Marker({  
    // Add markers to the map
          map: map,
      icon: image, 
          position: theMarker.positions,
          title : theMarker.title
        });
        saveMarkers.push(marker)
        var infowindow = new google.maps.InfoWindow({    // Add bubbles linked to the markers
         content: theMarker.title
    });  
       marker.infowindow = infowindow;		
      	saveMarkers.push(marker);
      	google.maps.event.addListener(marker, 'click', function() {			
			 for(var i=0; i<saveMarkers.length; i++){
				 if(saveMarkers[i] === marker)
				 {}
			 else
			 {
				 if(typeof saveMarkers[i] === 'undefined'){ }
				 else{
					 saveMarkers[i].infowindow.close();
				 }
				 }
			 }
		  	infowindow.open(map,marker);
			 }
		);
  }
  HelperGoogleMap.AddSetMarkers = function(addresses){
    HelperGoogleMap.RemoveMarkers();
    $.each(addresses.markers, function(index, theMarker){
      HelperGoogleMap.ConvertAddressSetMarker(theMarker);    // Retreive positions from address for each marker  
      })}
  HelperGoogleMap.AddMarkers = function(addresses){
    HelperGoogleMap.RemoveMarkers();      
      $.each(addresses.markers, function(index, theMarker){
      HelperGoogleMap.ConvertAddress(theMarker);    // Retreive positions from address for each marker  
      })
  }
  HelperGoogleMap.ConvertAddress = function(theMarker){
     
    if (geocoder) {
              theMarker.positions =  {lat:parseFloat(theMarker.lat),lng:parseFloat(theMarker.lng)};
        theMarker.title=theMarker.title;
              HelperGoogleMap.AddPosition(theMarker);
   } 
        
  }
  HelperGoogleMap.ConvertAddressSetMarker = function(theMarker){
     
    if (geocoder) {
              theMarker.positions =  {lat:parseFloat(theMarker.lat),lng:parseFloat(theMarker.lng)};
        theMarker.title=theMarker.title;
              HelperGoogleMap.AddPositionSetMarker(theMarker);
   } 
        
  }
  HelperGoogleMap.RemoveMarkers = function(){
    if (saveMarkers[0]) {
        for (i in saveMarkers) {
          saveMarkers[i].setMap(null);
        }
        saveMarkers.length = 0;
      }
  }
  $(document).ready(function() {  // needed if you put your script in the head
    init();
  })
};


function setmarker(title, lat, lng)
{
  var saveAddr = [];
  var usamap = new HelperGoogleMap();  
                var json = {"title":title, "lat" : lat, lng: lng};
        saveAddr.push(json);
        var addresses = { "markers" :saveAddr};
    usamap.AddSetMarkers(addresses);  
}


function setmarker2(title,lat, lng)
{
  var saveAddr = [];
   
  var json = {"title":title, "lat" : lat, "lng": lng,"type":"individual"};
        saveAddr.push(json);
        var addresses = { "markers" :saveAddr};
  var usamap = new HelperGoogleMap(json); 
    usamap.AddSetMarkers(addresses);  
}