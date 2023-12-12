// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;
let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// python progress circular bar 
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 80,
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;

  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#20c997 ${
    pythonStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// java progress circular bar 
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
  javaEndValue = 75,
  rjsspeed = 30;

let progressjava = setInterval(() => {
  javaStartValue++;

  javaValue.textContent = `${javaStartValue}%`;
  javaProgress.style.background = `conic-gradient(#3f396d ${
    javaStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javaStartValue == javaEndValue) {
    clearInterval(progressjava);
  }
}, rjsspeed);

// sql progress circular bar 
let sqlProgress = document.querySelector(".sql"),
  sqlValue = document.querySelector(".sql-progress");

let sqlStartValue = 0,
  sqlEndValue = 80,
  sqlspeed = 30;

let progresssql = setInterval(() => {
  sqlStartValue++;

  sqlValue.textContent = `${sqlStartValue}%`;
  sqlProgress.style.background = `conic-gradient(#e7e132 ${
    sqlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (sqlStartValue == sqlEndValue) {
    clearInterval(progresssql);
  }
}, sqlspeed);

// aws progress circular bar 
let awsProgress = document.querySelector(".aws"),
  awsValue = document.querySelector(".aws-progress");

let awsStartValue = 0,
  awsEndValue = 70,
  awsspeed = 30;

let progressaws = setInterval(() => {
  awsStartValue++;

  awsValue.textContent = `${awsStartValue}%`;
  awsProgress.style.background = `conic-gradient(#da1edc ${
    awsStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (awsStartValue == awsEndValue) {
    clearInterval(progressaws);
  }
}, awsspeed);

// spring progress circular bar 
let springProgress = document.querySelector(".spring"),
  springValue = document.querySelector(".spring-progress");

let springStartValue = 0,
  springEndValue = 65,
  springspeed = 30;

let progressspring = setInterval(() => {
  springStartValue++;

  springValue.textContent = `${springStartValue}%`;
  springProgress.style.background = `conic-gradient(#f21111 ${
    springStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (springStartValue == springEndValue) {
    clearInterval(progressspring);
  }
}, springspeed);

// django progress circular bar 
let djangoProgress = document.querySelector(".django"),
  djangoValue = document.querySelector(".django-progress");

let djangoStartValue = 0,
  djangoEndValue = 70,
  djangospeed = 30;

let progressdjango = setInterval(() => {
  djangoStartValue++;

  djangoValue.textContent = `${djangoStartValue}%`;
  djangoProgress.style.background = `conic-gradient(#f19225 ${
    djangoStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (djangoStartValue == djangoEndValue) {
    clearInterval(progressdjango);
  }
}, djangospeed);

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});