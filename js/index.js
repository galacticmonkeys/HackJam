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

//pulls down twitter feed on click
function showTwitterFeed() {
  console.log('here\'s where twitter feed scrolls!');
}

(function() {
  var targetString = 'emu';
  var currentString = '';
  document.addEventListener("keydown", function(e){

    if(e.keyCode === 69  || e.keyCode === 77 || e.keyCode === 85) {
      currentString += String.fromCharCode(e.keyCode).toLowerCase();
    }
    
    if(currentString === targetString){
      currentString = '';
      displayEmus();
    }
  });

  function displayEmus() {
    var iframe = document.createElement('iframe');
    iframe.style += '-webkit-backface-visibility: hidden;-webkit-transform: scale(1);'
    iframe.src = 'http://gfycat.com/ifr/BriskMiniatureArmyant';
    iframe.width = '512';
    iframe.height = '298';
    iframe.id = 'emus';

    document.body.insertBefore(iframe, document.body.firstChild);

    startCountdown();
  }

  function startCountdown() {
    var startTime = Date.now();
    var durration = 14000;
    countdownToHide = setInterval(function() {
      var remainingTime = (durration - (Date.now() - startTime));
      if(remainingTime <= 0) hideEmus();      
    }, 100);
  }

  function hideEmus() {
    var iframe = document.getElementById('emus');
    iframe.parentElement.removeChild(iframe);
    clearInterval(countdownToHide);
  }
})();
