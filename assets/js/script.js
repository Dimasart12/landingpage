var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 1){
    nav.classList.add('nav-color');
  }else{
    nav.classList.remove('nav-color');
  }
})


var acc = document.getElementsByClassName('proses-accordion');
var i;
var len = acc.length;
for(i = 0; i < len; i++){
  acc[i].addEventListener('click', function(){
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}