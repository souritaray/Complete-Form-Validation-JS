let passCheck=document.querySelector('#re-pass');
let pass=document.querySelector("#pass");
let mailId=document.querySelector("#mail_id");

// Password Validation using RegEx
function checkPassword(data){
let reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0=9!@#$%^&*]).{8,14}$/;
if(data.match(reg)){
    pass.style.color="#1DF308";
    pass.style.borderColor = "#1DF308";   
}
else{
    pass.style.color="#EE1746";
    pass.style.borderColor = "#EE1746";    
}
}

// Password Confirmation
passwordConfirmation();
function passwordConfirmation(){
    passCheck.addEventListener("keyup",function(){
        if(passCheck.value==document.querySelector("#pass").value){
            passCheck.style.color="#1DF308";
            passCheck.style.borderColor = "#1DF308";   
        }
        else if((passCheck.value.length==pass.value.length || passCheck.value.length>pass.value.length) && passCheck.value!=pass.value){
            alert("Password did not match, try again");
            passCheck.value="";    
        }
    
    })
}

