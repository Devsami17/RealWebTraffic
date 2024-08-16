document.getElementById('hamburger').addEventListener('click',function(){
   var a = document.querySelector('.responsive-header');
   if(a.style.display == "flex"){
    a.style.display="none"
   }else{
    a.style.display='flex'
   }
});
document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the form from submitting and reloading the page

   const image = document.getElementById('preview-image');

   // Increase the width smoothly
   image.style.width = '100%';

});
