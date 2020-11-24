var toggle = document.querySelector('#toggle');
var isLight = false;

function lightMode(){
  document.querySelector('body').style.background = '#FFFAF1';
  document.querySelector('#card').style.background = '#F4F0DB';
  document.querySelector('#btn').style.background = '#FFFAF1';
  isLight = true;
}
function darkMode(){
  document.querySelector('body').style.background = '#15110F';
  document.querySelector('#card').style.background = '#6A2D00';
  document.querySelector('#btn').style.background = '#15110F';
  isLight = false;
}

toggle.addEventListener('click', ()=>{
  if (isLight) {
    darkMode();
  }
  else {
    lightMode();
  }
});
