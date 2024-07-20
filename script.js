// Countdown timer
var countDownDate = new Date("October 8, 2024 00:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "The wedding has started!";
  }
}, 1000);

// Modal functionality
var infoModal = document.getElementById("info");
var detailsModal = document.getElementById("details");
var venueModal = document.getElementById("venue");
var photosModal = document.getElementById("photos");

var infoLink = document.getElementById("info-link");
var detailsLink = document.getElementById("details-link");
var venueLink = document.getElementById("venue-link");
var photosLink = document.getElementById("photos-link");

var span = document.getElementsByClassName("close");

infoLink.onclick = function() {
  infoModal.style.display = "block";
}

detailsLink.onclick = function() {
  detailsModal.style.display = "block";
}

venueLink.onclick = function() {
  venueModal.style.display = "block";
}

photosLink.onclick = function() {
  photosModal.style.display = "block";
}

for (var i = 0; i < span.length; i++) {
  span[i].onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == infoModal) {
    infoModal.style.display = "none";
  }
  if (event.target == detailsModal) {
    detailsModal.style.display = "none";
  }
  if (event.target == venueModal) {
    venueModal.style.display = "none";
  }
  if (event.target == photosModal) {
    photosModal.style.display = "none";
  }
}

// Language switcher
var languageSwitcher = document.getElementById("language-switcher");
languageSwitcher.addEventListener("change", function() {
  var selectedLanguage = this.value;
  var elements = document.querySelectorAll("[data-en]");

  elements.forEach(function(element) {
    element.textContent = element.getAttribute("data-" + selectedLanguage);
  });
});
