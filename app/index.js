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
let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function(){
    const currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos) {
        document.getElementById('navbar').style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollpos;
})


const closeButton = document.querySelector('.close-btn');
const closeEmailButton = document.querySelector('.close-email');
const cvContainer = document.querySelector('.overlay');
const cvButton = document.querySelector('.cv');
const emailButton = document.querySelector('.email-icon');
const emailBox = document.querySelector('.email-address');


closeButton.addEventListener("click", function(){
  // console.log("click" );
  cvContainer.style.display = "none"
  
})

cvButton.addEventListener("click", function(){
  // console.log("click" );
  cvContainer.style.display = "flex"
  
  
});

closeEmailButton.addEventListener("click", function(){
  emailBox.classList.add('hide')
  // console.log('hide')
  
})



emailButton.addEventListener("click", function(){
  // console.log('amail icon click');
  emailBox.classList.remove('hide');
})