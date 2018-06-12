/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */

 document.addEventListener("DOMContentLoaded", function(){

     var links = document.querySelectorAll('span');
     for (var i = 0; i < links.length; i++) {
         links[i].addEventListener('mouseover', function(){
             var text = this.dataset.text;
             var tooltip = document.createElement('span');
             tooltip.className = "tooltipText"
             tooltip.innerText = text;
             this.appendChild(tooltip);

             this.addEventListener('mouseout', function(){
                 this.removeChild(tooltip);
             });
         });

     }

 });
