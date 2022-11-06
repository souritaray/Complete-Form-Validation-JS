function checkPassword(data){
let reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0=9!@#$%^&*]).{8,14}$/;
if(data.match(reg)){
    document.querySelector("#pass").style.color="#1DF308";
    document.querySelector("#pass").style.borderColor = "#1DF308";   
}
else{
    document.querySelector("#pass").style.color="#EE1746";
    document.querySelector("#pass").style.borderColor = "#EE1746";    
}

}
