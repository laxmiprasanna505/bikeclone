let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}
window.onload = function(){
  document.getElementById('close').onclick = function(){
      this.parentNode.parentNode.remove();
      return false;
  };
};