const btn = document.querySelector(".icon-menu");
let  nav = document.querySelector(".navigation");
const close = document.querySelector(".close-menu");

// console.log(btn);
btn.onclick =()=>{
    // alert('working');
    nav.style.display = 'block';
    btn.style.display = 'none';
}
close.onclick =()=>{
    nav.style.display = 'none';
    btn.style.display = 'block';
}
