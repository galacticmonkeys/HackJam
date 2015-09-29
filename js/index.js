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
      console.log(e.keyCode);
      console.log(currentString);
    }
    if(e.keyCode === 77) {
      currentString += 'm';
      console.log(currentString);
    }
    if(e.keyCode === 85) {
      currentString += 'u';
      console.log(currentString);
    }
    
    if(currentString === targetString) displayEmus();
  }, true);

  function displayEmus() {
    document.getElementById('emu').style.display = 'block';
  }
})();