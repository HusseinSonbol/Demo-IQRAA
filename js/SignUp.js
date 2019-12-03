/*global document,alert */

function tst1(){
  alert("This alert box was called with the onload event");
}


function change(){
    
     var regex = /^[A-Za-z0-9 ]+$/
    var isValid = regex.test(document.getElementById("FName").value);
    var isValid2 = regex.test(document.getElementById("LName").value);
    var isValid3 = regex.test(document.getElementById("phone").value);
    var isValid4 = regex.test(document.getElementById("address").value);
    
 var faname = document.getElementById("FName").value;
    var faname2 = document.getElementById("s1");
    
    if(faname.length>3&&isValid){
    faname2.hidden=true;
         document.getElementById("FName").style.backgroundColor="white";
    }else{ document.getElementById("FName").style.backgroundColor="rgb(245,80,80)";
         faname2.hidden=false;
        faname2.style.color="red";
          faname2.style.borderBottom="solid 1px red";
          faname2.style.fontSize="12px";
         }
    
     var Lname = document.getElementById("LName").value;
    var Lname2 = document.getElementById("s2");
    
    if(Lname.length>3&&isValid2){
       Lname2.hidden=true;
       document.getElementById("LName").style.backgroundColor="white";
       }else{
       document.getElementById("LName").style.backgroundColor="rgb(245,80,80)";
         Lname2.hidden=false;
        Lname2.style.color="red";
          Lname2.style.borderBottom="solid 1px red";
          Lname2.style.fontSize="12px";
       }
    
     var Phone = document.getElementById("phone").value;
    var Phone2 = document.getElementById("s3");
    
    if(Phone.length==11&&isValid3){
       Phone2.hidden=true;
        document.getElementById("phone").style.backgroundColor="white";
       }else{
        document.getElementById("phone").style.backgroundColor="rgb(245,80,80)";
        Phone2.hidden=false;
        Phone2.style.color="red";
        Phone2.style.borderBottom="solid 1px red";
        Phone2.style.fontSize="12px";
       }
    
    var address= document.getElementById("address").value;
     var address2= document.getElementById("s4");
    
    if(address.length>3&&isValid4){
        address2.hidden=true;
       document.getElementById("address").style.backgroundColor="white";
       }else{
        document.getElementById("address").style.backgroundColor="rgb(245,80,80)";
        address2.hidden=false;
        address2.style.color="red";
        address2.style.borderBottom="solid 1px red";
        address2.style.fontSize="12px";
       }
    
      var drob =document.getElementById("myList").value;
    var drob1=document.getElementById("s5");
    
    if(drob!=""){
        drob1.hidden=true;
       
       }
    
     var mail =document.getElementById("Mail");
    if(mail.value!=""){
    mail.style.backgroundColor="white";
    }
    
     var date0=document.getElementById("date");
    if(date0.value!=""){
    date0.style.backgroundColor="white";
    }
    
}            
        

function suubmit(){
  
    
    var regex = /^[A-Za-z0-9 ]+$/
    var isValid = regex.test(document.getElementById("FName").value);
     var isValid2 = regex.test(document.getElementById("LName").value);
    var isValid3 = regex.test(document.getElementById("phone").value);
    var isValid4 = regex.test(document.getElementById("address").value);
    
    var cheak=true;
    
    
    
    var faname = document.getElementById("FName").value;
    var faname2 = document.getElementById("s1");
    if(faname.length<3||!isValid){
        
    faname2.hidden=false;
    faname2.style.color="red";
    faname2.style.borderBottom="solid 1px red";
    faname2.style.fontSize="12px";
    document.getElementById("FName").style.backgroundColor="rgb(245,80,80)";
       cheak=false;
    }
    
    var Lname = document.getElementById("LName").value;
    var Lname2 = document.getElementById("s2");
    if(Lname.length<3||!isValid2){
    Lname2.hidden=false;
    Lname2.style.color="red";
    Lname2.style.borderBottom="solid 1px red";
    Lname2.style.fontSize="12px";
         document.getElementById("LName").style.backgroundColor="rgb(245,80,80)";
        cheak=false;
    }
        
    
    
     var Phone = document.getElementById("phone").value;
    var Phone2 = document.getElementById("s3");
    if(Phone.length!=11||!isValid3){
    Phone2.hidden=false;
    Phone2.style.color="red";
    Phone2.style.borderBottom="solid 1px red";
    Phone2.style.fontSize="12px";
         document.getElementById("phone").style.backgroundColor="rgb(245,80,80)";
        cheak=false;
    }
    
     var address= document.getElementById("address").value;
     var address2= document.getElementById("s4");
    if(address.length<3||!isValid4){
     address2.hidden=false;
    address2.style.color="red";
    address2.style.borderBottom="solid 1px red";
    address2.style.fontSize="12px";
         document.getElementById("address").style.backgroundColor="rgb(245,80,80)";
        cheak=false;
   
    }
    
    var drob =document.getElementById("myList");
    var drob1=document.getElementById("s5");
    
    if(drob.value==""){
       drob1.hidden=false;
        drob1.style.color="red";
        drob1.style.borderBottom="solid 1px red";
        drob1.style.fontSize="12px"; 
        cheak=false;
       }
    
    var mail =document.getElementById("Mail");
    if(mail.value==""){
    mail.style.backgroundColor="rgb(245,80,80)";
    }
    
    var date0=document.getElementById("date");
    if(date0.value==""){
    date0.style.backgroundColor="rgb(245,80,80)";
    }
    
    
    
    if(cheak==true){
     if (confirm("Do you like to send the data?")) {
                document.getElementById('result').innerHTML = "DONE!!!"
            }
    } else{
    alert("please insert correct inputs");
            }
    
        
    
}
    /*

    
    if (document.getElementById('male').checked) {
    document.getElementById("p5").innerHTML = "Gender: Male ";
    }
     if (document.getElementById('female').checked) {
    document.getElementById("p5").innerHTML = "Gender: Female ";
    }
   

   var Mylist = document.getElementById("myList"); 
    var option = Mylist.options[Mylist.selectedIndex].text;
    document.getElementById("p8").innerHTML="Relegion : "+option;
   
   
    
    var Date = document.getElementById("date").value;
    if(Date==""){
    alert("Enter a date");
    }else{ document.getElementById("p6").innerHTML = "Date: "+Date;}
    
   


   
}





















 /*
    if (document.getElementById('In').checked) {
    document.getElementById("p7").innerHTML = "Military Status: In Military";
    }
     if (document.getElementById('exm').checked) {
    document.getElementById("p7").innerHTML = "Military Status: Exemption";
    }
   /* 
    var Married = document.getElementById("married").value;
    document.getElementById("p8").innerHTML = "Social Status : "+Married;
    
    var Single = document.getElementById("single").value;
    document.getElementById("p8").innerHTML = "Social Status "+Single;
    */

