function som(){

var username=document.getElementById("text3").value;
var password=document.getElementById("text6").value;
if(username=="admin",password=="admin")
{
    document.getElementById("text4").innerText="admin";
    
    
}
else{
    document.getElementById("text4").innerText="";
    alert("invalidIDn");
}
}

