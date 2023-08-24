eye.addEventListener("click" ,_=>{
    password_login.type="text"
    eye.classList.remove("animate__jackInTheBox")
    open_eye.classList.add("animate__jackInTheBox")
    open_eye.classList.remove("d-none")
    eye.classList.add("d-none")
})
open_eye.addEventListener("click" , _=>{
  password_login.type="password"
  eye.classList.add("animate__jackInTheBox")
  open_eye.classList.remove("animate__jackInTheBox")
  open_eye.classList.add("d-none")
  eye.classList.remove("d-none")
})
sign_up_interfaceP.addEventListener("click" , e=>{
  closeAllInterface()
  click_user=false
  login_interface.classList.add("transform_login_reverse")  
  create_account_interface.classList.add("transform_login")   
  if(login_interface.classList.contains("transform_login")){
    login_interface.classList.add("transform_login_reverse")   
  }

})
already_a_member.addEventListener("click" , _=>{  
  closeAllInterface()
  click_user=false
  login_interface.classList.remove("transform_login_reverse")   
    login_interface.classList.add("transform_login")  
    create_account_interface.classList.remove("transform_login")   
    create_account_interface.classList.add("transform_login_reverse")   
  
})
close_login.addEventListener("click",_=>{
  click_user=false

  login_interface.classList.add("transform_login_reverse")   
    login_interface.classList.remove("transform_login")
})
close_create_account.addEventListener("click",_=>{
  click_user=false
  create_account_interface.classList.add("transform_login_reverse")  
  create_account_interface.classList.remove("transform_login")
})
Forgot_your_password_close.addEventListener("click",_=>{
  closeAllInterface()
  click_user=false
  login_interface.classList.add("transform_login_reverse")   
  Forgot_your_password.classList.add("transform_login_reverse")   
  Forgot_your_password.classList.remove("transform_login")
  
})

open_forget_interface.addEventListener("click",e=>{
  closeAllInterface()
  click_user=false
e.preventDefault()
Forgot_your_password.classList.remove("transform_login_reverse")
Forgot_your_password.classList.add("transform_login")

}
)
addEventListener("click" , event =>{
  if(event.target.id == "interface"){
    event.target.classList.add("transform_login_reverse")
  }
})

function closeAllInterface(){
  if(login_interface.classList.contains("transform_login")||
  Forgot_your_password.classList.contains("transform_login")||
  create_account_interface.classList.contains("transform_login")  
  ){

    Forgot_your_password.classList.remove("transform_login_reverse")
    Forgot_your_password.classList.remove("transform_login")
    login_interface.classList.add("transform_login_reverse")   
    login_interface.classList.remove("transform_login")   
    create_account_interface.classList.remove("transform_login_reverse")  
    create_account_interface.classList.remove("transform_login")  
  }


}