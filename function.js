function showPassword(){
    var x = document.getElementById("pass");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}


function validation(){
    var pw = document.getElementById("pass").value;
    var user = document.getElementById("username").value;
    var isValid = true;

    document.getElementById("messageUser").innerHTML = "";
    document.getElementById("messagePass").innerHTML = "";

    if(user == "") {
        document.getElementById("messageUser").innerHTML = "*Username is required.";
        isValid = false;
    }

    if(pw == "") {
        document.getElementById("messagePass").innerHTML = "*Password is required.";
        isValid =  false;
    }else if(pw.length < 8){
        document.getElementById("messagePass").innerHTML = "*password must have at least 8 character";
        isValid = false;
    }else if(pw.length > 15){
        document.getElementById("messagePass").innerHTML = "**password length must not exceed 15 characters";  
        isValid = false;  
    }   

    if(isValid) {
        alert("Username and password are correct!");
        return true;
    } else {
        return false; 
    }

}



