function validate(){
    regx=new RegExp("1602-[0-9]{2}-73[0-9]-[0-9]{3}");
    uname=document.getElementById("username");
    pass=document.getElementById("pass");
    form=document.getElementById("myform");
    value=false;
    if(uname.value==''){
        document.getElementById("uerror").style.visibility="visible";
    }
    else{
        document.getElementById("uerror").style.visibility="hidden";
        value=true;
    }
    if(pass.value==''){
        document.getElementById("perror").style.visibility="visible";
    }
    else{
        document.getElementById("perror").style.visibility="hidden";   
        value=true;
    }
    if(!regx.test(uname.value)){
        document.getElementById("uerror").innerHTML="invalid username";
        document.getElementById("uerror").style.visibility="visible";
    }
    else{
        document.getElementById("uerror").style.visibility="hidden";
        value=true;
    }
    if(pass.value.length<6){
        document.getElementById("perror").innerHTML="Weak Password!"
        document.getElementById("perror").style.visibility="visible";
    }
    else{
        document.getElementById("perror").style.visibility="hidden";   
        value=true;
    }
    return b;
}