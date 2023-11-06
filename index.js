
// let menu = document.querySelector('#search-bar');
// // let navbar = document.querySelector('.navbar');
// menu.onclick = () =>{
//     menu.classList.toggle('fa-times')
//    navbar.classList.toggle('active')
// } 


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar1');
if (bar){
  bar.addEventListener('click' , () =>{
    nav.classList.add('active');
  })
}

if (close){
  close.addEventListener('click' , () =>{
    nav.classList.remove('active');
  })
}






window.onscroll = () =>{
    menu.classList.remove('fa-times')
   navbar.classList.remove('active')
}
document.querySelector('#search-icon').onclick = () =>{
document.querySelector('#search-form').classList.toggle('active')

}
document.querySelector('#close').onclick = () =>{
document.querySelector('#search-form').classList.remove('active')

}

// chicken pizza first slide
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
  });




// reiver slide
  
  var swiper = new Swiper(".review-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 80,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
 
function loader(){
  document.querySelector('.loader-contain').classList.add('fade-out');
}

function FadeOut(){
  setInterval(loader,3000);
}
window.onload = FadeOut;


var product_total_amt = document.getElementById("product_total_amt");
        var shipping_charge = document.getElementById("shipping_charge");
        var total_cart_amt = document.getElementById("total_cart_amt");
        const decreaseNumber = (incdec, itemprice) => {
            var itemval = document.getElementById(incdec);
            var itemprice = document.getElementById(itemprice);
            // console.log(itemval.value);
            if (itemval.value <= 0) {
                itemval.value = 0;
                alert("negative value is not allowed");
            }
             else {
                itemval.value = parseInt(itemval.value) - 1;
                itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
                product_total_amt.innerHTML =
                    parseInt(product_total_amt.innerHTML) - 15;

                total_cart_amt.innerHTML =
                    parseInt(product_total_amt.innerHTML) +
                    parseInt(shipping_charge.innerHTML);

                itemval.style.background = "#fff";
                itemval.style.color = "#000";
            }
        };
        const increaseNumber = (incdec, itemprice) => {
            var itemval = document.getElementById(incdec);
            var itemprice = document.getElementById(itemprice);
            // console.log(itemval.value);
            if (itemval.value > 5) {
                itemval.value = 5;
                alert("max 5 allowed");
                itemval.style.background = "red";
                itemval.style.color = "#fff";
            } else {
                itemval.value = parseInt(itemval.value) + 1;
                itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
                product_total_amt.innerHTML =
                    parseInt(product_total_amt.innerHTML) + 15;

                total_cart_amt.innerHTML =
                    parseInt(product_total_amt.innerHTML) +
                    parseInt(shipping_charge.innerHTML);
            }
        };




        let signupbtn = document.getElementById("signupbtn");
        let signinbtn = document.getElementById("signinbtn");
        let nameField = document.getElementById("nameField");
        let title = document.getElementById("title");


       signinbtn.onclick = function(){
            nameField.style.maxHeight = "0";
            title.innerHTML = "sign in";
            signupbtn.classList.add("disable");
            signinbtn.classList.remove("disable");
        }
       signupbtn.onclick = function(){
            nameField.style.maxHeight = "60px";
            title.innerHTML = "sign up";
            signupbtn.classList.remove("disable");
            signinbtn.classList.add("disable");
        }


        // button color
        const btn = document.getElementById('signinbtn');

        let index = 0;
        
        const colors = ['#102a56', 'green', 'blue', 'purple'];
        
        btn.addEventListener('click', function onClick() {
          btn.style.backgroundColor = colors[index];
          btn.style.color = 'white';
        
          index = index >= colors.length - 1 ? 0 : index + 1;
        });
        

      

