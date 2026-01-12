
const slides = document.querySelectorAll('.carousel-stack');
const leftBtn = document.querySelector('.nav-left');
const rightBtn = document.querySelector('.nav-right');

let positions = [
  'pos-left-2',
  'pos-left-1',
  'pos-center',
  'pos-right-1',
  'pos-right-2'
];

 let className=positions.at(2)+ "-radio";
 const activeRadio = document.querySelector('.' + className);
    if (activeRadio) activeRadio.checked = true;


function applyPositions() {
  slides.forEach((slide, index) => {
    slide.className = 'carousel-stack ' + positions[index];
  });

  //changeRadio(); 
}



function changeRadio(toChange){
    const radios = document.querySelectorAll('.carousel-radio');

    for(let i=0;i<radios.length;i++){
        radios[i].checked = false;
    }

    let className =toChange+"-radio";
    const activeRadio = document.querySelector('.' + className);
    if (activeRadio) activeRadio.checked = true;
}

// Left button
leftBtn.addEventListener('click', () => {
  positions.unshift(positions.pop());
  let toChange =positions.at(2);
  applyPositions();
  changeRadio(toChange);
});

// Right button
rightBtn.addEventListener('click', () => {
  positions.push(positions.shift());
  
  let toChange = positions.at(2);
  applyPositions();
  changeRadio(toChange);
});


setInterval(() => {
  positions.push(positions.shift());
  let toChange = positions.at(2);
  applyPositions();
  changeRadio(toChange);
}, 3000);

// // Initial load
// applyPositions();


/**
  * review curosel 
*/

const reviewSlides = document.querySelectorAll('.review-slide');
const reviewRadios = document.querySelectorAll('#reviews-radios input');

let currentIndex = 0;

/* Show slide function */
function showSlide(index) {

    // hide all slides
    for(let i=0;i<reviewSlides.length;i++){
      reviewSlides[i].classList.remove('active');
    }

    // uncheck all radios
    for(let i=0;i<reviewRadios.length;i++){
      reviewRadios[i].checked=false;
    }

    // show selected slide
    reviewSlides[index].classList.add('active');
    reviewRadios[index].checked = true;

    currentIndex = index;
}

  /* Radio click */
  for(let i=0;i<reviewRadios.length;i++){
    reviewRadios[i].addEventListener('click',function(){
      showSlide(i);
    })
  }

  /* Auto slide every 5 seconds */
  setInterval(() => {
      let nextIndex = (currentIndex + 1) % reviewSlides.length;
      showSlide(nextIndex);
  }, 5000);
