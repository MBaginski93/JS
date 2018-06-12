/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function(){

    var pics = document.querySelectorAll('img');
    var body = document.querySelector('body');
    for (var i = 0; i < pics.length; i++) {
        pics[i].addEventListener('click', function(){
            var newSrc = this.getAttribute('src')
            var newDiv = document.createElement('div');
                newDiv.setAttribute("class", "fullScreen")
            var newImg = document.createElement('img');
                newImg.setAttribute("src", newSrc);
            var newBtn = document.createElement('button');
                newBtn.setAttribute("class", "close");
                newBtn.innerText = "Close";
            newDiv.appendChild(newImg);
            newDiv.appendChild(newBtn);
            body.appendChild(newDiv)
    newBtn.addEventListener('click', function(){
        body.removeChild(newDiv);
    });
    });
    }

});
