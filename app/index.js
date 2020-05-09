import "./index.scss";
console.log("i am ready")

// ********** scrolling menu ************

function scroll(e) {
  var href = $(this).attr("href");
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    300
  );
  location.hash = href;
}
$('a[href*="#"]').click(scroll); 

// ************** hide navigation *************
// let prevScrollpos = window.pageYOffset;
// window.addEventListener('scroll', function(){
//     const currentScrollpos = window.pageYOffset;
//     if(prevScrollpos > currentScrollpos) {
//         document.getElementById('navbar').style.top = "0";
//     }else{
//         document.getElementById("navbar").style.top = "-100px";
//     }
//     prevScrollpos = currentScrollpos;
// })
