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


const button = document.querySelector('.rotate-obj');
const rotate_obj = document.querySelector('.rotate-obj');
let rotateDeg = 0;

button.addEventListener('click', () => {
  rotateDeg = rotateDeg + 15;
  rotate_obj.style.transform = 'rotate('+rotateDeg+'deg)';
  console.log("hi");
})

const button2 = document.querySelector('.rotate-obj2');
const rotate_obj2 = document.querySelector('.rotate-obj2');
let rotateDeg2 = 0;

button2.addEventListener('click', () => {
  rotateDeg2 = rotateDeg2 + 15;
  rotate_obj2.style.transform = 'rotate('+rotateDeg2+'deg)';
  console.log("hi");
})


const button3 = document.querySelector('.rotate-obj3');
const rotate_obj3 = document.querySelector('.rotate-obj3');
let rotateDeg3 = 0;

button3.addEventListener('click', () => {
  rotateDeg3 = rotateDeg3 + 15;
  rotate_obj3.style.transform = 'rotate('+rotateDeg3+'deg)';
  console.log("hi");
})
