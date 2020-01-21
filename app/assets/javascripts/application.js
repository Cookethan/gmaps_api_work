// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require activestorage
//= require_tree .


$(document).ready(function (){
    
    function initialize() {
        let myCoords = new google.maps.LatLng(35.883104, 14.412216);
        
        let mapOptions = {
            zoom: 15,
            center: myCoords,
            scrollwheel: false    
        };
        
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
        var marker = new google.maps.Marker({
            position: myCoords,
            map: map,
            title: 'pin drop',
            animation: google.maps.Animation.DROP
        });
    
        var contentString = '<h2>Strongbox West</h2>' +
        '<p>Where all your dreams come true.</p>';

        var infowindow = new google.maps.InfoWindow({
        content: contentString
        });
        
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});