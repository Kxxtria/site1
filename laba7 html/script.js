let inputText=document.querySelector('.search_text'); 
 let submitForm=document.querySelector('.search_btn');
 let information=document.querySelectorAll('div');
 searchFunction=(text)=>{
 information.forEach((eLement)=>{
if ( eLement.textContent==text){
    eLement.style="animation:animationELement 2s;";
console.log(eLement);}
 });
}
submitForm.addEventListener('click',(e)=>{
e.preventDefault();
searchFunction(inputText.value);
});