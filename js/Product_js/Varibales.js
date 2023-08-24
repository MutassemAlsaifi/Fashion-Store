//********************************VARIABLES*******************************//
let number_input=document.querySelector("section.t-Shir_shopping .right_content .footer_cart .number input"),
minus=document.querySelector("section.t-Shir_shopping .right_content .footer_cart .number .fa-minus")
,plus=document.querySelector("section.t-Shir_shopping .right_content .footer_cart .number .fa-plus")
,big_img=document.querySelector("section.t-Shir_shopping .big_img img")
,colors=document.querySelectorAll("section.t-Shir_shopping .right_content .colors > div")
,imgs_small=document.querySelectorAll("section.t-Shir_shopping .samll_pic img")
,size=document.querySelector("section.t-Shir_shopping select#dropdown")
,number=document.querySelector("section.t-Shir_shopping .number input")
,name_clothes=document.querySelector("section.t-Shir_shopping .T_shirt h2.name")
,add_button=document.querySelector("section.t-Shir_shopping button.add")
,reviews=document.querySelector("#reviews")
,description=document.querySelector("#description")
,main_content_description=document.querySelector("section.description .container .main_content_description")
,main_content_reviews=document.querySelector("section.description .main_content_reviews")
,section_product=document.querySelector("section.product")
,ranks=document.querySelectorAll("section.description .main_content_reviews .left_child .ranks .rank .opinion")
click_reviews=false;