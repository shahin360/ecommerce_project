function Myfunction(){

    var fname = document.getElementById('fname');
    var fnamevalue = document.getElementById('fname').value;
    var mailbox = document.getElementById('mail');
    var mailvalue = document.getElementById('mail').value;
    var passbox = document.getElementById('pass');
    var passvalue =document.getElementById('pass').value;
    

    if(fnamevalue == "" || mailvalue=="" || passvalue ==""){
        if(fnamevalue == ""){
            fname.style.border = "2px solid red";
        }
        else if(mailvalue == ""){
            fname.style.border ="2px solid transparent";
            mailvalue.style.border ="2px solid red";

        }
        else if(passvalue == ""){
            fname.style.border ="2px solid transparent";
            mailbox.style.border ="2px solid transparent";
            passbox.style.border ="2px solid red";

        }





        return false;
        
    }
    
    else{
        fname.style.border ="2px solid red";
        mailbox.style.border ="2px solid red";
        passbox.style.border ="2px solid red";
        alert("sign up complete");
        return true;
    }
}
