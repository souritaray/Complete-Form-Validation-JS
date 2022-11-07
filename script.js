let passCheck=document.querySelector('#re-pass');
let pass=document.querySelector("#pass");
let mailId=document.querySelector("#mail_id");
let name1=document.querySelector("#name");

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

function submitForm(){   
EmailValidation();
UserNameValidation();
}

//Email Validation
function EmailValidation(){
        let email=mailId.value;

//Email validation using RegEx
//---------------------------------------------------------------------------

        let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
        if (email == "" || !regEmail.test(email)) {
            alert("Invalid Email Address.");
            mailId.focus();
            return false;
        }
//Email validation without RegEx
//-----------------------------------------------------------------------------
        // for(let i=0;i<email.length;i++){
        //     if(email.charAt(i)=="@"){
        //         if(i==0 || i==email.length-1){
        //             alert("invalid email address");
        //             mailId.focus();
        //         }
                
        //     }
        // }
        // let k=0;
        // let c=email.split("@");
        // for(let j=0;j<c[1].length;j++){
        //     if(c[1][j]=="."){
        //         k=k+1;
        //         if((c[1][j+1]==".") || (j==c[1].length-1)){
        //             alert("invalid email address");
        //             mailId.focus();
        //         }
        //     }
        // }
        // if(k=0 || k>2){
        //     alert("invalid email address");
        //     mailId.focus();
        // }
    
}

function UserNameValidation(){
    let val=name1.value;
    let regName = /^[a-z ,.'-]+$/i;                                  
 
                if (val == "" || regName.test(val)) {
                    window.alert("Please enter your name properly.");
                    name1.focus();
                    return false;
                }
    
}