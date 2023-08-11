let userEmail = document.getElementById('email').value;
let getStartedBtn = document.getElementById('getStarted');

function pricessUserInfo(){
    if(userEmail == ""){
        window.alert("Please enter your email address")
    }else{
        window.alert(`Thanks ${userEmail} Our team will get to you shortly`);
       
    }
}

