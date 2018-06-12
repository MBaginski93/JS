/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){
    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture');
    var sliders = document.querySelectorAll('li');
    var count = 0;
    sliders[count].classList.toggle("visible")
    next.addEventListener('click', function(){

        sliders[count].classList.toggle("visible");
        count++;
        if (count >= sliders.length ) {
            count = 0;
        }
        sliders[count].classList.toggle("visible");

    });
    prev.addEventListener('click', function(){

        sliders[count].classList.toggle("visible");
        count--;
        if (count < 0) {
            count = sliders.length-1;
        }
        sliders[count].classList.toggle("visible");

    });
});
