
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled);
    if(scrolled > 90){
        document.getElementsByClassName('menu')[0].style.display = 'none';
        document.getElementsByClassName('menu000')[0].style.display = 'block';
                       
    }
    if(scrolled <= 90){
        document.getElementsByClassName('menu')[0].style.display = 'block';
        document.getElementsByClassName('menu000')[0].style.display = 'none';
    }
}
function funlishka1(){
    document.getElementsByClassName('lishka1')[0].style.borderLeft = '10px solid #006e75'  ;
   document.getElementsByClassName('lishka2')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka3')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka4')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka5')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka6')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementById('lishka1').style.display='block' ;
   document.getElementById('lishka2').style.display='none';
   document.getElementById('lishka3').style.display='none';
   document.getElementById('lishka4').style.display='none';
   document.getElementById('lishka5').style.display='none';
   document.getElementById('lishka6').style.display='none';
}
function funlishka2(){
   document.getElementsByClassName('lishka2')[0].style.borderLeft = '10px solid #006e75'  ;
   document.getElementsByClassName('lishka1')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka3')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka4')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka5')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka6')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementById('lishka1').style.display='none' ;
   document.getElementById('lishka2').style.display='block';
   document.getElementById('lishka3').style.display='none';
   document.getElementById('lishka4').style.display='none';
   document.getElementById('lishka5').style.display='none';
   document.getElementById('lishka6').style.display='none';
}
function funlishka3(){
   document.getElementsByClassName('lishka3')[0].style.borderLeft = '10px solid #006e75'  ;
   document.getElementsByClassName('lishka1')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka2')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka4')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka5')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka6')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementById('lishka1').style.display='none' ;
   document.getElementById('lishka2').style.display='none';
   document.getElementById('lishka3').style.display='block';
   document.getElementById('lishka4').style.display='none';
   document.getElementById('lishka5').style.display='none';
   document.getElementById('lishka6').style.display='none';
}
function funlishka4(){
  document.getElementsByClassName('lishka4')[0].style.borderLeft = '10px solid #006e75'  ;
   document.getElementsByClassName('lishka1')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka3')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka2')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka5')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka6')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementById('lishka1').style.display='none' ;
   document.getElementById('lishka2').style.display='none';
   document.getElementById('lishka3').style.display='none';
   document.getElementById('lishka4').style.display='block';
   document.getElementById('lishka5').style.display='none';
   document.getElementById('lishka6').style.display='none';
}
function funlishka5(){
  document.getElementsByClassName('lishka5')[0].style.borderLeft = '10px solid #006e75'  ;
   document.getElementsByClassName('lishka1')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka3')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka4')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka2')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka6')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementById('lishka1').style.display='none' ;
   document.getElementById('lishka2').style.display='none';
   document.getElementById('lishka3').style.display='none';
   document.getElementById('lishka4').style.display='none';
   document.getElementById('lishka5').style.display='block';
   document.getElementById('lishka6').style.display='none';
}
function funlishka6(){
   document.getElementsByClassName('lishka6')[0].style.borderLeft = '10px solid #006e75'  ;
   document.getElementsByClassName('lishka1')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka3')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka4')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka5')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementsByClassName('lishka2')[0].style.borderLeft = ' 10px solid #DCDCDC'  ;
   document.getElementById('lishka1').style.display='none' ;
   document.getElementById('lishka2').style.display='none';
   document.getElementById('lishka3').style.display='none';
   document.getElementById('lishka4').style.display='none';
   document.getElementById('lishka5').style.display='none';
   document.getElementById('lishka6').style.display='block';
}
var time = 2 , cc=1;
$(window).scroll(function(){
    $('#counter').each(function(){
        var
        cPost = $(this).offset().top;
        topWindow =$(window).scrollTop();
        if(cPost < topWindow+200){
            if(cc<2){
      $('div').each(function(){
        var 
        i = 1,
        num = $(this).data('num'),
        step = 1000 * time / num,
        that = $(this),
        int = setInterval(function(){
          if (i <= num) {
            that.html(i);
          }
          else {
              cc=cc+2;
            clearInterval(int);
              
          }
          i++;
        },step);
      });
      }
     }
    });
});
