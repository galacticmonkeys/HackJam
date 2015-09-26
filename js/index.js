//show iframe and hide button
function showIFrame() {  
 var iframe = document.getElementById("typeform");  
 var button = document.getElementById("sign-up-button");
 iframe.style.display="block";  
 button.style.display="none";
 iframe.onload = function() {
   iframe.contentWindow.focus();
 };
}  
