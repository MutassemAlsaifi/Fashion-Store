//******************************VARIABLES DOCUMENTS****************************** */
let header = document.querySelector("header.main_header"), 
main_img = document.querySelector("main img"),
loading = document.querySelector(".loading"),
  
  bar_icon = document.querySelector(
  "header.main_header .icons .barIcon .fa-bars"
),
  pagination = document.querySelector("main .mainText .pagination"),
  swiper_slide = document.querySelectorAll(
    "main  .slide"
  ),
  icons_About_us=document.querySelectorAll("section.About_us .container  .box .icon i"),

next = document.querySelector("main .next"),
  pre = document.querySelector("main .pre"),
  boxes_new = document.querySelectorAll("section.new .box");
//******************************VARIABLES****************************** */
let index = 0,
counter = 0

  slide_arr = [];