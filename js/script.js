function initMap() {
  var poltavaPolytechnic = {lat: 49.568527, lng: 34.585431}; 
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: poltavaPolytechnic
  });
  var marker = new google.maps.Marker({
      position: poltavaPolytechnic,
      map: map
  });
}

$(document).ready(function(){
 
});
