/**
 * Created by Jacek on 2015-12-16.
 */
 document.addEventListener("DOMContentLoaded", function(){

     var listParent = document.querySelector('ul');
     var listEl = listParent.children;
     for (var i = 0; i < listEl.length; i++) {
         listEl[i].addEventListener('mouseover', function(){
            var innerList = this.querySelector('ul');
            if (innerList != null) {
                innerList.style.display = "block";
            }
         });
         listEl[i].addEventListener('mouseout', function(){
            var innerList = this.querySelector('ul');
            if (innerList != null) {
                innerList.style.display = "none"
            }
         });
     }

});
