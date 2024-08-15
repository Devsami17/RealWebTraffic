document.getElementById('hamburger').addEventListener('click',function(){
   var a = document.querySelector('.responsive-header');
   if(a.style.display == "flex"){
    a.style.display="none"
   }else{
    a.style.display='flex'
   }
})
function preview() {
   const image = document.getElementById('preview-image');

   // Increase the width smoothly
   image.style.width = '100%';
}