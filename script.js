var arr = ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', "five.jpg", "six.jpg"];
img = document.querySelector('.img'),
img1 = document.querySelector('.img1'),
img2 = document.querySelector('.img2'),
i = 0;

img.onclick = boom;
img1.onclick = boom1;
img2.onclick = boom2;

function boom() {
 img.style.backgroundImage='url(imjs/'+arr[i]+')';

 i++;

 if (i == arr.length) {
  i = 0;
 }

}



function boom1() {
 img1.style.backgroundImage='url(imjs/'+arr[i]+')';
 i++;

 if (i == arr.length) {
  i = 0;
 }

}



function boom2() {
 img2.style.backgroundImage='url(imjs/'+arr[i]+')';
 i++;

 if (i == arr.length) {
  i = 0;
 }

}