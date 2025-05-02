

/*MENU RESPONSİVO DO SİTE DO SİTE*/
 let menucelular=document.querySelector('#menu-celular');
 let menuprincipal=document.querySelector('.menu-principal');

 menucelular.onclick= () =>{
    menucelular.classList.toggle('bi-x')
    menuprincipal.classList.toggle('active')
 }
/* FİN MENU RESPONSİVO DO SİTE DO SİTE*/ 
/*İLİDE DESTAQUE DO SİTE*/ 
var swiper = new Swiper(".msSlider",{
    spaceBetween:30,
    centeredSlider: true,
    loop:true,
    autoplay:{
        delay:4500,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});