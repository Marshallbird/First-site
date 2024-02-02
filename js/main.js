document=addEventListener('DOMContentLoaded', function(){
    const nav =document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')



    
    
    function addShadow(){
        if(window.scrollY >= 0){
            nav.classList.add('shadow-bg')
        }else{
            nav.classList.remove('shadow-bg')
        }

    }
// pętla do navlisty
    allNavItems.forEach(item=> item.addEventListener('click', () => {
        navList.classList.remove('show')
    }  ))

   
    window.addEventListener('scroll', addShadow)
    
    

})

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });