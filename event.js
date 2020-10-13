event.js
let k2=document.querySelector('ul');
let k=document.querySelector('button');
k.addEventListener('click',()=>{
 // k2.innerHTML+=`<li>New Todo</li>`;
 const n=document.createElement('li');
 n.textContent='Some new todo';
 k2.append(n);
 //console.log('you clicked me');
})
let k1=document.querySelectorAll('li');
k1.forEach(function(h){
 h.addEventListener('click',e =>{
 //console.log(e.target);
 e.target.remove();
 })