  function scrollAppear() {
  let introText = document.querySelectorAll('.intro-text');
  
  for( let elem of introText){ 
    
    var introPosition = elem.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    if(introPosition< screenPosition){
      elem.classList.add('intro-appear');
    } 
  }
}

window.addEventListener('scroll', scrollAppear);