/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


var canvas = document.getElementById("Canvas");
canvas.width = 800;
canvas.height = 800;
var context = canvas.getContext("2d");
const canvas_blue = "#2B98EB";
const canvas_red = "#EA3047";

context.fillStyle = "rgba(0, 0, 0, 0)";
context.fillRect(0, 0, canvas.width, canvas.height);

var numbers = [];
var originalX = [];
var originalY = [];

for (var i = 1; i <= 100; i++) {
  var fontSize = Math.floor(Math.random() * 11) + 10;
  context.font = fontSize + "px Arial";
  var color = Math.floor(Math.random() * 2) == 0 ? canvas_blue : canvas_red;
  context.fillStyle = color;
  var x = Math.floor(Math.random() * (canvas.width - 50)) + 25;
  var y = Math.floor(Math.random() * (canvas.height - 50)) + 25;
  context.fillText(i, x, y);
  numbers.push({
    x: x,
    y: y,
    size: fontSize,
    originalSize: fontSize,
    color: color,
    visible: true
  });
  originalX.push(x)
  originalY.push(y)
}

function drawNumbers() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCircles();
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i].visible) {
      context.fillStyle = numbers[i].color;
      context.font = numbers[i].size + "px Arial";
      context.fillText(i + 1, numbers[i].x, numbers[i].y);
    }
  }
}

function moveNumbers() {

  for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (num.size < 40) {
      num.size += 1;
      num.visible = true;
    } else {
      num.visible = false;
      num.size = Math.floor(Math.random() * 11) + 10;
    }
    var dx = 0, dy = 0;
    if (num.x < canvas.width / 2 && num.y < canvas.height / 2) {
      dx = -1; dy = -1;
    } else if (num.x < canvas.width / 2 && num.y > canvas.height / 2) {
      dx = -1; dy = 1;
    } else if (num.x > canvas.width / 2 && num.y < canvas.height / 2) {
      dx = 1; dy = -1;
    } else if (num.x > canvas.width / 2 && num.y > canvas.height / 2) {
      dx = 1; dy = 1;
    }
    if (num.x < 0 || num.x > canvas.width || num.y < 0 || num.y > canvas.height) {
      num.x = originalX[i];
      num.y = originalY[i];
    }

    num.x += dx;
    num.y += dy;
    
  }
}

function drawCircles(){
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 300;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.lineWidth = 1;
  context.strokeStyle = canvas_blue;
  context.stroke();
  
  for (var i = 1; i <= 12; i++) {
      var innerRadius = radius - (i * radius / 12);
      context.beginPath();
      context.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI, false);
      context.lineWidth = 1;
      context.strokeStyle = canvas_blue;
      context.stroke();
  }
  
  var totalBars = 36;
  var maxLength = 100;
  var minLength = 0;
  for (var i = 0; i < totalBars; i++) {
  
      var barLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
      var angle = (i * 10) * Math.PI / 180;
  
      context.strokeStyle = canvas_blue;
  
      var startX = centerX;
      var startY = centerY;
      var endX = centerX + Math.cos(angle) * (radius + barLength);
      var endY = centerY + Math.sin(angle) * (radius + barLength);
  
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.lineWidth = 1;
      context.stroke();
  
  
      var length = barLength;
      var x = endX;
      var y = endY;
      context.beginPath();
      context.arc(x, y, 2, 0, 2 * Math.PI, false);
      context.fillStyle = canvas_blue;
      context.fill();
  }
  
  for (var i = 0; i < 180; i++) {
      var barLength = radius / 12;
      var angle = (i * 10) * Math.PI / 360;
      context.strokeStyle = canvas_blue;
      var startX = centerX + Math.cos(angle) * radius / 2;
      var startY = centerY + Math.sin(angle) * radius / 2;
      var endX = centerX + Math.cos(angle) * radius / 2 + Math.cos(angle) * barLength;
      var endY = centerY + Math.sin(angle) * radius / 2 + Math.sin(angle) * barLength;
  
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.lineWidth = 1;
      context.stroke();
  }
  var minRadius = radius / 4;
  var maxRadius = radius / 2;
  
  for (var i = 0; i < 360; i++) {
    var angle = Math.random() * 2 * Math.PI;
    var randomRadius = Math.random() * (maxRadius - minRadius) + minRadius;
    var x = centerX + Math.cos(angle) * randomRadius;
    var y = centerY + Math.sin(angle) * randomRadius;
    var radiusSize = Math.floor(Math.random() * 2) + 1;
  
    context.beginPath();
    context.arc(x, y, radiusSize, 0, 2 * Math.PI, false);
    context.fillStyle = canvas_blue;
    context.fill();
  }
  for (var i = 0; i < 180; i++) {
      var triSize = 4;
      var triAngle = Math.random() * 360;
    
      var triX = centerX + Math.cos(triAngle * Math.PI / 180) * (radius*(2/3) + Math.random() * (radius*(3/4) - radius*(2/3))); // Üçgenin x konumu
      var triY = centerY + Math.sin(triAngle * Math.PI / 180) * (radius*(2/3) + Math.random() * (radius*(3/4) - radius*(2/3))); // Üçgenin y konumu
    
      var triHeight = triSize * Math.sqrt(3) / 2;
      var triPoints = [    { x: triX, y: triY - triHeight / 2 },    { x: triX - triSize / 2, y: triY + triHeight / 2 },    { x: triX + triSize / 2, y: triY + triHeight / 2 }  ]; // Üçgenin köşe noktaları
    
      context.beginPath();
      context.moveTo(triPoints[0].x, triPoints[0].y);
      context.lineTo(triPoints[1].x, triPoints[1].y);
      context.lineTo(triPoints[2].x, triPoints[2].y);
      context.closePath();
      context.fillStyle = canvas_blue;
      context.fill();
    }
    
    var totalBars = 270;
    var maxLength = radius * (5/12);
    var minLength = 0;
    
    var barSpacing = 2 * Math.PI / totalBars;
    
    for (var i = 0; i < totalBars; i++) {
    
      var barLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
      var angle = i * barSpacing;
    
      context.strokeStyle = canvas_blue;
    
      var startX = centerX + Math.cos(angle) * radius * (7 / 12);
      var startY = centerY + Math.sin(angle) * radius * (7 / 12);
      var endX = centerX + Math.cos(angle) * (radius*(7/12) + barLength);
      var endY = centerY + Math.sin(angle) * (radius*(7/12) + barLength);
    
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.lineWidth = 1;
      context.stroke();
    
      var x = endX;
      var y = endY;
      var cRadius = 2;
      context.beginPath();
      context.arc(x, y, cRadius, 0, 2 * Math.PI, false);
      context.fillStyle = canvas_blue;
      context.fill();
    
      context.beginPath();
      context.arc(centerX, centerY, radius, angle, angle + barSpacing, false);
      context.lineWidth = 1;
      context.strokeStyle = canvas_blue;
      context.stroke();
    }
}
function loop() {
  moveNumbers();
  drawNumbers();
}

setInterval(loop, 90);
