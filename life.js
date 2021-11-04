const scrollBtn = document.querySelector('.top');

const refreshBtnVisibility = () => {
    if(document.documentElement.scrollTop <= 50) {
        scrollBtn.style.display='none';
    }else{
        scrollBtn.style.display = 'block';
    }
};

refreshBtnVisibility();

scrollBtn.addEventListener('click',  () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
    refreshBtnVisibility();
});

// window.addEventListener('scroll', () => {
//     const scrollable = document.documentElement.scrollHeight = window.innerHeight;
//     const scrolled = window.scrollY;

//     if(Math.ceil(scrolled) === scrollable){
//         alert('You\'ve reached the bottom')
//     }
// });

// const scrollBtn = document.querySelector('.top');

// scrollBtn.addEventListener('click', function (){
//     $('html, body').animate({ scrollTop: 0}, 'slow')
// });

