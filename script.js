// 初始化 Swiper 輪播
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: { 
    el: ".swiper-pagination" 
  },
  navigation: { 
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev" 
  },
});
