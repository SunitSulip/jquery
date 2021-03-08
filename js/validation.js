$(document).ready(function(){
  var a = Math.ceil(Math.random()*9);
	var b = Math.ceil(Math.random()*9);
  var captchDisplya = document.getElementById("captchaDisplay");
  var captcha = document.getElementById("captcha"); 
  captchDisplya.innerHTML=a+ "+" + b+ "=";
  check((a+b));
  
  
});

function check(add){
  $("#captcha").change(function(){
       if($("#captcha").val()==""){
         alert("please enter the captcha");
       }
       if( $("#captcha").val()!=add){
         alert("wrong captcha");
         $("#captcha").val("");
       }
       
   })
}
  
  $("#submit").click(function(){
   
    var count=0;
    //first name validation
    if($("#fname").val()==""){
      $("#fnameError").attr("hidden",false);
      count++;
    }
    else{
      $("#fnameError").attr("hidden",true);
    }
    //last name validation
    if($("#lname").val()==""){
      $("#lnameError").attr("hidden",false);
      count++;
    }
    else{
      $("#lnameError").attr("hidden",true);
    }
    //Dob validation
    if($("input[name='dob']").val()) {
      $("#dobError").attr("hidden",true);
     
    }
    else{
      $("#dobError").attr("hidden",false);
      count++;
    }
    //gender validation
    if($("input[name='gender']:checked").val()) {
      $("#genderError").attr("hidden",true);
     
    }
    else{
      $("#genderError").attr("hidden",false);
      count++;
    }
    //permanent address validation
    if($("#pAddress").val()==""){
      $("#pAddressError").attr("hidden",false);
      count++;
    }
    else{
      $("#pAddressError").attr("hidden",true);
    }
    //city validation
    if($("#city").val()==""){
      $("#cityError").attr("hidden",false);
      count++;
    }
    else{
      $("#cityError").attr("hidden",true);
    }
    //mobile no validation
    if($("#mobile").val()==""){
      $("#mobileError").attr("hidden",false);
      $("#mobileError").html("pls provide a number");
      count++;
    }
    else{
        if(($("#mobile").val()>=999999999) && ($("#mobile").val()<=9999999999)){
          $("#mobileError").attr("hidden",true);         
        }
        else{
          $("#mobileError").attr("hidden",false);
          $("#mobileError").html("pls provide a number with minimum length of 10");
          count++;
        }
    }
    //email validation
    if($("#email").val()==""){
      $("#emailError").attr("hidden",false);
      count++;
    }
    else{
      $("#emailError").attr("hidden",true);
    }
    //password validation of empty field and matching of passwords
    if($("#p1").val()==""){
      if($("#p2").val()==""){
        $("#passwordError").attr("hidden",false);
        $("#passwordError").html("pls provide password and confirm your password");
        count++;
      }
      else{
        $("#passwordError").attr("hidden",false);
        $("#passwordError").html("pls provide password first");
        count++;
      }
    }
    else{
      if($("#p2").val()==""){
        $("#passwordError").attr("hidden",false);
        $("#passwordError").html("pls retype to confirm your password");
        count++;
      }
      else{
        if($("#p1").val()==$("#p2").val()){
          $("#passwordError").attr("hidden",true);
        }
        else{
          $("#passwordError").attr("hidden",false);
        $("#passwordError").html("your passwords are not matching");
        count++;
        }
      }
    }
    if(count==0){
      showmodal();      
      $("#form").attr("action","./result.html");
      $("#form").submit();
      
    } 
    else{
      $("#form").submit(function(event) {event.preventDefault();});
    }  
  })

function showmodal(){
  $(".modal-body > .container > p").html("<h1>"+$("#fname").val()+"</h1>"+" your information is succesfully submitted with the following email id" + "<h3>"+$("#email").val()+"</h3>");
  $("#modal").modal('show');
  setTimeout(function(){alert(" set time out")},5000);
}

//add button - adding of number fields
$("#add").click(function(){
   $("#numbers").append("<input type='number' name='phone' class='phone'>" );
})