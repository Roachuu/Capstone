$(function(){
    $("#top-nav").load("topnav.html");
});

$(function(){
  $("#footer").load("footer.html");
});

$(function(){
  $("#modal-search").load("modal.html");
});

$(function(){
  $('#sidenav').load("sidenav.html")
});

$(document).ready(function(){
  $('.parallax').parallax();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));