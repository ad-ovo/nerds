var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector(".write-us-form");
var username = form.querySelector("#name-field");
var email = form.querySelector("#email-field");
var text = form.querySelector("#text-field");
var storageUsername = localStorage.getItem("username");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storageEmail && storageUsername) {
    username.value = storageUsername;
    email.value = storageEmail;
    text.focus();
  } else if (storageUsername) {
    username.value = storageUsername;
    email.focus();
  } else if (storageEmail) {
    email.value = storageEmail;
    username.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
  if (!username.value) {
    event.preventDefault();
    username.classList.add("error");
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
  } else if (!email.value) {
    event.preventDefault();
    email.classList.add("error");
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error"); 
  } else if (!text.value) {
    event.preventDefault();
    text.classList.add("error");
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);    
    popup.classList.remove("modal-content-show");
  }
});

username.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    if (username.value) {
      email.focus();
    }
  }
});

email.addEventListener("keydown", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    if (email.value) {
      text.focus();
    }
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  } 
});

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.938836, 30.320259)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/contacts-logo.png";
  var myLatLng = new google.maps.LatLng(59.93865,30.3238);

  var beachMarker = new google.maps.Marker({
                                             position: myLatLng,
                                             map: map,
                                             icon: image
                                           });
}
google.maps.event.addDomListener(window, 'load', initialize);
