// String Writer
angular.module('ngPage', []);


// Tab
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Email
$(document).ready(function () {
  $('.submit').click(function (event) {
    const email = $('.email').val();
    const subject = $('.subject').val();
    const message = $('.message').val();
    const status = $('.status');
    status.empty();

    if (email.length > 5 && email.includes('@') && email.includes('.')) {

    } else {
      status.append('<div>Email not valid</div>');
      event.preventDefault();
    }

    if (subject.length > 2) {

    } else {
      status.append('<div>Subject not valid</div>');
      event.preventDefault();
    }

    if (message.length > 20) {

    } else {
      status.append('<div>Content not valid</div>');
      event.preventDefault();
    }

  })
})
