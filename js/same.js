window.addEventListener('scroll', function(){
  
   var burbujas = document.querySelectorAll('.aside')[0];
   var altura = window.innerHeight / 1.3;
   var distancia = burbujas.getBoundingClientRect().bottom;

   console.log(distancia);

     burbujas.classList.add('transfor');  

   if (distancia < altura){

       burbujas.classList.add('aparece');

   } 
   else{
       burbujas.classList.remove('aparece');
   }
});
