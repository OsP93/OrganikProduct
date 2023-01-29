// constants
const screensNumber = 3;

const leftScreen1 = document.querySelector('.header-leftblock__1');
const leftScreen2 = document.querySelector('.header-leftblock__2');
const leftScreen3 = document.querySelector('.header-leftblock__3');

const rightScreen1 = document.querySelector('.header-rightblock__1');
const rightScreen2 = document.querySelector('.header-rightblock__2');
const rightScreen3 = document.querySelector('.header-rightblock__3');



//slider
let selectedDot;

document.getElementById('sliderdots').addEventListener('click', function (event) {
    // check click on slider button
    let targetButtnon = event.target;
    if (!targetButtnon.classList.contains('header-sliderdots__dot')) {
        console.log('no')
        return; // if click not on button
    } else {
        activeDot(targetButtnon);
        console.log(targetButtnon.value);
    };
    if (targetButtnon.value == 1) {
        console.log('you press button 1');
        //left
        leftScreen1.classList.remove('hiden');
        leftScreen1.classList.add('activeleft');
        leftScreen2.classList.remove('activeleft');
        leftScreen2.classList.add('hiden');
        leftScreen3.classList.remove('activeleft');
        leftScreen3.classList.add('hiden');
        //right
        rightScreen1.classList.remove('hiden');
        rightScreen1.classList.add('activeright');
        rightScreen2.classList.remove('activeright');
        rightScreen2.classList.add('hiden');
        rightScreen3.classList.remove('activeright');
        rightScreen3.classList.add('hiden');
    } else if (targetButtnon.value == 2) {
        console.log('you press button 2');
        //left
        leftScreen2.classList.remove('hiden');
        leftScreen2.classList.add('activeleft');
        leftScreen1.classList.remove('activeleft');
        leftScreen1.classList.add('hiden');
        leftScreen3.classList.remove('activeleft');
        leftScreen3.classList.add('hiden');
        //right
        rightScreen2.classList.remove('hiden');
        rightScreen2.classList.add('activeright');
        rightScreen1.classList.remove('activeright');
        rightScreen1.classList.add('hiden');
        rightScreen3.classList.remove('activeright');
        rightScreen3.classList.add('hiden');
    } else {
        console.log('you press button 3');
        //left
        leftScreen3.classList.remove('hiden');
        leftScreen3.classList.add('activeleft');
        leftScreen2.classList.remove('activeleft');
        leftScreen2.classList.add('hiden');
        leftScreen1.classList.remove('activeleft');
        leftScreen1.classList.add('hiden');
        //right
        rightScreen3.classList.remove('hiden');
        rightScreen3.classList.add('activeright');
        rightScreen2.classList.remove('activeright');
        rightScreen2.classList.add('hiden');
        rightScreen1.classList.remove('activeright');
        rightScreen1.classList.add('hiden');
    }
});

function activeDot(dot) {
    if (selectedDot) {
        selectedDot.classList.remove('activedot');
    }
    selectedDot = dot;
    selectedDot.classList.add('activedot');
}

