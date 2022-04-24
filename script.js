const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav = [nav1, nav2, nav3, nav4, nav5];

function addClass(element, className){
    element.classList.add(className);
}

function removeClass(element, className){
    element.classList.remove(className);
}

// function replaceClass(element, classToBeReplace, classToBePlaced){

//         element.classList.replace(classToBeReplace, classToBePlaced);
//         console.info(element, classToBeReplace, classToBePlaced);
// }

function toggleNav(){
    //Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    //Toogle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        //Animate In Overlay
        overlay.classList.add('overlay-slide-right');
        overlay.classList.remove('overlay-slide-left')
        //Animate In - Nav Items
        // nav1.classList.add('slide-in-1');
        // nav2.classList.add('slide-in-2');
        // nav3.classList.add('slide-in-3');
        // nav4.classList.add('slide-in-4');
        // nav5.classList.add('slide-in-5');
        
        //For Loop to Add 'slide-in' & remove 'slide-out' the Animation classed from Nav Items through iteration
        for(let i=0; i<=4; i++){
            addClass(nav[i],`slide-in-${i+1}`);
            removeClass(nav[i], `slide-out-${i+1}`);
            //replaceClass(nav[i], `slide-in-${i+1}`, `slide-out-${i+1}`);
        }
    }
    else{
        //Animate Out Overlay
        overlay.classList.add('overlay-slide-left');
        overlay.classList.remove('overlay-slide-right');
        //Animate Out - Nav Items
        // nav1.classList.add('slide-out-1');
        // nav2.classList.add('slide-out-2');
        // nav3.classList.add('slide-out-3');
        // nav4.classList.add('slide-out-4');
        // nav5.classList.add('slide-out-5');

        //For Loop to Add 'slide-out' & remove 'slide-in' the Animation classed from Nav Items through iteration
        for(let i=0; i<=4; i++){
            addClass(nav[i], `slide-out-${i+1}`);
            removeClass(nav[i], `slide-in-${i+1}`);
        }

    }
}

//Event Listensers

menuBars.addEventListener('click', toggleNav);

nav.forEach((nav) =>{
    nav.addEventListener('click', toggleNav);
})

