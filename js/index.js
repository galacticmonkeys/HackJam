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
(function() {
  var targetString = 'emu';
  var currentString = '';
  document.addEventListener("keydown", function(e){
    if(e.keyCode === 69 ) {
      currentString += 'e';
    }
    if(e.keyCode === 77) {
      currentString += 'm';
    }
    if(e.keyCode === 85) {
      currentString += 'u';
    }
    
    if(currentString === targetString){
      displayEmus();
    }
  });

  function displayEmus() {
    console.log('YOU EMUED THIS SHIT');
    var iframe = document.getElementById("emus");
    iframe.style.display = 'block';
  }
})();