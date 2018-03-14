function getFirstSelector(selector){
  return document.querySelector(selector);}
  
function nestedTarget(parent,target){
  return document.getElementById(parent).querySelector(target);}

function increaseRankBy(n){
  
}

function deepestChild(){
  
}

let var3=document.querySelector('#app');
let var1=nestedTarget('#app','unranked-list');
let var2=getFirstSelector('.unranked-list li');
console.log(var1.textContent);
console.log(var2.textContent);
console.log(var3);
