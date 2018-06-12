/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function(){

    var pics = document.querySelectorAll('img');
    var hide = document.querySelector('#hideButton');
    var show = document.querySelector('#showButton');
    var input = document.querySelector('#tagInput');

    hide.addEventListener('click', function(){
        var tagName = input.value;
        for (var i = 0; i < pics.length; i++) {
            if (tagName == pics[i].dataset.tag) {
                pics[i].classList.add("invisible");
            }
        }
    });

    show.addEventListener('click', function(){
        var tagName = input.value;
        for (var i = 0; i < pics.length; i++) {
            if (tagName == pics[i].dataset.tag) {
                pics[i].classList.remove("invisible");
            }
        }
    });

});
