// THIS EVENTS FOR NAV
nav = document.querySelector("header.main_header nav.links"),
nav_links = document.querySelectorAll("header.main_header nav.links a"),
cart_icon = document.querySelector("header.main_header i.cart"),
user_icon = document.querySelectorAll("header.main_header i.user"),
cart_div = document.querySelector(".main_cart"),
close_login = document.querySelector(".logIN .close"),
close_create_account = document.querySelector(".create_Account .close"),
Forgot_your_password = document.querySelector(".interface_forget"),
Forgot_your_password_close = document.querySelector(".Forgot_your_password .close"),
open_forget_interface = document.querySelector("#open_forget_interface"),
already_a_member = document.querySelector(".create_Account .already_a_member"),
bar_icon_div = document.querySelector("header.main_header .icons .barIcon"),
login_interface = document.querySelector(".interface_login"),
create_account_interface = document.querySelector(".interface_createAccount"),
sign_up_interfaceP = document.querySelector(".logIN .sign_up_interface"),
open_eye = document.querySelector(".open_eye"),
password_login = document.querySelector("#password_login"),
men_link = document.querySelector("header.main_header nav.links :nth-child(1)"),
cancel_contents = document.querySelectorAll(" header.main_header .cancel i"),
eye = document.querySelector(".logIN .eye"),
nav_bar_content = document.querySelector("header.main_header .nav_content");
women =document.querySelector("header.main_header .women")
men =document.querySelector("header.main_header .men")
kids =document.querySelector("header.main_header .kids")
let contents=document.querySelector(`header.main_header .nav_content`),
dark_mode=document.querySelector("header.main_header .dark_mode"),
top_header=document.querySelector("header.top_header");
main_header=document.querySelector("header.main_header")
// *********************************EVENTS*****************************//
bar_icon_div.addEventListener("click", (_) => {
  closeAllFrames()
  if(!nav.classList.contains("opened")){
    nav.classList.add("active_nav");
    nav.classList.add("opened")
  }
  else{
    nav.classList.remove("active_nav");
  nav.classList.remove("opened");
  }

});
window.addEventListener("resize",_=>{
  if(window.innerWidth >992)
  nav.classList.remove("transform_nav");

})

let click_link=false
for (const iterator of nav_links) {
  iterator.addEventListener("click" , _=>{
    if(login_interface.classList.contains("transform_login")){
      login_interface.classList.add("transform_login_reverse")   
    }
  
  
  if(cart_div.classList.contains("transform_cart")){
    cart_div.classList.add("transform_cart_reverse")   
  }
  closeAllInterface()
    if(iterator.classList.contains("active_link")){
      clear(nav_links,"active_link")
      closeAllFrames()
    }
    else{

      clear(nav_links,"active_link")
      iterator.classList.add("active_link")
      findTheFrame(iterator.id)
    }
    })
  }
// TO FIND THE FRAME OF THE HINKS IN THE NAV BAR 
function findTheFrame(id){
  
  let content=document.querySelector(`header.main_header .nav_content .${id}`)
  clear(contents.children,"move_frame_reverse")
  content.classList.add("move_frame")  
  clear(contents.children,"hight_z")
  content.classList.add("hight_z")  
}

for (const iterator of cancel_contents ) {
  iterator.addEventListener("click" ,_=>{
for (const iterator of contents.children) {
  if(iterator.classList.contains("move_frame")){
    iterator.classList.remove("move_frame") 
    iterator.classList.add("move_frame_reverse")
  }
}
 
    clear(nav_links,"active_link")
    click_link=false

  })
}
let click_user=false

for (const iterator of user_icon) {
  iterator.addEventListener("click" , _=>{
    // TO CLOSE ANY THING THAT OPEN 
    closeAllFrames()
    click_cart=false
    click_link=false
// TO OPEN THE LOGIN INTERFACE 
if(!click_user){
  login_interface.classList.remove("transform_login_reverse")
  login_interface.classList.add("transform_login")
  click_user=true
}else{
  login_interface.classList.remove("transform_login")

  login_interface.classList.add("transform_login_reverse")
  click_user=false
}
  })
}
let click_cart=false
// THIS FOR CART 
cart_icon.addEventListener("click" , _=>{
   // TO CLOSE ANY THING THAT HAS OPEN 
   closeAllFrames()
   click_user=false
      click_link=false
  //  TO OPEN THE CART
  if(!click_cart) {
    click_cart=true
    if(main_header.id=="sec_header"){
      main_header.classList.add("position_abs")
      main_header.classList.remove("position_abs_reverse")
      top_header.classList.remove("transform_top_header_reverse")
      top_header.classList.add("transform_top_header")
    }
    cart_div.classList.remove("transform_cart_reverse")

    cart_div.classList.add("transform_cart")
  }
  else{
    if(main_header.id=="sec_header"){
      top_header.classList.remove("transform_top_header")
      top_header.classList.add("transform_top_header_reverse")
      main_header.classList.add("position_abs_reverse")
     
    }
    cart_div.classList.remove("transform_cart")
    cart_div.classList.add("transform_cart_reverse")
    click_cart=false
  }
  })


    function closeAllFrames(){
      closeAllInterface()
      nav.classList.remove("active_nav");

      for (const iterator of contents.children) {
        if(iterator.classList.contains("move_frame")){
          iterator.classList.add("move_frame_reverse")
          iterator.classList.remove("move_frame")
        }
      }
    clear(nav_links,"active_link")  
   
      if(login_interface.classList.contains("transform_login")){
        login_interface.classList.add("transform_login_reverse")   
      }
    
    
    if(cart_div.classList.contains("transform_cart")){
      cart_div.classList.add("transform_cart_reverse")   
    }
  }
    // TO ADD A CLASS FOR A GROUP OF ITEM 
function addclass(arr , class_name){
  for (const iterator of arr) {
    iterator.classList.add(class_name)
  
  
  }
}

